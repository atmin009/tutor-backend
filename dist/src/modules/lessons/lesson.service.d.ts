import { Prisma } from "../../../generated/prisma/client.js";
export declare const listLessonsBySection: (sectionId: number) => Prisma.PrismaPromise<({
    course: {
        id: number;
        title: string;
        slug: string;
    };
    section: {
        id: number;
        title: string;
    } | null;
} & {
    id: number;
    title: string;
    courseId: number;
    sortOrder: number;
    sectionId: number | null;
    contentType: string;
    contentUrl: string | null;
    contentText: string | null;
    duration: number | null;
})[]>;
export declare const listLessonsByCourseAndSection: (courseId: number, sectionId: number) => Prisma.PrismaPromise<({
    course: {
        id: number;
        title: string;
        slug: string;
    };
    section: {
        id: number;
        title: string;
    } | null;
} & {
    id: number;
    title: string;
    courseId: number;
    sortOrder: number;
    sectionId: number | null;
    contentType: string;
    contentUrl: string | null;
    contentText: string | null;
    duration: number | null;
})[]>;
export declare const listLessonsByCourse: (courseId: number) => Prisma.PrismaPromise<({
    course: {
        id: number;
        title: string;
        slug: string;
    };
    section: {
        id: number;
        title: string;
    } | null;
} & {
    id: number;
    title: string;
    courseId: number;
    sortOrder: number;
    sectionId: number | null;
    contentType: string;
    contentUrl: string | null;
    contentText: string | null;
    duration: number | null;
})[]>;
export declare const getLessonById: (id: number) => Prisma.Prisma__LessonClient<({
    course: {
        id: number;
        title: string;
        slug: string;
    };
    section: {
        id: number;
        title: string;
    } | null;
} & {
    id: number;
    title: string;
    courseId: number;
    sortOrder: number;
    sectionId: number | null;
    contentType: string;
    contentUrl: string | null;
    contentText: string | null;
    duration: number | null;
}) | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
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
export declare const createLesson: (data: CreateLessonInput) => Prisma.Prisma__LessonClient<{
    course: {
        id: number;
        title: string;
        slug: string;
    };
    section: {
        id: number;
        title: string;
    } | null;
} & {
    id: number;
    title: string;
    courseId: number;
    sortOrder: number;
    sectionId: number | null;
    contentType: string;
    contentUrl: string | null;
    contentText: string | null;
    duration: number | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
type UpdateLessonInput = {
    title?: string;
    contentType?: string;
    contentUrl?: string | null;
    contentText?: string | null;
    duration?: number | null;
    sortOrder?: number;
    sectionId?: number | null;
};
export declare const updateLesson: (id: number, data: UpdateLessonInput) => Prisma.Prisma__LessonClient<{
    course: {
        id: number;
        title: string;
        slug: string;
    };
    section: {
        id: number;
        title: string;
    } | null;
} & {
    id: number;
    title: string;
    courseId: number;
    sortOrder: number;
    sectionId: number | null;
    contentType: string;
    contentUrl: string | null;
    contentText: string | null;
    duration: number | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export declare const deleteLesson: (id: number) => Prisma.Prisma__LessonClient<{
    id: number;
    title: string;
    courseId: number;
    sortOrder: number;
    sectionId: number | null;
    contentType: string;
    contentUrl: string | null;
    contentText: string | null;
    duration: number | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export {};
//# sourceMappingURL=lesson.service.d.ts.map