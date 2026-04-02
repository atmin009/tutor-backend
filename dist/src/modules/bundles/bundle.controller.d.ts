import type { Request, Response } from "express";
export declare const listBundlesHandler: (_req: Request, res: Response) => Promise<void>;
export declare const getBundleHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
/** Public: get bundle by id for landing page (active + within date range only) */
export declare const getBundlePublicHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createBundleHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateBundleHandler: (req: Request, res: Response) => Promise<void>;
export declare const deleteBundleHandler: (req: Request, res: Response) => Promise<void>;
export declare const checkoutBundleHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=bundle.controller.d.ts.map