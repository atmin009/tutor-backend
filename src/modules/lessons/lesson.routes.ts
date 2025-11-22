import { Router } from "express";
import {
  createLessonHandler,
  deleteLessonHandler,
  getLessonHandler,
  listLessonsHandler,
  updateLessonHandler,
} from "./lesson.controller.js";
import {
  requireAuth,
  requirePermission,
} from "../../middlewares/authMiddleware.js";

const lessonRouter = Router({ mergeParams: true });

lessonRouter.use(requireAuth);
lessonRouter.use(requirePermission("manage_courses"));

lessonRouter.get("/", listLessonsHandler);
lessonRouter.post("/", createLessonHandler);
lessonRouter.get("/:id", getLessonHandler);
lessonRouter.put("/:id", updateLessonHandler);
lessonRouter.delete("/:id", deleteLessonHandler);

export default lessonRouter;

