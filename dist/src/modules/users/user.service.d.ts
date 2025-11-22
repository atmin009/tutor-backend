export type UserDto = {
    id: number;
    name: string;
    email: string;
    status: string;
    createdAt: Date;
    roles: string[];
};
type ListUsersParams = {
    page: number;
    limit: number;
    search?: string | undefined;
    status?: string | undefined;
};
type CreateUserInput = {
    name: string;
    email: string;
    password: string;
    status?: string;
    roleNames?: string[] | undefined;
};
type UpdateUserInput = {
    name?: string;
    email?: string;
    password?: string;
    status?: string;
    roleNames?: string[] | undefined;
};
export declare const listUsers: ({ page, limit, search, status, }: ListUsersParams) => Promise<{
    data: UserDto[];
    meta: {
        page: number;
        limit: number;
        totalItems: number;
        totalPages: number;
    };
}>;
export declare const getUserById: (id: number) => Promise<UserDto | null>;
export declare const createUser: ({ name, email, password, status, roleNames, }: CreateUserInput) => Promise<UserDto>;
export declare const updateUser: (id: number, data: UpdateUserInput) => Promise<UserDto>;
export declare const deleteUser: (id: number) => Promise<UserDto>;
export {};
//# sourceMappingURL=user.service.d.ts.map