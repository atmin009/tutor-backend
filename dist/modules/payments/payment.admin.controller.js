import prisma from "../../prisma.js";
import { success, error } from "../../utils/apiResponse.js";
export const PaymentAdminController = {
    // Get revenue statistics
    getRevenueStats: async (req, res, next) => {
        try {
            const { startDate, endDate } = req.query;
            const start = startDate ? new Date(startDate) : new Date();
            start.setDate(start.getDate() - 30); // Default to last 30 days
            const end = endDate ? new Date(endDate) : new Date();
            // Get total revenue
            const totalRevenue = await prisma.order.aggregate({
                where: {
                    status: "completed",
                    createdAt: {
                        gte: start,
                        lte: end,
                    },
                },
                _sum: {
                    amount: true,
                },
                _count: true,
            });
            // Get revenue by payment type
            const revenueByPaymentType = await prisma.order.groupBy({
                by: ["paymentType"],
                where: {
                    status: "completed",
                    createdAt: {
                        gte: start,
                        lte: end,
                    },
                },
                _sum: {
                    amount: true,
                },
                _count: true,
            });
            // Get revenue by date (daily)
            const revenueByDate = await prisma.order.findMany({
                where: {
                    status: "completed",
                    createdAt: {
                        gte: start,
                        lte: end,
                    },
                },
                select: {
                    amount: true,
                    createdAt: true,
                },
                orderBy: {
                    createdAt: "asc",
                },
            });
            // Group by date
            const dailyRevenue = revenueByDate.reduce((acc, order) => {
                const date = order.createdAt.toISOString().split("T")[0];
                if (!acc[date]) {
                    acc[date] = { date, revenue: 0, count: 0 };
                }
                acc[date].revenue += order.amount;
                acc[date].count += 1;
                return acc;
            }, {});
            // Get order status counts
            const orderStatusCounts = await prisma.order.groupBy({
                by: ["status"],
                _count: true,
            });
            return success(res, {
                totalRevenue: totalRevenue._sum.amount || 0,
                totalOrders: totalRevenue._count || 0,
                revenueByPaymentType,
                dailyRevenue: Object.values(dailyRevenue),
                orderStatusCounts,
                period: {
                    start: start.toISOString(),
                    end: end.toISOString(),
                },
            }, "Revenue statistics fetched");
        }
        catch (err) {
            return next(err);
        }
    },
    // Get recent orders
    getRecentOrders: async (req, res, next) => {
        try {
            const limit = parseInt(req.query.limit) || 10;
            const page = parseInt(req.query.page) || 1;
            const status = req.query.status;
            const skip = (page - 1) * limit;
            // Build where clause
            const where = {};
            if (status && status !== 'all') {
                where.status = status;
            }
            const orders = await prisma.order.findMany({
                where,
                take: limit,
                skip,
                orderBy: {
                    createdAt: "desc",
                },
                include: {
                    course: {
                        select: {
                            id: true,
                            title: true,
                            price: true,
                        },
                    },
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                        },
                    },
                },
            });
            const total = await prisma.order.count({ where });
            return success(res, {
                data: orders,
                meta: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit),
                },
            }, "Recent orders fetched");
        }
        catch (err) {
            return next(err);
        }
    },
    // Get order details
    getOrderDetails: async (req, res, next) => {
        try {
            const { id } = req.params;
            if (!id || typeof id !== "string") {
                return error(res, 400, "Invalid order ID");
            }
            const order = await prisma.order.findUnique({
                where: { id: parseInt(id) },
                include: {
                    course: {
                        include: {
                            teacher: {
                                select: {
                                    id: true,
                                    name: true,
                                },
                            },
                        },
                    },
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            phone: true,
                        },
                    },
                },
            });
            if (!order) {
                return error(res, 404, "Order not found");
            }
            return success(res, order, "Order details fetched");
        }
        catch (err) {
            return next(err);
        }
    },
    // Get payment methods statistics
    getPaymentMethods: async (req, res, next) => {
        try {
            const paymentMethods = await prisma.order.groupBy({
                by: ["paymentType"],
                _sum: {
                    amount: true,
                },
                _count: true,
                where: {
                    status: "completed",
                },
            });
            return success(res, paymentMethods, "Payment methods statistics fetched");
        }
        catch (err) {
            return next(err);
        }
    },
};
//# sourceMappingURL=payment.admin.controller.js.map