import prisma from "../../prisma.js";
const roleInclude = {
    permissions: {
        include: {
            permission: true,
        },
    },
};
export const listRoles = () => prisma.role.findMany({
    orderBy: { name: "asc" },
    include: roleInclude,
});
export const getRoleById = (id) => prisma.role.findUnique({
    where: { id },
    include: roleInclude,
});
export const createRole = async ({ name, description, permissionIds, }) => {
    return prisma.$transaction(async (tx) => {
        const role = await tx.role.create({
            data: { name, description: description ?? null },
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
export const updateRole = async (id, data) => {
    return prisma.$transaction(async (tx) => {
        await tx.role.update({
            where: { id },
            data: {
                ...(data.name !== undefined && { name: data.name }),
                description: data.description ?? null,
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
export const deleteRole = (id) => prisma.role.delete({
    where: { id },
});
//# sourceMappingURL=role.service.js.map