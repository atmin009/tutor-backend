import { Router } from "express";
import { requireAuth } from "../../middlewares/authMiddleware.js";
import { getMyEnrollmentsHandler, getCourseForLearningHandler, updateProgressHandler, checkEnrollmentHandler, } from "./enrollment.controller.js";
const enrollmentRouter = Router();
enrollmentRouter.use(requireAuth);
enrollmentRouter.get("/me/enrollments", getMyEnrollmentsHandler);
enrollmentRouter.get("/me/courses/:courseId", getCourseForLearningHandler);
enrollmentRouter.get("/me/check-enrollment/:courseId", checkEnrollmentHandler);
enrollmentRouter.post("/me/progress", updateProgressHandler);
export default enrollmentRouter;
//# sourceMappingURL=enrollment.routes.js.map