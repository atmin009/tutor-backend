import type { Request, Response } from "express";
import {
  createPermission,
  deletePermission,
  getPermissionById,
  listPermissions,
  updatePermission,
} from "./permission.service.js";

export const listPermissionsHandler = async (_req: Request, res: Response) => {
  const permissions = await listPermissions();
  res.json(permissions);
};

export const createPermissionHandler = async (req: Request, res: Response) => {
  const { name, description } = req.body ?? {};

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const permission = await createPermission({ name, description });
  res.status(201).json(permission);
};

export const getPermissionHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Invalid permission id" });
  }

  const permission = await getPermissionById(id);

  if (!permission) {
    return res.status(404).json({ message: "Permission not found" });
  }

  res.json(permission);
};

export const updatePermissionHandler = async (
  req: Request,
  res: Response,
) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Invalid permission id" });
  }

  try {
    const updated = await updatePermission(id, req.body ?? {});
    res.json(updated);
  } catch (error) {
    return res.status(404).json({ message: "Permission not found" });
  }
};

export const deletePermissionHandler = async (
  req: Request,
  res: Response,
) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Invalid permission id" });
  }

  try {
    await deletePermission(id);
    res.status(204).send();
  } catch (error) {
    return res.status(404).json({ message: "Permission not found" });
  }
};

