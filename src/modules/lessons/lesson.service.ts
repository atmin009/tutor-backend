import { Prisma } from "../../../generated/prisma/client.js";
import prisma from "../../prisma.js";

const lessonInclude = {
  course: {
    select: {
      id: true,
      title: true,
      slug: true,
    },
  },
  section: {
    select: {
      id: true,
      title: true,
    },
  },
};

export const listLessonsBySection = (sectionId: number) =>
  prisma.lesson.findMany({
    where: {
      sectionId,
    },
    orderBy: { sortOrder: Prisma.SortOrder.asc },
    include: lessonInclude,
  });

export const listLessonsByCourseAndSection = (
  courseId: number,
  sectionId: number
) =>
  prisma.lesson.findMany({
    where: {
      courseId,
      sectionId,
    },
    orderBy: { sortOrder: Prisma.SortOrder.asc },
    include: lessonInclude,
  });

export const listLessonsByCourse = (courseId: number) =>
  prisma.lesson.findMany({
    where: { courseId },
    orderBy: { sortOrder: Prisma.SortOrder.asc },
    include: lessonInclude,
  });

export const getLessonById = (id: number) =>
  prisma.lesson.findUnique({
    where: { id },
    include: lessonInclude,
  });

type CreateLessonInput = {
  courseId: number;
  sectionId?: number | null;
  title: string;
  contentType: string;
  contentUrl?: string | null;
  contentText?: string | null;
  duration?: number | null;
  sortOrder?: number;
};

export const createLesson = (data: CreateLessonInput) =>
  prisma.lesson.create({
    data: {
      courseId: data.courseId,
      sectionId: data.sectionId ?? null,
      title: data.title,
      contentType: data.contentType,
      contentUrl: data.contentUrl ?? null,
      contentText: data.contentText ?? null,
      duration: data.duration ?? null,
      sortOrder: data.sortOrder ?? 0,
    },
    include: lessonInclude,
  });

type UpdateLessonInput = {
  title?: string;
  contentType?: string;
  contentUrl?: string | null;
  contentText?: string | null;
  duration?: number | null;
  sortOrder?: number;
  sectionId?: number | null;
};

export const updateLesson = (id: number, data: UpdateLessonInput) =>
  prisma.lesson.update({
    where: { id },
    data,
    include: lessonInclude,
  });

export const deleteLesson = (id: number) =>
  prisma.lesson.delete({
    where: { id },
  });

