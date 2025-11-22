import type { Request, Response } from "express";
export declare const listPermissionsHandler: (_req: Request, res: Response) => Promise<void>;
export declare const createPermissionHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getPermissionHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updatePermissionHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deletePermissionHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=permission.controller.d.ts.map