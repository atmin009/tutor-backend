import type { NextFunction, Request, Response } from "express";
import {
  createLesson,
  deleteLesson,
  getLessonById,
  listLessonsBySection,
  updateLesson,
} from "./lesson.service.js";
import { error, success } from "../../utils/apiResponse.js";

export const listLessonsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const sectionId = Number(req.params.sectionId);

  if (Number.isNaN(sectionId)) {
    return error(res, 400, "Invalid section ID");
  }

  try {
    const lessons = await listLessonsBySection(sectionId);
    return success(res, lessons, "Lessons retrieved successfully");
  } catch (err) {
    return next(err);
  }
};

export const getLessonHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return error(res, 400, "Invalid lesson ID");
  }

  try {
    const lesson = await getLessonById(id);

    if (!lesson) {
      return error(res, 404, "Lesson not found");
    }

    return success(res, lesson, "Lesson retrieved successfully");
  } catch (err) {
    return next(err);
  }
};

export const createLessonHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const sectionId = Number(req.params.sectionId);
  let courseId = Number(req.params.courseId);

  if (Number.isNaN(sectionId)) {
    return error(res, 400, "Invalid section ID");
  }

  // If courseId is not in params (direct route), fetch it from section
  if (Number.isNaN(courseId)) {
    try {
      const prisma = (await import("../../prisma.js")).default;
      const section = await prisma.section.findUnique({
        where: { id: sectionId },
        select: { courseId: true },
      });

      if (!section) {
        return error(res, 404, "Section not found");
      }

      courseId = section.courseId;
    } catch (err) {
      return next(err);
    }
  }

  const {
    title,
    contentType,
    contentUrl,
    contentText,
    duration,
    sortOrder,
  } = req.body ?? {};

  if (!title || typeof title !== "string" || !title.trim()) {
    return error(res, 400, "Title is required");
  }

  if (!contentType || typeof contentType !== "string" || !contentType.trim()) {
    return error(res, 400, "Content type is required");
  }

  try {
    const lesson = await createLesson({
      courseId,
      sectionId,
      title: title.trim(),
      contentType: contentType.trim(),
      contentUrl: contentUrl || null,
      contentText: contentText || null,
      duration: duration !== undefined ? (duration ? Number(duration) : null) : null,
      sortOrder: sortOrder !== undefined ? Number(sortOrder) : 0,
    });

    return success(res.status(201), lesson, "Lesson created successfully");
  } catch (err) {
    return next(err);
  }
};

export const updateLessonHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return error(res, 400, "Invalid lesson ID");
  }

  try {
    const {
      title,
      contentType,
      contentUrl,
      contentText,
      duration,
      sortOrder,
      sectionId,
    } = req.body ?? {};

    const updateData: {
      title?: string;
      contentType?: string;
      contentUrl?: string | null;
      contentText?: string | null;
      duration?: number | null;
      sortOrder?: number;
      sectionId?: number | null;
    } = {};

    if (title !== undefined) {
      if (typeof title !== "string" || !title.trim()) {
        return error(res, 400, "Title must be a non-empty string");
      }
      updateData.title = title.trim();
    }

    if (contentType !== undefined) {
      if (typeof contentType !== "string" || !contentType.trim()) {
        return error(res, 400, "Content type must be a non-empty string");
      }
      updateData.contentType = contentType.trim();
    }

    if (contentUrl !== undefined) updateData.contentUrl = contentUrl || null;
    if (contentText !== undefined) updateData.contentText = contentText || null;
    if (duration !== undefined)
      updateData.duration = duration ? Number(duration) : null;
    if (sortOrder !== undefined) updateData.sortOrder = Number(sortOrder);
    if (sectionId !== undefined)
      updateData.sectionId = sectionId ? Number(sectionId) : null;

    const lesson = await updateLesson(id, updateData);

    return success(res, lesson, "Lesson updated successfully");
  } catch (err) {
    return next(err);
  }
};

export const deleteLessonHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return error(res, 400, "Invalid lesson ID");
  }

  try {
    await deleteLesson(id);
    return success(res, null, "Lesson deleted successfully");
  } catch (err) {
    return next(err);
  }
};

