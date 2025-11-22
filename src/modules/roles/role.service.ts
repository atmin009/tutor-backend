import type { Prisma } from "../../../generated/prisma/client.js";
import prisma from "../../prisma.js";

const roleInclude = {
  permissions: {
    include: {
      permission: true,
    },
  },
};

type RoleInput = {
  name: string;
  description?: string | null;
  permissionIds?: number[];
};

export const listRoles = () =>
  prisma.role.findMany({
    orderBy: { name: "asc" },
    include: roleInclude,
  });

export const getRoleById = (id: number) =>
  prisma.role.findUnique({
    where: { id },
    include: roleInclude,
  });

export const createRole = async ({
  name,
  description,
  permissionIds,
}: RoleInput) => {
  return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    const role = await tx.role.create({
      data: { name, description },
    });

    if (permissionIds?.length) {
      const data = permissionIds.map((permissionId) => ({
        roleId: role.id,
        permissionId,
      }));
      await tx.rolePermission.createMany({ data, skipDuplicates: true });
    }

    return tx.role.findUnique({
      where: { id: role.id },
      include: roleInclude,
    });
  });
};

type UpdateRoleInput = {
  name?: string;
  description?: string | null;
  permissionIds?: number[];
};

export const updateRole = async (id: number, data: UpdateRoleInput) => {
  return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    await tx.role.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
      },
    });

    if (data.permissionIds) {
      await tx.rolePermission.deleteMany({ where: { roleId: id } });

      if (data.permissionIds.length) {
        const entries = data.permissionIds.map((permissionId) => ({
          roleId: id,
          permissionId,
        }));
        await tx.rolePermission.createMany({
          data: entries,
          skipDuplicates: true,
        });
      }
    }

    return tx.role.findUnique({
      where: { id },
      include: roleInclude,
    });
  });
};

export const deleteRole = (id: number) =>
  prisma.role.delete({
    where: { id },
  });

