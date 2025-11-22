type PermissionInput = {
    name: string;
    description?: string | null;
};
export declare const listPermissions: () => import("../../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
    id: number;
    name: string;
    description: string | null;
}[]>;
export declare const getPermissionById: (id: number) => import("../../../generated/prisma/models.js").Prisma__PermissionClient<{
    id: number;
    name: string;
    description: string | null;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const createPermission: (data: PermissionInput) => import("../../../generated/prisma/models.js").Prisma__PermissionClient<{
    id: number;
    name: string;
    description: string | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
type UpdatePermissionInput = {
    name?: string;
    description?: string | null;
};
export declare const updatePermission: (id: number, data: UpdatePermissionInput) => import("../../../generated/prisma/models.js").Prisma__PermissionClient<{
    id: number;
    name: string;
    description: string | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const deletePermission: (id: number) => import("../../../generated/prisma/models.js").Prisma__PermissionClient<{
    id: number;
    name: string;
    description: string | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export {};
//# sourceMappingURL=permission.service.d.ts.map