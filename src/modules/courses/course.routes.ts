import { Router } from "express";
import type { Request, Response, NextFunction } from "express";
import {
  createCourseHandler,
  deleteCourseHandler,
  getCourseHandler,
  listCoursesHandler,
  updateCourseHandler,
} from "./course.controller.js";
import {
  requireAuth,
  requirePermission,
} from "../../middlewares/authMiddleware.js";
import { uploadImage, uploadVideo } from "../../utils/upload.js";
import { success, error } from "../../utils/apiResponse.js";

const courseRouter = Router();

courseRouter.use(requireAuth);
courseRouter.use(requirePermission("manage_courses"));

courseRouter.get("/", listCoursesHandler);
courseRouter.post("/", createCourseHandler);
courseRouter.get("/:id", getCourseHandler);
courseRouter.put("/:id", updateCourseHandler);
courseRouter.delete("/:id", deleteCourseHandler);

// Upload routes
courseRouter.post(
  "/upload-cover",
  uploadImage.single("cover"),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.file) {
        return error(res, 400, "No file uploaded");
      }
      const url = `/uploads/courses/${req.file.filename}`;
      return success(res, { url }, "Cover image uploaded successfully");
    } catch (err) {
      return next(err);
    }
  }
);

courseRouter.post(
  "/upload-preview",
  uploadVideo.single("preview"),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.file) {
        return error(res, 400, "No file uploaded");
      }
      const url = `/uploads/courses/${req.file.filename}`;
      return success(res, { url }, "Preview video uploaded successfully");
    } catch (err) {
      return next(err);
    }
  }
);

export default courseRouter;

