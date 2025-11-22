import prisma from "../../prisma.js";

type PermissionInput = {
  name: string;
  description?: string | null;
};

export const listPermissions = () =>
  prisma.permission.findMany({
    orderBy: { name: "asc" },
  });

export const getPermissionById = (id: number) =>
  prisma.permission.findUnique({
    where: { id },
  });

export const createPermission = (data: PermissionInput) =>
  prisma.permission.create({
    data,
  });

type UpdatePermissionInput = {
  name?: string;
  description?: string | null;
};

export const updatePermission = (id: number, data: UpdatePermissionInput) =>
  prisma.permission.update({
    where: { id },
    data,
  });

export const deletePermission = (id: number) =>
  prisma.permission.delete({
    where: { id },
  });

