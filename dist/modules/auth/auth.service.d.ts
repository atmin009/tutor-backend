import type { AuthTokenPayload } from "../../utils/jwt.js";
export declare class AuthError extends Error {
    status: number;
    constructor(message: string, status?: number);
}
export declare const login: (email: string, password: string) => Promise<{
    token: string;
    payload: AuthTokenPayload;
    user: {
        id: number;
        name: string;
        email: string;
    };
}>;
export declare const register: (name: string, email: string, password: string, phone?: string) => Promise<{
    token: string;
    payload: AuthTokenPayload;
    user: {
        id: number;
        name: string;
        email: string;
    };
}>;
//# sourceMappingURL=auth.service.d.ts.map