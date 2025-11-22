import type { Request, Response } from "express";
import {
  createRole,
  deleteRole,
  getRoleById,
  listRoles,
  updateRole,
} from "./role.service.js";

export const listRolesHandler = async (_req: Request, res: Response) => {
  const roles = await listRoles();
  res.json(roles);
};

export const createRoleHandler = async (req: Request, res: Response) => {
  const { name, description, permissionIds } = req.body ?? {};

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const role = await createRole({
    name,
    description,
    permissionIds,
  });

  res.status(201).json(role);
};

export const getRoleHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Invalid role id" });
  }

  const role = await getRoleById(id);

  if (!role) {
    return res.status(404).json({ message: "Role not found" });
  }

  res.json(role);
};

export const updateRoleHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Invalid role id" });
  }

  try {
    const updated = await updateRole(id, req.body ?? {});
    res.json(updated);
  } catch (error) {
    return res.status(404).json({ message: "Role not found" });
  }
};

export const deleteRoleHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Invalid role id" });
  }

  try {
    await deleteRole(id);
    res.status(204).send();
  } catch (error) {
    return res.status(404).json({ message: "Role not found" });
  }
};

