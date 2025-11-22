import { Router } from "express";
import { createTeacherHandler, deleteTeacherHandler, getTeacherHandler, listTeachersHandler, updateTeacherHandler, } from "./teacher.controller.js";
import { TeacherDashboardController } from "./teacher.dashboard.controller.js";
import { requireAuth, requirePermission, } from "../../middlewares/authMiddleware.js";
const teacherRouter = Router();
teacherRouter.use(requireAuth);
teacherRouter.use(requirePermission("manage_courses"));
teacherRouter.get("/", listTeachersHandler);
teacherRouter.post("/", createTeacherHandler);
teacherRouter.get("/:id", getTeacherHandler);
teacherRouter.put("/:id", updateTeacherHandler);
teacherRouter.delete("/:id", deleteTeacherHandler);
// Teacher dashboard routes
teacherRouter.get("/:id/dashboard/stats", TeacherDashboardController.getSalesStats);
teacherRouter.get("/:id/dashboard/buyers", TeacherDashboardController.getBuyers);
export default teacherRouter;
//# sourceMappingURL=teacher.routes.js.map