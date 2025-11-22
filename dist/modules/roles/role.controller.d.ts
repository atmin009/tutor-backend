import type { Request, Response } from "express";
export declare const listRolesHandler: (_req: Request, res: Response) => Promise<void>;
export declare const createRoleHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getRoleHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateRoleHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteRoleHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=role.controller.d.ts.map