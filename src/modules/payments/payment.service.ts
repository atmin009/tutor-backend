import axios from "axios";
import { randomUUID } from "crypto";
import prisma from "../../prisma.js";
import { validateCoupon, applyCoupon } from "../coupons/coupon.service.js";

const MONEYSPACE_URL = "https://a.moneyspace.net/payment/CreateTransaction";

export async function createPaymentSession(
  userId: number,
  courseId: number,
  paymentType: string,
  couponCode?: string
) {
  // Validate environment variables
  if (!process.env.MONEYSPACE_SECRET_ID || !process.env.MONEYSPACE_SECRET_KEY) {
    console.error("❌ MoneySpace credentials missing from environment variables");
    throw new Error("Payment service configuration error: Missing MoneySpace credentials");
  }

  if (!process.env.PAYMENT_SUCCESS_REDIRECT || !process.env.PAYMENT_FAIL_REDIRECT || !process.env.PAYMENT_CANCEL_REDIRECT) {
    console.error("❌ Payment redirect URLs missing from environment variables");
    throw new Error("Payment service configuration error: Missing redirect URLs");
  }

  console.log("💳 Creating payment session:", { userId, courseId, paymentType });

  // Step 1: Fetch course
  const course = await prisma.course.findUnique({ where: { id: courseId } });
  if (!course) {
    console.error("❌ Course not found:", courseId);
    throw new Error("Course not found");
  }

  // Step 2: Fetch user for payment details
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    console.error("❌ User not found:", userId);
    throw new Error("User not found");
  }

  // Step 3: Validate coupon if provided
  let couponId: number | null = null;
  let discountAmount = 0;
  const coursePrice = course.salePrice || course.price;

  if (couponCode) {
    console.log("🎫 Validating coupon:", couponCode);
    const couponResult = await validateCoupon(
      couponCode,
      userId,
      courseId,
      coursePrice
    );

    if (!couponResult.valid) {
      throw new Error(couponResult.message || "Invalid coupon");
    }

    couponId = couponResult.coupon!.id;
    discountAmount = couponResult.discountAmount || 0;
    console.log("✅ Coupon validated. Discount:", discountAmount);
  }

  // Step 4: Calculate final amount
  const finalAmount = Math.max(0, coursePrice - discountAmount);

  // Step 5: Generate orderId (must be alphanumeric only, max 20 chars)
  const orderId = "ORD" + randomUUID().replace(/-/g, "").slice(0, 17);
  console.log("📦 Generated orderId:", orderId);

  // Step 6: Insert pending order in DB
  const order = await prisma.order.create({
    data: {
      orderId,
      userId,
      courseId,
      amount: finalAmount,
      status: "pending",
      paymentType,
      couponId,
      discountAmount,
    },
  });
  console.log("✅ Order created in DB:", order.id);

  // Step 5: Call MoneySpace API
  // Build webhook URL for MoneySpace to send payment status updates
  const webhookBaseUrl = process.env.WEBHOOK_BASE_URL || process.env.PAYMENT_SUCCESS_REDIRECT?.replace(/\/payment\/success.*$/, '') || 'https://apis.mtr-training.com';
  const webhookUrl = `${webhookBaseUrl.replace(/\/$/, '')}/api/payments/webhook`;
  
  const body = {
    secret_id: process.env.MONEYSPACE_SECRET_ID,
    secret_key: process.env.MONEYSPACE_SECRET_KEY,
    order_id: orderId,
    firstname: user.name.split(" ")[0] || "User",
    lastname: user.name.split(" ").slice(1).join(" ") || "Customer",
    email: user.email,
    phone: user.phone || "0000000000",
    amount: Number(finalAmount.toFixed(2)),
    description: course.title,
    address: "-",
    message: "Course purchase",
    feeType: "include",
    payment_type: paymentType === "card" ? "card" : "qrnone",
    // Build success URL - redirect to payment success page with courseId
    // Extract base URL from PAYMENT_SUCCESS_REDIRECT or use default
    success_Url: (() => {
      const baseUrl = process.env.PAYMENT_SUCCESS_REDIRECT 
        ? process.env.PAYMENT_SUCCESS_REDIRECT.replace(/\/learning\/\d+$/, '')
        : 'https://tutors.mtr-training.com';
      // Remove trailing slash if exists
      const cleanBaseUrl = baseUrl.replace(/\/$/, '');
      return `${cleanBaseUrl}/payment/success?courseId=${courseId}`;
    })(),
    fail_Url: process.env.PAYMENT_FAIL_REDIRECT || 'https://tutors.mtr-training.com/payment/fail',
    cancel_Url: process.env.PAYMENT_CANCEL_REDIRECT || 'https://tutors.mtr-training.com/payment/cancel',
    // Add webhook URL for MoneySpace to send payment status updates
    notify_Url: webhookUrl,
    agreement: "5",
    language: "th",
  };
  
  console.log("🔗 Webhook URL configured:", webhookUrl);

  console.log("🌐 Calling MoneySpace API...");
  console.log("   URL:", MONEYSPACE_URL);
  console.log("   Order ID:", orderId);
  console.log("   Amount:", body.amount);
  console.log("   Payment Type:", body.payment_type);

  try {
    const res = await axios.post(MONEYSPACE_URL, body, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("✅ MoneySpace API response status:", res.status);
    console.log("📦 MoneySpace API response data:", JSON.stringify(res.data, null, 2));

    const data = res.data[0] || res.data;

    // Check for error in response
    if (data.error || data.status === "error" || data.message) {
      console.error("❌ MoneySpace API error:", data.error || data.message);
      throw new Error(data.message || data.error || "MoneySpace API returned an error");
    }

    // Step 6: Update order
    await prisma.order.update({
      where: { id: order.id },
      data: {
        transactionId: data.transaction_ID || null,
        paymentUrl: data.link_payment || null,
        qrImageUrl: data.image_qrprom || null,
      },
    });

    console.log("✅ Order updated with payment details");

    // Step 7: Apply coupon if used (before payment is confirmed, we just mark it)
    // Note: We'll actually apply the coupon when payment is confirmed in webhook

    // Step 8: return session info
    return {
      orderId,
      amount: finalAmount,
      originalAmount: coursePrice,
      discountAmount,
      couponId,
      transactionId: data.transaction_ID || null,
      paymentUrl: data.link_payment || null,
      qrImageUrl: data.image_qrprom || null,
      courseTitle: course.title,
    };
  } catch (err: any) {
    console.error("❌ MoneySpace API call failed:");
    console.error("   Error message:", err.message);
    if (err.response) {
      console.error("   Response status:", err.response.status);
      console.error("   Response data:", JSON.stringify(err.response.data, null, 2));
    }

    // Update order status to failed
    await prisma.order.update({
      where: { id: order.id },
      data: { status: "failed" },
    });

    // Re-throw with more descriptive error
    if (err.response?.data?.message) {
      throw new Error(`MoneySpace API error: ${err.response.data.message}`);
    } else if (err.message) {
      throw new Error(`MoneySpace API error: ${err.message}`);
    } else {
      throw new Error("Failed to create payment session with MoneySpace");
    }
  }
}

export async function getPaymentStatus(orderId: string) {
  const order = await prisma.order.findUnique({
    where: { orderId },
  });
  if (!order) throw new Error("Order not found");
  return order;
}

