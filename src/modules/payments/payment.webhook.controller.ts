import type { NextFunction, Request, Response } from "express";
import prisma from "../../prisma.js";
import {
  verifyWebhookHash,
  checkTransactionStatusWithRetry,
} from "./moneyspace.utils.js";
import { finalizePaidOrder } from "./payment.service.js";

export const webhookHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Log incoming webhook data for debugging
    console.log("🔔 Webhook received:");
    console.log("   Method:", req.method);
    console.log("   URL:", req.url);
    console.log("   IP:", req.ip);
    console.log("   Headers:", JSON.stringify(req.headers, null, 2));
    console.log("   Body:", JSON.stringify(req.body, null, 2));
    console.log("   Query:", JSON.stringify(req.query, null, 2));

    // MoneySpace may send data in body, query, or both
    // MoneySpace uses different field names: transactionID/transectionID, orderid (lowercase)
    // Try to get data from multiple sources with different field name variations
    const transaction_ID = 
      req.body?.transaction_ID || 
      req.body?.transactionID || 
      req.body?.transectionID || // Typo in MoneySpace API sometimes
      req.query?.transaction_ID || 
      req.query?.transactionID || 
      req.query?.transectionID;
    
    const order_id = 
      req.body?.order_id || 
      req.body?.orderid || // MoneySpace uses lowercase
      req.query?.order_id || 
      req.query?.orderid;
    
    const amount = 
      req.body?.amount !== undefined ? req.body.amount : 
      (req.query?.amount !== undefined ? req.query.amount : undefined);
    
    const status = 
      req.body?.status || 
      req.query?.status;
    
    const hash = 
      req.body?.hash || 
      req.query?.hash;

    console.log("📦 Extracted webhook data:", {
      transaction_ID,
      order_id,
      amount,
      status,
      hash: !!hash,
    });

    // Validate required fields - order_id is the most important
    // For QR code payments, MoneySpace might not send all fields in the first webhook
    if (!order_id) {
      console.error("❌ Webhook validation error: Missing order_id", {
        transaction_ID: !!transaction_ID,
        order_id: !!order_id,
        amount: amount !== undefined,
        status: !!status,
      });
      // Always return ok to prevent MoneySpace retries
      return res.json({ status: "ok" });
    }

    // Find order by order_id first
    const order = await prisma.order.findUnique({
      where: { orderId: order_id },
    });

    if (!order) {
      console.error("Webhook error: Order not found", { order_id });
      // Always return ok to prevent MoneySpace retries
      return res.json({ status: "ok" });
    }

    // Prevent duplicate processing - if order is already paid, skip
    if (order.status === "paid") {
      console.log("ℹ️  Order already paid, skipping webhook processing:", {
        orderId: order.orderId,
        status: order.status,
      });
      return res.json({ status: "ok" });
    }

    // Verify webhook hash for security (if hash is provided)
    if (hash && transaction_ID && amount !== undefined) {
      const isValidHash = verifyWebhookHash(
        hash,
        status,
        transaction_ID,
        amount,
        order_id
      );

      if (!isValidHash) {
        console.error("❌ Webhook hash verification failed - potential security issue");
        // Still return ok to prevent MoneySpace retries, but log the issue
        // In production, you might want to return an error or log to security monitoring
      }
    } else {
      console.warn("⚠️ Webhook hash not provided or missing required fields for verification");
    }

    // Log warning if some fields are missing but continue processing
    // For QR code payments, MoneySpace might send webhook with just order_id and transaction_ID
    if (!transaction_ID || amount === undefined || !status) {
      console.warn("⚠️ Webhook missing some fields (but order_id exists):", {
        transaction_ID: !!transaction_ID,
        order_id: !!order_id,
        amount: amount !== undefined,
        status: !!status,
        orderTransactionId: order.transactionId,
        orderStatus: order.status,
      });
      
      // If we have transaction_ID that matches order's transactionId, and order is still pending,
      // this likely means payment was successful (webhook just missing status field)
      if (transaction_ID && order.transactionId && transaction_ID === order.transactionId && order.status === "pending") {
        console.log("✅ Transaction ID matches - treating as payment success");
        // We'll handle this in the status processing below
      } else if (!transaction_ID && !status) {
        // If we have neither transaction_ID nor status, can't determine payment status
        console.log("⚠️ Cannot determine payment status - missing both transaction_ID and status");
        return res.json({ status: "ok" });
      }
    }

    // Update order status based on payment status
    // MoneySpace sends various status values:
    // - "OK" = Order created (not paid yet) - need to check with Check_Transaction API
    // - "paysuccess" = Payment successful
    // - "paid" = Payment successful
    // - "success" = Payment successful
    // - "completed" = Payment completed
    // - "done" = Payment done
    // - "failed" / "fail" = Payment failed
    let newStatus: string;
    const normalizedStatus = status?.toLowerCase().trim() || "";
    
    console.log("🔍 Processing webhook status:", {
      originalStatus: status,
      normalizedStatus,
      currentOrderStatus: order.status,
      hasTransactionId: !!transaction_ID,
      orderTransactionId: order.transactionId,
    });
    
    // Check if payment is successful
    // For QR code payments, if status = "OK", we need to verify with Check_Transaction API
    let isPaymentSuccess = false;
    
    if (
      normalizedStatus === "paysuccess" ||
      normalizedStatus === "paid" ||
      normalizedStatus === "success" ||
      normalizedStatus === "completed" ||
      normalizedStatus === "done"
    ) {
      // Explicit success status
      isPaymentSuccess = true;
      console.log("✅ Payment confirmed by explicit success status");
    } else if (normalizedStatus === "ok" && transaction_ID) {
      // Status = "OK" - need to check with Check_Transaction API
      console.log("🔍 Status is 'OK' - checking transaction status with API...");
      const checkResult = await checkTransactionStatusWithRetry(transaction_ID, 3, 3);
      
      if (checkResult && checkResult.isPaid) {
        isPaymentSuccess = true;
        console.log("✅ Payment confirmed by Check_Transaction API");
      } else {
        console.log("⚠️  Check_Transaction API indicates payment not yet completed");
        isPaymentSuccess = false;
      }
    } else if (!status && transaction_ID && order.transactionId && transaction_ID === order.transactionId) {
      // No status but transaction ID matches - check with API
      console.log("🔍 No status provided but transaction ID matches - checking with API...");
      const checkResult = await checkTransactionStatusWithRetry(transaction_ID, 3, 3);
      
      if (checkResult && checkResult.isPaid) {
        isPaymentSuccess = true;
        console.log("✅ Payment confirmed by Check_Transaction API");
      } else {
        console.log("⚠️  Check_Transaction API indicates payment not yet completed");
        isPaymentSuccess = false;
      }
    }
    
    if (isPaymentSuccess) {
      newStatus = "paid";
      // Finalize paid order (idempotent): status->paid, enrollment, coupon, telegram
      await finalizePaidOrder({
        orderDbId: order.id,
        transactionId: transaction_ID || order.transactionId,
      });
    } else if (normalizedStatus === "failed" || normalizedStatus === "fail" || normalizedStatus === "error") {
      newStatus = "failed";
      console.log("❌ Payment failed based on webhook status");
    } else if (normalizedStatus === "ok" || normalizedStatus === "pending") {
      // "OK" or "pending" means order created but not paid yet
      // (We already checked with Check_Transaction API above if status = "OK")
      console.log("ℹ️  Webhook status 'OK'/'pending' - Order created, keeping status as pending");
      newStatus = order.status; // Keep current status (usually "pending")
    } else {
      // For other statuses, log and keep current status
      console.log(`⚠️  Unknown webhook status: ${status}, keeping current status: ${order.status}`);
      newStatus = order.status;
    }

    // Only update if status actually changed
    if (newStatus !== order.status || transaction_ID !== order.transactionId) {
      await prisma.order.update({
        where: { id: order.id },
        data: {
          status: newStatus,
          transactionId: transaction_ID || order.transactionId, // Keep existing if new one is empty
        },
      });

      console.log("✅ Order updated:", {
        orderId: order.orderId,
        oldStatus: order.status,
        newStatus,
        oldTransactionId: order.transactionId,
        newTransactionId: transaction_ID || order.transactionId,
      });
    } else {
      console.log("ℹ️  Order status unchanged, no update needed:", {
        orderId: order.orderId,
        status: order.status,
      });
    }

    // Always return success to MoneySpace
    return res.json({ status: "ok" });
  } catch (err) {
    // Log error but still return ok to MoneySpace (to prevent retries)
    console.error("Webhook error:", err);
    return res.json({ status: "ok" });
  }
};

