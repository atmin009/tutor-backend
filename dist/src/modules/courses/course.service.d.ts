import { Prisma } from "../../../generated/prisma/client.js";
type ListCoursesParams = {
    page: number;
    limit: number;
    search?: string | undefined;
    status?: string | undefined;
};
export declare const listCourses: ({ page, limit, search, status, }: ListCoursesParams) => Promise<{
    data: ({
        teacher: {
            id: number;
            name: string;
            avatarUrl: string | null;
        } | null;
        _count: {
            enrollments: number;
            sections: number;
            lessons: number;
        };
    } & {
        id: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        title: string;
        slug: string;
        summary: string | null;
        price: number;
        salePrice: number | null;
        coverImage: string | null;
        previewVideoUrl: string | null;
        teacherId: number | null;
    })[];
    meta: {
        page: number;
        limit: number;
        totalItems: number;
        totalPages: number;
    };
}>;
export declare const listPublicCourses: ({ page, limit, search, }: {
    page?: number;
    limit?: number;
    search?: string;
}) => Promise<{
    data: {
        id: number;
        teacher: {
            id: number;
            name: string;
        } | null;
        title: string;
        slug: string;
        summary: string | null;
        price: number;
        coverImage: string | null;
    }[];
    meta: {
        page: number;
        limit: number;
        totalItems: number;
        totalPages: number;
    };
}>;
export declare const getCourseById: (id: number) => Prisma.Prisma__CourseClient<({
    teacher: {
        id: number;
        name: string;
        avatarUrl: string | null;
    } | null;
    _count: {
        enrollments: number;
        sections: number;
        lessons: number;
    };
    sections: ({
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
    })[];
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
    status: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    title: string;
    slug: string;
    summary: string | null;
    price: number;
    salePrice: number | null;
    coverImage: string | null;
    previewVideoUrl: string | null;
    teacherId: number | null;
}) | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export declare const getCourseBySlug: (slug: string) => Promise<({
    teacher: {
        id: number;
        name: string;
        avatarUrl: string | null;
    } | null;
    sections: ({
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
    })[];
} & {
    id: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    title: string;
    slug: string;
    summary: string | null;
    price: number;
    salePrice: number | null;
    coverImage: string | null;
    previewVideoUrl: string | null;
    teacherId: number | null;
}) | null>;
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
export declare const createCourse: (data: CreateCourseInput) => Promise<{
    teacher: {
        id: number;
        name: string;
        avatarUrl: string | null;
    } | null;
    _count: {
        enrollments: number;
        sections: number;
        lessons: number;
    };
    sections: ({
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
    })[];
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
    status: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    title: string;
    slug: string;
    summary: string | null;
    price: number;
    salePrice: number | null;
    coverImage: string | null;
    previewVideoUrl: string | null;
    teacherId: number | null;
}>;
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
export declare const updateCourse: (id: number, data: UpdateCourseInput) => Promise<{
    teacher: {
        id: number;
        name: string;
        avatarUrl: string | null;
    } | null;
    _count: {
        enrollments: number;
        sections: number;
        lessons: number;
    };
    sections: ({
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
    })[];
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
    status: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    title: string;
    slug: string;
    summary: string | null;
    price: number;
    salePrice: number | null;
    coverImage: string | null;
    previewVideoUrl: string | null;
    teacherId: number | null;
}>;
export declare const deleteCourse: (id: number) => Prisma.Prisma__CourseClient<{
    teacher: {
        id: number;
        name: string;
        avatarUrl: string | null;
    } | null;
    _count: {
        enrollments: number;
        sections: number;
        lessons: number;
    };
    sections: ({
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
    })[];
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
    status: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    title: string;
    slug: string;
    summary: string | null;
    price: number;
    salePrice: number | null;
    coverImage: string | null;
    previewVideoUrl: string | null;
    teacherId: number | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export {};
//# sourceMappingURL=course.service.d.ts.map