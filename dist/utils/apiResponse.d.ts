import type { Response } from "express";
export declare const success: <T = unknown>(res: Response, data: T, message?: string) => Response<any, Record<string, any>>;
export declare const error: (res: Response, statusCode: number, message: string, details?: unknown) => Response<any, Record<string, any>>;
//# sourceMappingURL=apiResponse.d.ts.map