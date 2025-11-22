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
        orderBy: { sortOrder: Prisma.SortOrder.asc },
    },
};
export const listSectionsByCourse = (courseId) => prisma.section.findMany({
    where: { courseId },
    orderBy: { sortOrder: Prisma.SortOrder.asc },
    include: {
        lessons: {
            orderBy: { sortOrder: Prisma.SortOrder.asc },
        },
    },
});
export const getSectionById = (id) => prisma.section.findUnique({
    where: { id },
    include: sectionInclude,
});
export const createSection = (data) => prisma.section.create({
    data: {
        courseId: data.courseId,
        title: data.title,
        sortOrder: data.sortOrder ?? 0,
        videoUrl: data.videoUrl ?? null,
        attachmentUrl: data.attachmentUrl ?? null,
    },
    include: sectionInclude,
});
export const updateSection = (id, data) => prisma.section.update({
    where: { id },
    data,
    include: sectionInclude,
});
export const deleteSection = (id) => prisma.section.delete({
    where: { id },
});
//# sourceMappingURL=section.service.js.map