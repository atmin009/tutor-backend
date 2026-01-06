import type { NextFunction, Request, Response } from "express";
import { createPaymentSession, finalizePaidOrder, getPaymentStatus } from "./payment.service.js";
import { success, error } from "../../utils/apiResponse.js";
import prisma from "../../prisma.js";
import { checkTransactionStatusWithRetry } from "./moneyspace.utils.js";

export const PaymentsController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("💳 Payment create request:", {
        body: req.body,
        userId: req.user?.userId,
      });

      if (!req.user) {
        return error(res, 401, "Unauthorized");
      }

      const { courseId, paymentType, couponCode } = req.body;
      const userId = req.user.userId;

      if (!courseId || !paymentType) {
        return error(res, 400, "courseId and paymentType are required");
      }

      if (paymentType !== "card" && paymentType !== "qrnone") {
        return error(res, 400, "paymentType must be 'card' or 'qrnone'");
      }

      const session = await createPaymentSession(
        userId,
        courseId,
        paymentType,
        couponCode
      );

      console.log("✅ Payment session created successfully:", session.orderId);

      return success(res, session, "Payment session created");
    } catch (err: any) {
      console.error("❌ Payment create error:", err.message);
      
      if (err.message === "Course not found" || err.message === "User not found") {
        return error(res, 404, err.message);
      }
      
      if (err.message.includes("Payment service configuration error")) {
        return error(res, 500, err.message);
      }
      
      if (err.message.includes("MoneySpace API error")) {
        return error(res, 502, err.message);
      }
      
      return next(err);
    }
  },

  status: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        return error(res, 401, "Unauthorized");
      }

      const { orderId, checkMoneySpace } = req.query;

      if (!orderId || typeof orderId !== "string") {
        return error(res, 400, "orderId is required");
      }

      let order = await getPaymentStatus(orderId);

      // Verify the order belongs to the current user
      if (order.userId !== req.user.userId) {
        return error(res, 403, "Forbidden");
      }

      // Optional: Check payment status directly from MoneySpace API
      // This is useful for QR code payments where webhook might be delayed
      const shouldAutoCheckMoneySpace =
        order.paymentType === "qrnone" || checkMoneySpace === "true";

      if (shouldAutoCheckMoneySpace && order.transactionId && order.status === "pending") {
        try {
          console.log("🔍 Checking payment status with MoneySpace API:", {
            orderId: order.orderId,
            transactionId: order.transactionId,
          });

          const checkResult = await checkTransactionStatusWithRetry(
            order.transactionId,
            1,
            0
          );

          if (checkResult?.isPaid) {
            console.log("✅ MoneySpace indicates paid; finalizing order...");
            const updated = await finalizePaidOrder({
              orderDbId: order.id,
              transactionId: order.transactionId,
            });
            if (updated) order = updated;
          } else {
            console.log("ℹ️  MoneySpace indicates not paid yet:", checkResult?.status);
          }
        } catch (err) {
          console.error("❌ Failed to check MoneySpace status:", err);
          // Continue with current status
        }
      }

      console.log("📊 Payment status requested:", {
        orderId: order.orderId,
        currentStatus: order.status,
        hasTransactionId: !!order.transactionId,
        paymentType: order.paymentType,
      });

      return success(res, order, "Payment status fetched");
    } catch (err: any) {
      if (err.message === "Order not found") {
        return error(res, 404, err.message);
      }
      return next(err);
    }
  },

  confirm: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        return error(res, 401, "Unauthorized");
      }

      const { transactionId, orderId } = req.body;

      // Accept either transactionId or orderId
      if (!transactionId && !orderId) {
        return error(res, 400, "transactionId or orderId is required");
      }

      // Find order by transaction ID or order ID
      let order = null;
      
      if (transactionId) {
        order = await prisma.order.findFirst({
          where: {
            transactionId: transactionId,
            userId: req.user.userId,
          },
        });
      } else if (orderId) {
        order = await prisma.order.findUnique({
          where: {
            orderId: orderId,
          },
        });
        
        // Verify the order belongs to the current user
        if (order && order.userId !== req.user.userId) {
          return error(res, 403, "Forbidden");
        }
      }

      if (!order) {
        console.error("❌ Order not found:", { transactionId, orderId, userId: req.user.userId });
        return error(res, 404, "Order not found");
      }

      // If already paid, just return success
      const updatedOrder = await finalizePaidOrder({
        orderDbId: order.id,
        transactionId: transactionId || order.transactionId,
      });

      console.log("✅ Payment confirmed:", {
        orderId: order.orderId,
        transactionId: transactionId || order.transactionId,
        orderIdParam: orderId,
        userId: req.user.userId,
        oldStatus: order.status,
        newStatus: "paid",
      });

      return success(res, updatedOrder, "Payment confirmed successfully");
    } catch (err: any) {
      console.error("❌ Payment confirm error:", err);
      return next(err);
    }
  },
};

