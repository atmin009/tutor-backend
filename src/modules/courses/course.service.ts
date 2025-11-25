import { Prisma } from "../../../generated/prisma/client.js";
import prisma from "../../prisma.js";

const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
};

const ensureUniqueSlug = async (baseSlug: string, excludeId?: number): Promise<string> => {
  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const existing = await prisma.course.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!existing || existing.id === excludeId) {
      return slug;
    }

    slug = `${baseSlug}-${counter}`;
    counter++;
  }
};

type ListCoursesParams = {
  page: number;
  limit: number;
  search?: string | undefined;
  status?: string | undefined;
};

export const listCourses = async ({
  page,
  limit,
  search,
  status,
}: ListCoursesParams) => {
  const where: Prisma.CourseWhereInput = {};

  if (search) {
    where.title = {
      contains: search,
    };
  }

  if (status) {
    where.status = status;
  }

  const skip = (page - 1) * limit;

  const [courses, totalItems] = await prisma.$transaction([
    prisma.course.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
      include: {
        teacher: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          },
        },
        _count: {
          select: {
            enrollments: true,
            sections: true,
            lessons: true,
          },
        },
      },
    }),
    prisma.course.count({ where }),
  ]);

  return {
    data: courses,
    meta: {
      page,
      limit,
      totalItems,
      totalPages: totalItems === 0 ? 0 : Math.ceil(totalItems / limit),
    },
  };
};

export const listPublicCourses = async ({
  page = 1,
  limit = 20,
  search,
}: {
  page?: number;
  limit?: number;
  search?: string;
}) => {
  const where: Prisma.CourseWhereInput = {
    status: "published", // Only return published courses
  };

  if (search) {
    where.OR = [
      { title: { contains: search } },
      { summary: { contains: search } },
    ];
  }

  const skip = (page - 1) * limit;

  const [courses, totalItems] = await prisma.$transaction([
    prisma.course.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
      select: {
        id: true,
        title: true,
        slug: true,
        summary: true,
        price: true,
        coverImage: true,
        teacher: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    }),
    prisma.course.count({ where }),
  ]);

  return {
    data: courses,
    meta: {
      page,
      limit,
      totalItems,
      totalPages: totalItems === 0 ? 0 : Math.ceil(totalItems / limit),
    },
  };
};

const courseInclude = {
  teacher: {
    select: {
      id: true,
      name: true,
      avatarUrl: true,
    },
  },
  sections: {
    orderBy: { sortOrder: Prisma.SortOrder.asc },
    include: {
      lessons: {
        orderBy: { sortOrder: Prisma.SortOrder.asc },
      },
    },
  },
  lessons: {
    orderBy: { sortOrder: Prisma.SortOrder.asc },
  },
  _count: {
    select: {
      enrollments: true,
      sections: true,
      lessons: true,
    },
  },
};

export const getCourseById = (id: number) =>
  prisma.course.findUnique({
    where: { id },
    include: courseInclude,
  });

export const getCourseBySlug = async (slug: string) => {
  const course = await prisma.course.findUnique({
    where: { slug },
    include: {
      teacher: {
        select: {
          id: true,
          name: true,
          avatarUrl: true,
        },
      },
      sections: {
        orderBy: { sortOrder: Prisma.SortOrder.asc },
        include: {
          lessons: {
            orderBy: { sortOrder: Prisma.SortOrder.asc },
          },
        },
      },
    },
  });

  // Only return if course is published
  if (course && course.status !== "published") {
    return null;
  }

  return course;
};

export const getPublicCourseById = async (id: number) => {
  const course = await prisma.course.findUnique({
    where: { id },
    include: {
      teacher: {
        select: {
          id: true,
          name: true,
          avatarUrl: true,
        },
      },
      sections: {
        orderBy: { sortOrder: Prisma.SortOrder.asc },
        include: {
          lessons: {
            orderBy: { sortOrder: Prisma.SortOrder.asc },
          },
        },
      },
    },
  });

  // Only return if course is published
  if (course && course.status !== "published") {
    return null;
  }

  return course;
};

type CreateCourseInput = {
  title: string;
  slug?: string;
  description?: string | null;
  summary?: string | null;
  price?: number;
  salePrice?: number | null;
  status?: string;
  coverImage?: string | null;
  previewVideoUrl?: string | null;
  teacherId?: number | null;
};

export const createCourse = async (data: CreateCourseInput) => {
  let slug = data.slug;
  if (!slug) {
    const baseSlug = generateSlug(data.title);
    slug = await ensureUniqueSlug(baseSlug);
  } else {
    slug = await ensureUniqueSlug(slug);
  }

  return prisma.course.create({
    data: {
      title: data.title,
      slug,
      description: data.description ?? null,
      summary: data.summary ?? null,
      price: data.price ?? 0,
      salePrice: data.salePrice ?? null,
      status: data.status ?? "draft",
      coverImage: data.coverImage ?? null,
      previewVideoUrl: data.previewVideoUrl ?? null,
      ...(data.teacherId !== undefined && { teacherId: data.teacherId }),
    },
    include: courseInclude,
  });
};

type UpdateCourseInput = {
  title?: string;
  slug?: string;
  description?: string | null;
  summary?: string | null;
  price?: number;
  salePrice?: number | null;
  status?: string;
  coverImage?: string | null;
  previewVideoUrl?: string | null;
  teacherId?: number | null;
};

export const updateCourse = async (id: number, data: UpdateCourseInput) => {
  const updateData: Prisma.CourseUncheckedUpdateInput = { ...data };

  // If title changes but slug doesn't, auto-generate slug from new title
  if (data.title && !data.slug) {
    const existing = await prisma.course.findUnique({
      where: { id },
      select: { title: true },
    });

    if (existing && existing.title !== data.title) {
      const baseSlug = generateSlug(data.title);
      updateData.slug = await ensureUniqueSlug(baseSlug, id);
    }
  } else if (data.slug) {
    // If slug is provided, ensure it's unique
    updateData.slug = await ensureUniqueSlug(data.slug, id);
  }

  return prisma.course.update({
    where: { id },
    data: updateData,
    include: courseInclude,
  });
};

export const deleteCourse = (id: number) =>
  prisma.course.update({
    where: { id },
    data: { status: "archived" },
    include: courseInclude,
  });

