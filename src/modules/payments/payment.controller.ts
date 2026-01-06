import type { NextFunction, Request, Response } from "express";
import { createPaymentSession, getPaymentStatus } from "./payment.service.js";
import { success, error } from "../../utils/apiResponse.js";
import prisma from "../../prisma.js";

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

      const { orderId } = req.query;

      if (!orderId || typeof orderId !== "string") {
        return error(res, 400, "orderId is required");
      }

      const order = await getPaymentStatus(orderId);

      // Verify the order belongs to the current user
      if (order.userId !== req.user.userId) {
        return error(res, 403, "Forbidden");
      }

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

      const { transactionId } = req.body;

      if (!transactionId || typeof transactionId !== "string") {
        return error(res, 400, "transactionId is required");
      }

      // Find order by transaction ID
      const order = await prisma.order.findFirst({
        where: {
          transactionId: transactionId,
          userId: req.user.userId,
        },
      });

      if (!order) {
        return error(res, 404, "Order not found");
      }

      // If already paid, just return success
      if (order.status === "paid") {
        return success(res, order, "Payment already confirmed");
      }

      // Update order status to paid
      await prisma.order.update({
        where: { id: order.id },
        data: { status: "paid" },
      });

      // Create enrollment if it doesn't exist
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
        console.log("✅ Enrollment created for order:", order.orderId);
      }

      // Apply coupon if used
      if (order.couponId && order.discountAmount > 0) {
        try {
          const { applyCoupon } = await import("../coupons/coupon.service.js");
          await applyCoupon(
            order.couponId,
            order.userId,
            order.id,
            order.discountAmount
          );
          console.log("✅ Coupon applied:", {
            couponId: order.couponId,
            discountAmount: order.discountAmount,
          });
        } catch (couponError) {
          console.error("❌ Failed to apply coupon:", couponError);
          // Don't fail the request if coupon application fails
        }
      }

      const updatedOrder = await prisma.order.findUnique({
        where: { id: order.id },
      });

      console.log("✅ Payment confirmed:", {
        orderId: order.orderId,
        transactionId,
        userId: req.user.userId,
      });

      return success(res, updatedOrder, "Payment confirmed successfully");
    } catch (err: any) {
      console.error("❌ Payment confirm error:", err);
      return next(err);
    }
  },
};

