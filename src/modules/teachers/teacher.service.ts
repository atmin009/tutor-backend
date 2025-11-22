import type { Prisma } from "../../../generated/prisma/client.js";
import prisma from "../../prisma.js";

export const listTeachers = (search?: string) => {
  const where: Prisma.TeacherWhereInput = {};

  if (search) {
    where.name = {
      contains: search,
    };
  }

  return prisma.teacher.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: {
      courses: {
        select: {
          id: true,
          title: true,
          status: true,
        },
      },
    },
  });
};

export const getTeacherById = (id: number) =>
  prisma.teacher.findUnique({
    where: { id },
    include: {
      courses: {
        select: {
          id: true,
          title: true,
          status: true,
        },
      },
    },
  });

type CreateTeacherInput = {
  name: string;
  bio?: string | null;
  avatarUrl?: string | null;
};

export const createTeacher = (data: CreateTeacherInput) =>
  prisma.teacher.create({
    data,
  });

type UpdateTeacherInput = {
  name?: string;
  bio?: string | null;
  avatarUrl?: string | null;
};

export const updateTeacher = (id: number, data: UpdateTeacherInput) =>
  prisma.teacher.update({
    where: { id },
    data,
  });

export const deleteTeacher = (id: number) =>
  prisma.teacher.delete({
    where: { id },
  });

