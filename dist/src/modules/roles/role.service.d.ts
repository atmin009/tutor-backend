import type { Prisma } from "../../../generated/prisma/client.js";
type RoleInput = {
    name: string;
    description?: string | null;
    permissionIds?: number[];
};
export declare const listRoles: () => Prisma.PrismaPromise<({
    permissions: ({
        permission: {
            id: number;
            name: string;
            description: string | null;
        };
    } & {
        id: number;
        roleId: number;
        permissionId: number;
    })[];
} & {
    id: number;
    name: string;
    description: string | null;
})[]>;
export declare const getRoleById: (id: number) => Prisma.Prisma__RoleClient<({
    permissions: ({
        permission: {
            id: number;
            name: string;
            description: string | null;
        };
    } & {
        id: number;
        roleId: number;
        permissionId: number;
    })[];
} & {
    id: number;
    name: string;
    description: string | null;
}) | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export declare const createRole: ({ name, description, permissionIds, }: RoleInput) => Promise<({
    permissions: ({
        permission: {
            id: number;
            name: string;
            description: string | null;
        };
    } & {
        id: number;
        roleId: number;
        permissionId: number;
    })[];
} & {
    id: number;
    name: string;
    description: string | null;
}) | null>;
type UpdateRoleInput = {
    name?: string;
    description?: string | null;
    permissionIds?: number[];
};
export declare const updateRole: (id: number, data: UpdateRoleInput) => Promise<({
    permissions: ({
        permission: {
            id: number;
            name: string;
            description: string | null;
        };
    } & {
        id: number;
        roleId: number;
        permissionId: number;
    })[];
} & {
    id: number;
    name: string;
    description: string | null;
}) | null>;
export declare const deleteRole: (id: number) => Prisma.Prisma__RoleClient<{
    id: number;
    name: string;
    description: string | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: Prisma.GlobalOmitConfig | undefined;
}>;
export {};
//# sourceMappingURL=role.service.d.ts.map