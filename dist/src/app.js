import cors from "cors";
import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import authRouter from "./modules/auth/auth.routes.js";
import adminUserRouter from "./modules/users/user.routes.js";
import roleRouter from "./modules/roles/role.routes.js";
import permissionRouter from "./modules/permissions/permission.routes.js";
import teacherRouter from "./modules/teachers/teacher.routes.js";
import courseRouter from "./modules/courses/course.routes.js";
import { listPublicCoursesHandler, getCourseBySlugHandler, getPublicCourseByIdHandler, } from "./modules/courses/course.controller.js";
import enrollmentRouter from "./modules/enrollments/enrollment.routes.js";
import paymentRouter from "./modules/payments/payment.routes.js";
import paymentWebhookRouter from "./modules/payments/payment.webhook.routes.js";
import paymentAdminRouter from "./modules/payments/payment.admin.routes.js";
import couponRouter from "./modules/coupons/coupon.routes.js";
import sectionRouter from "./modules/sections/section.routes.js";
import lessonRouter from "./modules/lessons/lesson.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For form-urlencoded data (MoneySpace webhook may use this)
const apiRouter = express.Router();
apiRouter.get("/", (_req, res) => {
    res.json({ message: "API placeholder" });
});
// Log all requests to /api/auth
apiRouter.use("/auth", (req, res, next) => {
    console.log('🔐 Auth route hit:', req.method, req.path, req.body);
    next();
});
apiRouter.use("/auth", authRouter);
// Payment webhook (public endpoint, no auth required - must be before enrollmentRouter)
apiRouter.use("/payments", paymentWebhookRouter);
// Public courses endpoints
apiRouter.get("/courses/public", listPublicCoursesHandler);
apiRouter.get("/courses", listPublicCoursesHandler);
apiRouter.get("/courses/:id/public", getPublicCourseByIdHandler);
apiRouter.get("/courses/:slug/public", getCourseBySlugHandler);
// Payments
apiRouter.use("/payments", paymentRouter);
// User enrollments
apiRouter.use("/", enrollmentRouter);
apiRouter.use("/admin/users", adminUserRouter);
apiRouter.use("/admin/roles", roleRouter);
apiRouter.use("/admin/permissions", permissionRouter);
apiRouter.use("/admin/teachers", teacherRouter);
apiRouter.use("/admin/courses", courseRouter);
apiRouter.use("/admin/courses/:courseId/sections", sectionRouter);
apiRouter.use("/admin/sections", sectionRouter);
apiRouter.use("/admin/courses/:courseId/sections/:sectionId/lessons", lessonRouter);
apiRouter.use("/admin/sections/:sectionId/lessons", lessonRouter);
apiRouter.use("/admin/lessons", lessonRouter);
apiRouter.use("/admin/payments", paymentAdminRouter);
apiRouter.use("/coupons", couponRouter);
app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
});
// Serve static uploads
// Calculate uploads directory - works for both development and production
// In development: __dirname = src, so we go up one level to find uploads
// In production: __dirname = dist, so we go up one level to find uploads
const uploadsPath = path.join(__dirname, "..", "uploads");
console.log("📁 Serving static files from:", uploadsPath);
console.log("📁 Uploads path exists:", fs.existsSync(uploadsPath));
// Serve static files with proper error handling
app.use("/uploads", (req, res, next) => {
    console.log("📥 Static file request:", req.path);
    express.static(uploadsPath)(req, res, next);
});
app.use("/api", apiRouter);
// Error handler must be last
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map