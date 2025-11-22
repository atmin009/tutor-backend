import type { NextFunction, Request, Response } from "express";
import prisma from "../../prisma.js";
import { success, error } from "../../utils/apiResponse.js";

export const TeacherDashboardController = {
  // Get teacher sales statistics
  getSalesStats: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teacherId = Number(req.params.id);
      const { startDate, endDate } = req.query;

      if (Number.isNaN(teacherId)) {
        return error(res, 400, "Invalid teacher ID");
      }

      // Set date range
      const start = startDate ? new Date(startDate as string) : new Date();
      start.setDate(start.getDate() - 30); // Default to last 30 days
      const end = endDate ? new Date(endDate as string) : new Date();
      end.setHours(23, 59, 59, 999); // End of day

      // Get teacher's courses
      const courses = await prisma.course.findMany({
        where: {
          teacherId: teacherId,
        },
        select: {
          id: true,
          title: true,
        },
      });

      const courseIds = courses.map((c) => c.id);

      if (courseIds.length === 0) {
        return success(res, {
          totalSales: 0,
          totalRevenue: 0,
          totalCourses: 0,
          courses: [],
          salesByCourse: [],
          period: {
            start: start.toISOString(),
            end: end.toISOString(),
          },
        }, "Sales statistics fetched");
      }

      // Get completed orders for teacher's courses
      const orders = await prisma.order.findMany({
        where: {
          courseId: { in: courseIds },
          status: "completed",
          createdAt: {
            gte: start,
            lte: end,
          },
        },
        include: {
          course: {
            select: {
              id: true,
              title: true,
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
        orderBy: {
          createdAt: "desc",
        },
      });

      // Calculate statistics
      const totalSales = orders.length;
      const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);

      // Group by course
      const salesByCourse = courses.map((course) => {
        const courseOrders = orders.filter((o) => o.courseId === course.id);
        return {
          courseId: course.id,
          courseTitle: course.title,
          sales: courseOrders.length,
          revenue: courseOrders.reduce((sum, o) => sum + o.amount, 0),
        };
      });

      return success(res, {
        totalSales,
        totalRevenue,
        totalCourses: courses.length,
        courses: courses.map((c) => ({ id: c.id, title: c.title })),
        salesByCourse,
        period: {
          start: start.toISOString(),
          end: end.toISOString(),
        },
      }, "Sales statistics fetched");
    } catch (err) {
      return next(err);
    }
  },

  // Get teacher's buyers list
  getBuyers: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teacherId = Number(req.params.id);
      const { startDate, endDate, limit = "50", page = "1" } = req.query;

      if (Number.isNaN(teacherId)) {
        return error(res, 400, "Invalid teacher ID");
      }

      // Set date range
      const start = startDate ? new Date(startDate as string) : new Date();
      start.setDate(start.getDate() - 30);
      const end = endDate ? new Date(endDate as string) : new Date();
      end.setHours(23, 59, 59, 999);

      // Get teacher's courses
      const courses = await prisma.course.findMany({
        where: {
          teacherId: teacherId,
        },
        select: {
          id: true,
        },
      });

      const courseIds = courses.map((c) => c.id);

      if (courseIds.length === 0) {
        return success(res, {
          data: [],
          meta: {
            page: parseInt(page as string),
            limit: parseInt(limit as string),
            total: 0,
            totalPages: 0,
          },
        }, "Buyers list fetched");
      }

      const limitNum = parseInt(limit as string);
      const pageNum = parseInt(page as string);
      const skip = (pageNum - 1) * limitNum;

      // Get orders with pagination
      const orders = await prisma.order.findMany({
        where: {
          courseId: { in: courseIds },
          status: "completed",
          createdAt: {
            gte: start,
            lte: end,
          },
        },
        take: limitNum,
        skip,
        include: {
          course: {
            select: {
              id: true,
              title: true,
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
        orderBy: {
          createdAt: "desc",
        },
      });

      const total = await prisma.order.count({
        where: {
          courseId: { in: courseIds },
          status: "completed",
          createdAt: {
            gte: start,
            lte: end,
          },
        },
      });

      return success(res, {
        data: orders,
        meta: {
          page: pageNum,
          limit: limitNum,
          total,
          totalPages: Math.ceil(total / limitNum),
        },
      }, "Buyers list fetched");
    } catch (err) {
      return next(err);
    }
  },
};

