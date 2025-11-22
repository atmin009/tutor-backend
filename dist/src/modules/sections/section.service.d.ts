import { Prisma } from "../../../generated/prisma/client.js";
export declare const listSectionsByCourse: (courseId: number) => Prisma.PrismaPromise<({
    lessons: {
        id: number;
        title: string;
        courseId: number;
        sortOrder: number;
        sectionId: number | null;
        contentType: string;
        contentUrl: string | null;
        contentText: string | null;
        duration: number | null;
    }[];
} & {
    id: number;
    title: string;
    courseId: number;
    sortOrder: number;
    videoUrl: string | null;
    attachmentUrl: string | null;
})[]>;
export declare const getSectionById: (id: number) => Prisma.Prisma__SectionClient<({
    course: {
        id: number;
        title: string;
        slug: string;
    };
    lessons: {
        id: number;
        title: string;
        courseId: number;
        sortOrder: number;
        sectionId: number | null;
        contentType: string;
        contentUrl: string | null;
        contentText: string | null;
        duration: number | null;
    }[];
} & {
    id: number;
    title: string;
    courseId: number;
    sortOrder: number;
    videoUrl: string | null;
    attachmentUrl: string | null;
}) | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
type CreateSectionInput = {
    courseId: number;
    title: string;
    sortOrder?: number;
    videoUrl?: string | null;
    attachmentUrl?: string | null;
};
export declare const createSection: (data: CreateSectionInput) => Prisma.Prisma__SectionClient<{
    course: {
        id: number;
        title: string;
        slug: string;
    };
    lessons: {
        id: number;
        title: string;
        courseId: number;
        sortOrder: number;
        sectionId: number | null;
        contentType: string;
        contentUrl: string | null;
        contentText: string | null;
        duration: number | null;
    }[];
} & {
    id: number;
    title: string;
    courseId: number;
    sortOrder: number;
    videoUrl: string | null;
    attachmentUrl: string | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
type UpdateSectionInput = {
    title?: string;
    sortOrder?: number;
    videoUrl?: string | null;
    attachmentUrl?: string | null;
};
export declare const updateSection: (id: number, data: UpdateSectionInput) => Prisma.Prisma__SectionClient<{
    course: {
        id: number;
        title: string;
        slug: string;
    };
    lessons: {
        id: number;
        title: string;
        courseId: number;
        sortOrder: number;
        sectionId: number | null;
        contentType: string;
        contentUrl: string | null;
        contentText: string | null;
        duration: number | null;
    }[];
} & {
    id: number;
    title: string;
    courseId: number;
    sortOrder: number;
    videoUrl: string | null;
    attachmentUrl: string | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export declare const deleteSection: (id: number) => Prisma.Prisma__SectionClient<{
    id: number;
    title: string;
    courseId: number;
    sortOrder: number;
    videoUrl: string | null;
    attachmentUrl: string | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export {};
//# sourceMappingURL=section.service.d.ts.map