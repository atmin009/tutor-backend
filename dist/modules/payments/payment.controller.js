import { createPaymentSession, getPaymentStatus } from "./payment.service.js";
import { success, error } from "../../utils/apiResponse.js";
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
        }
        catch (err) {
            if (err.message === "Order not found") {
                return error(res, 404, err.message);
            }
            return next(err);
        }
    },
};
//# sourceMappingURL=payment.controller.js.map