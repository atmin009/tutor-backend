import prisma from "../../prisma.js";
export const listTeachers = (search) => {
    const where = {};
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
export const getTeacherById = (id) => prisma.teacher.findUnique({
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
export const createTeacher = (data) => prisma.teacher.create({
    data,
});
export const updateTeacher = (id, data) => prisma.teacher.update({
    where: { id },
    data,
});
export const deleteTeacher = (id) => prisma.teacher.delete({
    where: { id },
});
//# sourceMappingURL=teacher.service.js.map