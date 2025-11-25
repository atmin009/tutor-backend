import type { NextFunction, Request, Response } from "express";
import {
  createCourse,
  deleteCourse,
  getCourseById,
  getCourseBySlug,
  getPublicCourseById,
  listCourses,
  listPublicCourses,
  updateCourse,
} from "./course.service.js";
import { error, success } from "../../utils/apiResponse.js";

const parsePositiveInt = (value: unknown, fallback: number, max?: number) => {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }

  const sanitized = Math.floor(parsed);
  if (max) {
    return Math.min(sanitized, max);
  }
  return sanitized;
};

export const listCoursesHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parsePositiveInt(req.query.page, 1);
    const limit = parsePositiveInt(req.query.limit, 10, 100);
    const search =
      typeof req.query.search === "string" && req.query.search.trim().length
        ? req.query.search.trim()
        : undefined;
    const status =
      typeof req.query.status === "string" && req.query.status.trim().length
        ? req.query.status.trim()
        : undefined;

    const result = await listCourses({ 
      page, 
      limit, 
      ...(search !== undefined && { search }), 
      ...(status !== undefined && { status }) 
    });
    return success(res, result, "Courses retrieved successfully");
  } catch (err) {
    return next(err);
  }
};

export const listPublicCoursesHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parsePositiveInt(req.query.page, 1);
    const limit = parsePositiveInt(req.query.limit, 20, 100);
    const search =
      typeof req.query.search === "string" && req.query.search.trim().length
        ? req.query.search.trim()
        : undefined;

    const result = await listPublicCourses({ 
      page, 
      limit, 
      ...(search !== undefined && { search }) 
    });
    return success(res, result, "Courses retrieved successfully");
  } catch (err) {
    return next(err);
  }
};

export const getCourseBySlugHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const identifier = req.params.slug || req.params.id;
  const paramName = req.params.slug ? "slug" : "id";

  console.log("🔍 getCourseBySlugHandler called:", {
    identifier,
    paramName,
    params: req.params,
  });

  if (!identifier || typeof identifier !== "string") {
    console.error("❌ Invalid course identifier:", identifier);
    return error(res, 400, "Invalid course identifier");
  }

  try {
    // First try to find by slug
    let course = await getCourseBySlug(identifier);

    // If not found by slug and identifier is numeric, try by ID
    if (!course && /^\d+$/.test(identifier)) {
      const id = Number(identifier);
      console.log("🔄 Slug not found, trying by ID:", id);
      course = await getPublicCourseById(id);
    }

    console.log("📦 Course found:", {
      identifier,
      paramName,
      found: !!course,
      courseId: course?.id,
      courseTitle: course?.title,
      courseStatus: course?.status,
      courseSlug: course?.slug,
    });

    if (!course) {
      console.error("❌ Course not found or not published:", identifier);
      return error(res, 404, "Course not found");
    }

    return success(res, course, "Course retrieved successfully");
  } catch (err) {
    console.error("❌ Error in getCourseBySlugHandler:", err);
    return next(err);
  }
};

export const getPublicCourseByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  console.log("🔍 getPublicCourseByIdHandler called:", {
    id,
    params: req.params,
    isNaN: Number.isNaN(id),
  });

  if (Number.isNaN(id)) {
    console.error("❌ Invalid course ID:", req.params.id);
    return error(res, 400, "Invalid course ID");
  }

  try {
    const course = await getPublicCourseById(id);

    console.log("📦 Course found:", {
      id,
      found: !!course,
      courseId: course?.id,
      courseTitle: course?.title,
      courseStatus: course?.status,
    });

    if (!course) {
      console.error("❌ Course not found or not published:", id);
      return error(res, 404, "Course not found");
    }

    return success(res, course, "Course retrieved successfully");
  } catch (err) {
    console.error("❌ Error in getPublicCourseByIdHandler:", err);
    return next(err);
  }
};

export const getCourseHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return error(res, 400, "Invalid course ID");
  }

  try {
    const course = await getCourseById(id);

    if (!course) {
      return error(res, 404, "Course not found");
    }

    return success(res, course, "Course retrieved successfully");
  } catch (err) {
    return next(err);
  }
};

export const createCourseHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    title,
    slug,
    description,
    summary,
    price,
    salePrice,
    status,
    coverImage,
    previewVideoUrl,
    teacherId,
  } = req.body ?? {};

  if (!title || typeof title !== "string" || !title.trim()) {
    return error(res, 400, "Title is required");
  }

  try {
    const course = await createCourse({
      title: title.trim(),
      slug: slug || undefined,
      description: description || null,
      summary: summary || null,
      price: price !== undefined ? Number(price) : 0,
      salePrice: salePrice !== undefined ? (salePrice ? Number(salePrice) : null) : null,
      status: status || undefined,
      coverImage: coverImage || null,
      previewVideoUrl: previewVideoUrl || null,
      teacherId: teacherId !== undefined ? (teacherId ? Number(teacherId) : null) : null,
    });

    return success(res.status(201), course, "Course created successfully");
  } catch (err) {
    return next(err);
  }
};

export const updateCourseHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return error(res, 400, "Invalid course ID");
  }

  try {
    const {
      title,
      slug,
      description,
      summary,
      price,
      salePrice,
      status,
      coverImage,
      previewVideoUrl,
      teacherId,
    } = req.body ?? {};

    const updateData: {
      title?: string;
      slug?: string;
      description?: string | null;
      summary?: string | null;
      price?: number;
      salePrice?: number | null;
      status?: string;
      coverImage?: string | null;
      previewVideoUrl?: string | null;
      teacherId?: number | null;
    } = {};

    if (title !== undefined) {
      if (typeof title !== "string" || !title.trim()) {
        return error(res, 400, "Title must be a non-empty string");
      }
      updateData.title = title.trim();
    }
    if (slug !== undefined) updateData.slug = slug || undefined;
    if (description !== undefined) updateData.description = description || null;
    if (summary !== undefined) updateData.summary = summary || null;
    if (price !== undefined) updateData.price = Number(price);
    if (salePrice !== undefined) updateData.salePrice = salePrice ? Number(salePrice) : null;
    if (status !== undefined) updateData.status = status;
    if (coverImage !== undefined) updateData.coverImage = coverImage || null;
    if (previewVideoUrl !== undefined) updateData.previewVideoUrl = previewVideoUrl || null;
    if (teacherId !== undefined)
      updateData.teacherId = teacherId ? Number(teacherId) : null;

    const course = await updateCourse(id, updateData);

    return success(res, course, "Course updated successfully");
  } catch (err) {
    return next(err);
  }
};

export const deleteCourseHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return error(res, 400, "Invalid course ID");
  }

  try {
    const course = await deleteCourse(id);
    return success(res, course, "Course archived successfully");
  } catch (err) {
    return next(err);
  }
};

