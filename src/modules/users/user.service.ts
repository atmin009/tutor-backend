import type { Prisma } from "../../../generated/prisma/client.js";
import prisma from "../../prisma.js";
import { hashPassword } from "../../utils/password.js";

const userInclude = {
  roles: {
    include: {
      role: true,
    },
  },
};

type UserWithRoles = Prisma.UserGetPayload<{
  include: typeof userInclude;
}>;

export type UserDto = {
  id: number;
  name: string;
  email: string;
  status: string;
  createdAt: Date;
  roles: string[];
};

type ListUsersParams = {
  page: number;
  limit: number;
  search?: string | undefined;
  status?: string | undefined;
};

type CreateUserInput = {
  name: string;
  email: string;
  password: string;
  status?: string;
  roleNames?: string[] | undefined;
};

type UpdateUserInput = {
  name?: string;
  email?: string;
  password?: string;
  status?: string;
  roleNames?: string[] | undefined;
};

const httpError = (statusCode: number, message: string) => {
  const err = new Error(message) as Error & { statusCode: number };
  err.statusCode = statusCode;
  return err;
};

const toUserDto = (user: UserWithRoles): UserDto => ({
  id: user.id,
  name: user.name,
  email: user.email,
  status: user.status,
  createdAt: user.createdAt,
  roles: user.roles.map((relation) => relation.role.name),
});

const ensureEmailUnique = async (
  tx: Prisma.TransactionClient,
  email: string,
  excludeUserId?: number
) => {
  const existing = await tx.user.findUnique({
    where: { email },
  });

  if (existing && existing.id !== excludeUserId) {
    throw httpError(409, "Email already in use");
  }
};

const normalizeRoleNames = (roleNames: string[]) => {
  return Array.from(
    new Set(
      roleNames
        .map((name) => name.trim())
        .filter((name) => name.length > 0)
    )
  );
};

const syncUserRoles = async (
  tx: Prisma.TransactionClient,
  userId: number,
  roleNames: string[]
) => {
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

  const missing = names.filter(
    (name) => !roles.some((role) => role.name === name)
  );

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

export const listUsers = async ({
  page,
  limit,
  search,
  status,
}: ListUsersParams) => {
  const where: Prisma.UserWhereInput = {};

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

export const getUserById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: { id },
    include: userInclude,
  });

  return user ? toUserDto(user) : null;
};

export const createUser = async ({
  name,
  email,
  password,
  status = "active",
  roleNames,
}: CreateUserInput): Promise<UserDto> => {
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

export const updateUser = async (
  id: number,
  data: UpdateUserInput
): Promise<UserDto> => {
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

    const updateData: Prisma.UserUncheckedUpdateInput = {};

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

export const deleteUser = async (id: number): Promise<UserDto> => {
  const user = await prisma.user.update({
    where: { id },
    data: { status: "suspended" },
    include: userInclude,
  });

  return toUserDto(user);
};
