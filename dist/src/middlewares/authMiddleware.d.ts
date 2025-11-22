import type { NextFunction, Request, Response } from "express";
import type { AuthTokenPayload } from "../utils/jwt.js";
declare global {
    namespace Express {
        interface Request {
            user?: AuthTokenPayload;
        }
    }
}
export declare const requireAuth: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const requirePermission: (permissionName: string) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=authMiddleware.d.ts.map