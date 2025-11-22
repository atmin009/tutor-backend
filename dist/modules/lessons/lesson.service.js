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
export const listLessonsBySection = (sectionId) => prisma.lesson.findMany({
    where: {
        sectionId,
    },
    orderBy: { sortOrder: Prisma.SortOrder.asc },
    include: lessonInclude,
});
export const listLessonsByCourseAndSection = (courseId, sectionId) => prisma.lesson.findMany({
    where: {
        courseId,
        sectionId,
    },
    orderBy: { sortOrder: Prisma.SortOrder.asc },
    include: lessonInclude,
});
export const listLessonsByCourse = (courseId) => prisma.lesson.findMany({
    where: { courseId },
    orderBy: { sortOrder: Prisma.SortOrder.asc },
    include: lessonInclude,
});
export const getLessonById = (id) => prisma.lesson.findUnique({
    where: { id },
    include: lessonInclude,
});
export const createLesson = (data) => prisma.lesson.create({
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
export const updateLesson = (id, data) => prisma.lesson.update({
    where: { id },
    data,
    include: lessonInclude,
});
export const deleteLesson = (id) => prisma.lesson.delete({
    where: { id },
});
//# sourceMappingURL=lesson.service.js.map