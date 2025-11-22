import { validateCoupon, createCoupon, updateCoupon, deleteCoupon, getCoupons, getCouponById, } from "./coupon.service.js";
import { success, error } from "../../utils/apiResponse.js";
import prisma from "../../prisma.js";
export const CouponController = {
    // Validate coupon (for frontend)
    validate: async (req, res, next) => {
        try {
            if (!req.user) {
                return error(res, 401, "Unauthorized");
            }
            const { code, courseId } = req.body;
            const userId = req.user.userId;
            if (!code || !courseId) {
                return error(res, 400, "code and courseId are required");
            }
            // Get course price
            const course = await prisma.course.findUnique({
                where: { id: Number(courseId) },
            });
            if (!course) {
                return error(res, 404, "Course not found");
            }
            const coursePrice = course.salePrice || course.price;
            const result = await validateCoupon(code, userId, Number(courseId), coursePrice);
            if (!result.valid) {
                return error(res, 400, result.message || "Invalid coupon");
            }
            return success(res, {
                discountAmount: result.discountAmount,
                coupon: {
                    id: result.coupon?.id,
                    code: result.coupon?.code,
                    description: result.coupon?.description,
                },
            });
        }
        catch (err) {
            console.error("Coupon validate error:", err);
            return next(err);
        }
    },
    // Admin: Get all coupons
    getAll: async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const result = await getCoupons(page, limit);
            return success(res, result);
        }
        catch (err) {
            console.error("Get coupons error:", err);
            return next(err);
        }
    },
    // Admin: Get coupon by ID
    getById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const coupon = await getCouponById(Number(id));
            if (!coupon) {
                return error(res, 404, "Coupon not found");
            }
            return success(res, coupon);
        }
        catch (err) {
            console.error("Get coupon error:", err);
            return next(err);
        }
    },
    // Admin: Create coupon
    create: async (req, res, next) => {
        try {
            const data = req.body;
            // Validate required fields
            if (!data.code || !data.discountType || !data.discountValue) {
                return error(res, 400, "code, discountType, and discountValue are required");
            }
            // Check if code already exists
            const existing = await prisma.coupon.findUnique({
                where: { code: data.code.toUpperCase() },
            });
            if (existing) {
                return error(res, 400, "Coupon code already exists");
            }
            const coupon = await createCoupon(data);
            return success(res, coupon, "Coupon created successfully");
        }
        catch (err) {
            console.error("Create coupon error:", err);
            if (err.code === "P2002") {
                return error(res, 400, "Coupon code already exists");
            }
            return next(err);
        }
    },
    // Admin: Update coupon
    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = req.body;
            // Check if coupon exists
            const existing = await prisma.coupon.findUnique({
                where: { id: Number(id) },
            });
            if (!existing) {
                return error(res, 404, "Coupon not found");
            }
            // Check if code is being changed and already exists
            if (data.code && data.code.toUpperCase() !== existing.code) {
                const codeExists = await prisma.coupon.findUnique({
                    where: { code: data.code.toUpperCase() },
                });
                if (codeExists) {
                    return error(res, 400, "Coupon code already exists");
                }
            }
            const coupon = await updateCoupon(Number(id), data);
            return success(res, coupon, "Coupon updated successfully");
        }
        catch (err) {
            console.error("Update coupon error:", err);
            if (err.code === "P2002") {
                return error(res, 400, "Coupon code already exists");
            }
            return next(err);
        }
    },
    // Admin: Delete coupon
    delete: async (req, res, next) => {
        try {
            const { id } = req.params;
            const existing = await prisma.coupon.findUnique({
                where: { id: Number(id) },
            });
            if (!existing) {
                return error(res, 404, "Coupon not found");
            }
            await deleteCoupon(Number(id));
            return success(res, null, "Coupon deleted successfully");
        }
        catch (err) {
            console.error("Delete coupon error:", err);
            return next(err);
        }
    },
};
//# sourceMappingURL=coupon.controller.js.map