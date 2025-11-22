import type { NextFunction, Request, Response } from "express";
import {
  createTeacher,
  deleteTeacher,
  getTeacherById,
  listTeachers,
  updateTeacher,
} from "./teacher.service.js";
import { error, success } from "../../utils/apiResponse.js";

export const listTeachersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const search =
      typeof req.query.search === "string" && req.query.search.trim().length
        ? req.query.search.trim()
        : undefined;

    const teachers = await listTeachers(search);
    return success(res, teachers, "Teachers retrieved successfully");
  } catch (err) {
    return next(err);
  }
};

export const getTeacherHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return error(res, 400, "Invalid teacher ID");
  }

  try {
    const teacher = await getTeacherById(id);

    if (!teacher) {
      return error(res, 404, "Teacher not found");
    }

    return success(res, teacher, "Teacher retrieved successfully");
  } catch (err) {
    return next(err);
  }
};

export const createTeacherHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, bio, avatarUrl } = req.body ?? {};

  if (!name || typeof name !== "string" || !name.trim()) {
    return error(res, 400, "Name is required");
  }

  try {
    const teacher = await createTeacher({
      name: name.trim(),
      bio: bio || null,
      avatarUrl: avatarUrl || null,
    });

    return success(res.status(201), teacher, "Teacher created successfully");
  } catch (err) {
    return next(err);
  }
};

export const updateTeacherHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return error(res, 400, "Invalid teacher ID");
  }

  try {
    const { name, bio, avatarUrl } = req.body ?? {};

    const updateData: {
      name?: string;
      bio?: string | null;
      avatarUrl?: string | null;
    } = {};

    if (name !== undefined) {
      if (typeof name !== "string" || !name.trim()) {
        return error(res, 400, "Name must be a non-empty string");
      }
      updateData.name = name.trim();
    }

    if (bio !== undefined) {
      updateData.bio = bio || null;
    }

    if (avatarUrl !== undefined) {
      updateData.avatarUrl = avatarUrl || null;
    }

    const teacher = await updateTeacher(id, updateData);

    return success(res, teacher, "Teacher updated successfully");
  } catch (err) {
    return next(err);
  }
};

export const deleteTeacherHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return error(res, 400, "Invalid teacher ID");
  }

  try {
    await deleteTeacher(id);
    return success(res, null, "Teacher deleted successfully");
  } catch (err) {
    return next(err);
  }
};

