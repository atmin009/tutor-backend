import prisma from "../../prisma.js";

const sectionInclude = {
  course: {
    select: {
      id: true,
      title: true,
      slug: true,
    },
  },
  lessons: {
    orderBy: { sortOrder: "asc" },
  },
};

export const listSectionsByCourse = (courseId: number) =>
  prisma.section.findMany({
    where: { courseId },
    orderBy: { sortOrder: "asc" },
    include: {
      lessons: {
        orderBy: { sortOrder: "asc" },
      },
    },
  });

export const getSectionById = (id: number) =>
  prisma.section.findUnique({
    where: { id },
    include: sectionInclude,
  });

type CreateSectionInput = {
  courseId: number;
  title: string;
  sortOrder?: number;
  videoUrl?: string | null;
  attachmentUrl?: string | null;
};

export const createSection = (data: CreateSectionInput) =>
  prisma.section.create({
    data: {
      courseId: data.courseId,
      title: data.title,
      sortOrder: data.sortOrder ?? 0,
      videoUrl: data.videoUrl,
      attachmentUrl: data.attachmentUrl,
    },
    include: sectionInclude,
  });

type UpdateSectionInput = {
  title?: string;
  sortOrder?: number;
  videoUrl?: string | null;
  attachmentUrl?: string | null;
};

export const updateSection = (id: number, data: UpdateSectionInput) =>
  prisma.section.update({
    where: { id },
    data,
    include: sectionInclude,
  });

export const deleteSection = (id: number) =>
  prisma.section.delete({
    where: { id },
  });

