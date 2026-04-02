import prisma from "../../prisma.js";
export const listBundlePromotions = async () => {
    return prisma.bundlePromotion.findMany({
        orderBy: { createdAt: "desc" },
    });
};
export const getBundlePromotionById = async (id) => {
    return prisma.bundlePromotion.findUnique({ where: { id } });
};
export const createBundlePromotion = async (data) => {
    return prisma.bundlePromotion.create({
        data: {
            name: data.name,
            description: data.description ?? null,
            price: data.price,
            status: data.status ?? "active",
            courseIds: JSON.stringify(data.courseIds),
            maxCourses: data.maxCourses ?? data.courseIds.length,
            startsAt: data.startsAt ?? null,
            endsAt: data.endsAt ?? null,
        },
    });
};
export const updateBundlePromotion = async (id, data) => {
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
export const deleteBundlePromotion = async (id) => {
    return prisma.bundlePromotion.delete({ where: { id } });
};
//# sourceMappingURL=bundle.service.js.map