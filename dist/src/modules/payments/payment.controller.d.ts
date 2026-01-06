import type { NextFunction, Request, Response } from "express";
export declare const PaymentsController: {
    create: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    status: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    confirm: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
};
//# sourceMappingURL=payment.controller.d.ts.map