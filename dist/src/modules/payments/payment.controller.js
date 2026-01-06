import { createPaymentSession, getPaymentStatus } from "./payment.service.js";
import { success, error } from "../../utils/apiResponse.js";
import prisma from "../../prisma.js";
export const PaymentsController = {
    create: async (req, res, next) => {
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
            const session = await createPaymentSession(userId, courseId, paymentType, couponCode);
            console.log("✅ Payment session created successfully:", session.orderId);
            return success(res, session, "Payment session created");
        }
        catch (err) {
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
    status: async (req, res, next) => {
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
            if (checkMoneySpace === "true" && order.transactionId && order.status === "pending") {
                try {
                    console.log("🔍 Checking payment status with MoneySpace API:", {
                        orderId: order.orderId,
                        transactionId: order.transactionId,
                    });
                    // Note: MoneySpace may have a status check API endpoint
                    // For now, we'll just log and return current status
                    // If MoneySpace provides a status check API, we can implement it here
                    console.log("ℹ️  MoneySpace status check not implemented yet - relying on webhook");
                }
                catch (err) {
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
        }
        catch (err) {
            if (err.message === "Order not found") {
                return error(res, 404, err.message);
            }
            return next(err);
        }
    },
    confirm: async (req, res, next) => {
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
            }
            else if (orderId) {
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
            if (order.status === "paid") {
                return success(res, order, "Payment already confirmed");
            }
            // Update order status to paid
            console.log("🔄 Updating order status to paid:", {
                orderId: order.orderId,
                currentStatus: order.status,
                orderDbId: order.id,
            });
            await prisma.order.update({
                where: { id: order.id },
                data: { status: "paid" },
            });
            console.log("✅ Order status updated to paid");
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
                    await applyCoupon(order.couponId, order.userId, order.id, order.discountAmount);
                    console.log("✅ Coupon applied:", {
                        couponId: order.couponId,
                        discountAmount: order.discountAmount,
                    });
                }
                catch (couponError) {
                    console.error("❌ Failed to apply coupon:", couponError);
                    // Don't fail the request if coupon application fails
                }
            }
            const updatedOrder = await prisma.order.findUnique({
                where: { id: order.id },
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
        }
        catch (err) {
            console.error("❌ Payment confirm error:", err);
            return next(err);
        }
    },
};
//# sourceMappingURL=payment.controller.js.map