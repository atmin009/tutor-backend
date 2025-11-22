import type { Prisma } from "../../../generated/prisma/client.js";
export declare const listTeachers: (search?: string) => Prisma.PrismaPromise<({
    courses: {
        id: number;
        status: string;
        title: string;
    }[];
} & {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    bio: string | null;
    avatarUrl: string | null;
})[]>;
export declare const getTeacherById: (id: number) => Prisma.Prisma__TeacherClient<({
    courses: {
        id: number;
        status: string;
        title: string;
    }[];
} & {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    bio: string | null;
    avatarUrl: string | null;
}) | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
type CreateTeacherInput = {
    name: string;
    bio?: string | null;
    avatarUrl?: string | null;
};
export declare const createTeacher: (data: CreateTeacherInput) => Prisma.Prisma__TeacherClient<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    bio: string | null;
    avatarUrl: string | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
type UpdateTeacherInput = {
    name?: string;
    bio?: string | null;
    avatarUrl?: string | null;
};
export declare const updateTeacher: (id: number, data: UpdateTeacherInput) => Prisma.Prisma__TeacherClient<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    bio: string | null;
    avatarUrl: string | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export declare const deleteTeacher: (id: number) => Prisma.Prisma__TeacherClient<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    bio: string | null;
    avatarUrl: string | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export {};
//# sourceMappingURL=teacher.service.d.ts.map