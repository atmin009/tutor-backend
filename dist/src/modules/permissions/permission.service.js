import prisma from "../../prisma.js";
export const listPermissions = () => prisma.permission.findMany({
    orderBy: { name: "asc" },
});
export const getPermissionById = (id) => prisma.permission.findUnique({
    where: { id },
});
export const createPermission = (data) => prisma.permission.create({
    data,
});
export const updatePermission = (id, data) => prisma.permission.update({
    where: { id },
    data,
});
export const deletePermission = (id) => prisma.permission.delete({
    where: { id },
});
//# sourceMappingURL=permission.service.js.map