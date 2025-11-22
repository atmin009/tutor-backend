import type { SignOptions } from "jsonwebtoken";
export type AuthTokenPayload = {
    userId: number;
    roles: string[];
    permissions: string[];
};
export declare const signToken: (payload: AuthTokenPayload, options?: SignOptions) => string;
export declare const verifyToken: (token: string) => AuthTokenPayload;
//# sourceMappingURL=jwt.d.ts.map