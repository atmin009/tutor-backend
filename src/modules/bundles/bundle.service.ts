import prisma from "../../prisma.js";

export const listBundlePromotions = async () => {
  return prisma.bundlePromotion.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const getBundlePromotionById = async (id: number) => {
  return prisma.bundlePromotion.findUnique({ where: { id } });
};

export const createBundlePromotion = async (data: {
  name: string;
  description?: string;
  price: number;
  status?: string;
  courseIds: number[];
  maxCourses?: number | null;
  startsAt?: Date | null;
  endsAt?: Date | null;
}) => {
  return prisma.bundlePromotion.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      status: data.status ?? "active",
      courseIds: JSON.stringify(data.courseIds),
      maxCourses: data.maxCourses ?? data.courseIds.length,
      startsAt: data.startsAt ?? null,
      endsAt: data.endsAt ?? null,
    },
  });
};

export const updateBundlePromotion = async (
  id: number,
  data: {
    name?: string;
    description?: string | null;
    price?: number;
    status?: string;
    courseIds?: number[];
    maxCourses?: number | null;
    startsAt?: Date | null;
    endsAt?: Date | null;
  }
) => {
  return prisma.bundlePromotion.update({
    where: { id },
    data: {
      ...(data.name !== undefined ? { name: data.name } : {}),
      ...(data.description !== undefined ? { description: data.description } : {}),
      ...(data.price !== undefined ? { price: data.price } : {}),
      ...(data.status !== undefined ? { status: data.status } : {}),
      ...(data.courseIds !== undefined
        ? { courseIds: JSON.stringify(data.courseIds) }
        : {}),
      ...(data.maxCourses !== undefined ? { maxCourses: data.maxCourses } : {}),
      ...(data.startsAt !== undefined ? { startsAt: data.startsAt } : {}),
      ...(data.endsAt !== undefined ? { endsAt: data.endsAt } : {}),
    },
  });
};

export const deleteBundlePromotion = async (id: number) => {
  return prisma.bundlePromotion.delete({ where: { id } });
};

