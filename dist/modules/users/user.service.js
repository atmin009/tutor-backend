import prisma from "../../prisma.js";
import { hashPassword } from "../../utils/password.js";
const userInclude = {
    roles: {
        include: {
            role: true,
        },
    },
};
const httpError = (statusCode, message) => {
    const err = new Error(message);
    err.statusCode = statusCode;
    return err;
};
const toUserDto = (user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    status: user.status,
    createdAt: user.createdAt,
    roles: user.roles.map((relation) => relation.role.name),
});
const ensureEmailUnique = async (tx, email, excludeUserId) => {
    const existing = await tx.user.findUnique({
        where: { email },
    });
    if (existing && existing.id !== excludeUserId) {
        throw httpError(409, "Email already in use");
    }
};
const normalizeRoleNames = (roleNames) => {
    return Array.from(new Set(roleNames
        .map((name) => name.trim())
        .filter((name) => name.length > 0)));
};
const syncUserRoles = async (tx, userId, roleNames) => {
    const names = normalizeRoleNames(roleNames);
    await tx.userRole.deleteMany({ where: { userId } });
    if (!names.length) {
        return;
    }
    const roles = await tx.role.findMany({
        where: {
            name: { in: names },
        },
    });
    const missing = names.filter((name) => !roles.some((role) => role.name === name));
    if (missing.length) {
        throw httpError(400, `Unknown roles: ${missing.join(", ")}`);
    }
    const entries = roles.map((role) => ({
        userId,
        roleId: role.id,
    }));
    await tx.userRole.createMany({
        data: entries,
        skipDuplicates: true,
    });
};
export const listUsers = async ({ page, limit, search, status, }) => {
    const where = {};
    if (search) {
        where.OR = [
            { name: { contains: search } },
            { email: { contains: search } },
        ];
    }
    if (status) {
        where.status = status;
    }
    const skip = (page - 1) * limit;
    const [users, totalItems] = await prisma.$transaction([
        prisma.user.findMany({
            where,
            orderBy: { createdAt: "desc" },
            skip,
            take: limit,
            include: userInclude,
        }),
        prisma.user.count({ where }),
    ]);
    return {
        data: users.map(toUserDto),
        meta: {
            page,
            limit,
            totalItems,
            totalPages: totalItems === 0 ? 0 : Math.ceil(totalItems / limit),
        },
    };
};
export const getUserById = async (id) => {
    const user = await prisma.user.findUnique({
        where: { id },
        include: userInclude,
    });
    return user ? toUserDto(user) : null;
};
export const createUser = async ({ name, email, password, status = "active", roleNames, }) => {
    const result = await prisma.$transaction(async (tx) => {
        await ensureEmailUnique(tx, email);
        const hashedPassword = await hashPassword(password);
        const user = await tx.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                status,
            },
        });
        if (roleNames !== undefined) {
            await syncUserRoles(tx, user.id, roleNames);
        }
        return tx.user.findUnique({
            where: { id: user.id },
            include: userInclude,
        });
    });
    if (!result) {
        throw httpError(500, "Failed to create user");
    }
    return toUserDto(result);
};
export const updateUser = async (id, data) => {
    const result = await prisma.$transaction(async (tx) => {
        const existing = await tx.user.findUnique({
            where: { id },
        });
        if (!existing) {
            throw httpError(404, "User not found");
        }
        if (data.email && data.email !== existing.email) {
            await ensureEmailUnique(tx, data.email, id);
        }
        const updateData = {};
        if (data.name !== undefined) {
            updateData.name = data.name;
        }
        if (data.email !== undefined) {
            updateData.email = data.email;
        }
        if (data.status !== undefined) {
            updateData.status = data.status;
        }
        if (data.password) {
            updateData.password = await hashPassword(data.password);
        }
        if (Object.keys(updateData).length) {
            await tx.user.update({
                where: { id },
                data: updateData,
            });
        }
        if (data.roleNames !== undefined) {
            await syncUserRoles(tx, id, data.roleNames);
        }
        return tx.user.findUnique({
            where: { id },
            include: userInclude,
        });
    });
    if (!result) {
        throw httpError(404, "User not found");
    }
    return toUserDto(result);
};
export const deleteUser = async (id) => {
    const user = await prisma.user.update({
        where: { id },
        data: { status: "suspended" },
        include: userInclude,
    });
    return toUserDto(user);
};
//# sourceMappingURL=user.service.js.map