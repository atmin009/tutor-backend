import type { NextFunction, Request, Response } from "express";
export declare const PaymentAdminController: {
    getRevenueStats: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    getRecentOrders: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    getOrderDetails: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    getPaymentMethods: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
};
//# sourceMappingURL=payment.admin.controller.d.ts.map