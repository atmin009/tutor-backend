import type { NextFunction, Request, Response } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  listUsers,
  updateUser,
} from "./user.service.js";
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

const parseRoleNames = (value: unknown): string[] | undefined | null => {
  if (value === undefined) {
    return undefined;
  }

  if (!Array.isArray(value)) {
    return null;
  }

  const invalid = value.some((role) => typeof role !== "string");
  if (invalid) {
    return null;
  }

  return value as string[];
};

export const listUsersHandler = async (
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

    const result = await listUsers({ page, limit, search, status });
    return success(res, result, "Users retrieved successfully");
  } catch (err) {
    return next(err);
  }
};

export const createUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password, status } = req.body ?? {};
  const roleNames = parseRoleNames(req.body?.roleNames);

  if (!name || !email || !password) {
    return error(res, 400, "Name, email and password are required");
  }

  if (status !== undefined && typeof status !== "string") {
    return error(res, 400, "Status must be a string");
  }

  if (roleNames === null) {
    return error(res, 400, "roleNames must be an array of strings");
  }

  try {
    const user = await createUser({
      name,
      email,
      password,
      status,
      ...(roleNames !== undefined && { roleNames }),
    });

    return success(res.status(201), user, "User created successfully");
  } catch (err) {
    return next(err);
  }
};

export const getUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return error(res, 400, "Invalid user id");
  }

  try {
    const user = await getUserById(id);

    if (!user) {
      return error(res, 404, "User not found");
    }

    return success(res, user, "User retrieved successfully");
  } catch (err) {
    return next(err);
  }
};

export const updateUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return error(res, 400, "Invalid user id");
  }

  try {
    const { name, email, password, status } = req.body ?? {};
    const roleNames = parseRoleNames(req.body?.roleNames);

    if (roleNames === null) {
      return error(res, 400, "roleNames must be an array of strings");
    }

    if (
      status !== undefined &&
      typeof status !== "string"
    ) {
      return error(res, 400, "Status must be a string");
    }

    const updated = await updateUser(id, {
      name,
      email,
      password,
      status,
      ...(roleNames !== undefined && { roleNames }),
    });
    return success(res, updated, "User updated successfully");
  } catch (err) {
    return next(err);
  }
};

export const deleteUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return error(res, 400, "Invalid user id");
  }

  try {
    const deleted = await deleteUser(id);
    return success(res, deleted, "User suspended successfully");
  } catch (err) {
    return next(err);
  }
};

