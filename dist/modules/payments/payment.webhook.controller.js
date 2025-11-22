import prisma from "../../prisma.js";
import { sendTelegramNotification } from "../../utils/telegram.js";
import { applyCoupon } from "../coupons/coupon.service.js";
export const webhookHandler = async (req, res, next) => {
    try {
        // Log incoming webhook data for debugging
        console.log("🔔 Webhook received:");
        console.log("   Method:", req.method);
        console.log("   Headers:", JSON.stringify(req.headers, null, 2));
        console.log("   Body:", JSON.stringify(req.body, null, 2));
        console.log("   Query:", JSON.stringify(req.query, null, 2));
        // MoneySpace may send data in body, query, or both
        // MoneySpace uses different field names: transactionID/transectionID, orderid (lowercase)
        // Try to get data from multiple sources with different field name variations
        const transaction_ID = req.body?.transaction_ID ||
            req.body?.transactionID ||
            req.body?.transectionID || // Typo in MoneySpace API sometimes
            req.query?.transaction_ID ||
            req.query?.transactionID ||
            req.query?.transectionID;
        const order_id = req.body?.order_id ||
            req.body?.orderid || // MoneySpace uses lowercase
            req.query?.order_id ||
            req.query?.orderid;
        const amount = req.body?.amount !== undefined ? req.body.amount :
            (req.query?.amount !== undefined ? req.query.amount : undefined);
        const status = req.body?.status ||
            req.query?.status;
        console.log("📦 Extracted webhook data:", {
            transaction_ID,
            order_id,
            amount,
            status,
        });
        // Validate required fields
        if (!transaction_ID || !order_id || amount === undefined || !status) {
            console.error("❌ Webhook validation error: Missing required fields", {
                transaction_ID: !!transaction_ID,
                order_id: !!order_id,
                amount: amount !== undefined,
                status: !!status,
            });
            // Always return ok to prevent MoneySpace retries
            return res.json({ status: "ok" });
        }
        // Find order by order_id
        const order = await prisma.order.findUnique({
            where: { orderId: order_id },
        });
        if (!order) {
            console.error("Webhook error: Order not found", { order_id });
            // Always return ok to prevent MoneySpace retries
            return res.json({ status: "ok" });
        }
        // Update order status based on payment status
        // MoneySpace sends:
        // - "OK" = Order created (not paid yet)
        // - "paysuccess" = Payment successful
        // - "paid" = Payment successful
        // - "success" = Payment successful (from API response, not webhook)
        // - "failed" / "fail" = Payment failed
        let newStatus;
        const normalizedStatus = status?.toLowerCase();
        // Only update to "paid" if status is explicitly "paysuccess" or "paid"
        // "OK" means order created, not payment completed
        if (normalizedStatus === "paysuccess" || normalizedStatus === "paid") {
            newStatus = "paid";
            // If payment is successful, also create enrollment if it doesn't exist
            const existingEnrollment = await prisma.enrollment.findUnique({
                where: {
                    userId_courseId: {
                        userId: order.userId,
                        courseId: order.courseId,
                    },
                },
            });
            if (!existingEnrollment) {
                await prisma.enrollment.create({
                    data: {
                        userId: order.userId,
                        courseId: order.courseId,
                    },
                });
            }
            // Apply coupon if used
            if (order.couponId && order.discountAmount > 0) {
                try {
                    await applyCoupon(order.couponId, order.userId, order.id, order.discountAmount);
                    console.log("✅ Coupon applied:", {
                        couponId: order.couponId,
                        discountAmount: order.discountAmount,
                    });
                }
                catch (couponError) {
                    console.error("❌ Failed to apply coupon:", couponError);
                    // Don't fail the webhook if coupon application fails
                }
            }
            // Send Telegram notification
            try {
                const orderWithDetails = await prisma.order.findUnique({
                    where: { id: order.id },
                    include: {
                        user: {
                            select: {
                                name: true,
                                email: true,
                                phone: true,
                            },
                        },
                        course: {
                            select: {
                                title: true,
                            },
                        },
                    },
                });
                if (orderWithDetails) {
                    // Get coupon info if used
                    let couponInfo = null;
                    if (orderWithDetails.couponId) {
                        const coupon = await prisma.coupon.findUnique({
                            where: { id: orderWithDetails.couponId },
                            select: { code: true, description: true },
                        });
                        if (coupon) {
                            couponInfo = {
                                code: coupon.code,
                                description: coupon.description,
                                discountAmount: orderWithDetails.discountAmount,
                            };
                        }
                    }
                    await sendTelegramNotification(process.env.TELEGRAM_BOT_TOKEN || "", process.env.TELEGRAM_CHAT_ID || "", {
                        userName: orderWithDetails.user.name,
                        courseTitle: orderWithDetails.course.title,
                        amount: orderWithDetails.amount,
                        originalAmount: orderWithDetails.amount + (orderWithDetails.discountAmount || 0),
                        discountAmount: orderWithDetails.discountAmount || 0,
                        couponInfo,
                        orderDate: orderWithDetails.createdAt,
                        phone: orderWithDetails.user.phone || "ไม่ระบุ",
                        paymentMethod: orderWithDetails.paymentType || "ไม่ระบุ",
                    });
                }
            }
            catch (telegramError) {
                // Log error but don't fail the webhook
                console.error("Failed to send Telegram notification:", telegramError);
            }
        }
        else if (normalizedStatus === "failed" || normalizedStatus === "fail") {
            newStatus = "failed";
        }
        else if (normalizedStatus === "ok") {
            // "OK" means order created, keep as pending
            console.log("ℹ️  Webhook status 'OK' - Order created, keeping status as pending");
            newStatus = order.status; // Keep current status (usually "pending")
        }
        else {
            // For other statuses, keep current status
            console.log(`ℹ️  Unknown webhook status: ${status}, keeping current status`);
            newStatus = order.status;
        }
        // Update order
        await prisma.order.update({
            where: { id: order.id },
            data: {
                status: newStatus,
                transactionId: transaction_ID,
            },
        });
        console.log("✅ Order updated:", {
            orderId: order.orderId,
            newStatus,
            transactionId: transaction_ID,
        });
        // Always return success to MoneySpace
        return res.json({ status: "ok" });
    }
    catch (err) {
        // Log error but still return ok to MoneySpace (to prevent retries)
        console.error("Webhook error:", err);
        return res.json({ status: "ok" });
    }
};
//# sourceMappingURL=payment.webhook.controller.js.map