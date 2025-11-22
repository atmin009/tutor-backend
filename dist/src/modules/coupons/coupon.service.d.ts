export interface ValidateCouponResult {
    valid: boolean;
    message?: string;
    discountAmount?: number;
    coupon?: any;
}
export type CreateCouponData = {
    code: string;
    description?: string;
    discountType: "percentage" | "fixed";
    discountValue: number;
    minPurchaseAmount?: number;
    maxDiscountAmount?: number;
    validFrom: Date;
    validUntil: Date;
    usageLimit?: number;
    userLimit?: number;
    courseIds?: number[];
    status?: string;
};
export declare function validateCoupon(code: string, userId: number, courseId: number, coursePrice: number): Promise<ValidateCouponResult>;
export declare function applyCoupon(couponId: number, userId: number, orderId: number, discountAmount: number): Promise<void>;
export declare function createCoupon(data: CreateCouponData): Promise<{
    id: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    code: string;
    discountType: string;
    discountValue: number;
    minPurchaseAmount: number | null;
    maxDiscountAmount: number | null;
    validFrom: Date;
    validUntil: Date;
    usageLimit: number | null;
    usageCount: number;
    userLimit: number | null;
    courseIds: string | null;
}>;
export declare function updateCoupon(id: number, data: Partial<CreateCouponData>): Promise<{
    id: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    code: string;
    discountType: string;
    discountValue: number;
    minPurchaseAmount: number | null;
    maxDiscountAmount: number | null;
    validFrom: Date;
    validUntil: Date;
    usageLimit: number | null;
    usageCount: number;
    userLimit: number | null;
    courseIds: string | null;
}>;
export declare function deleteCoupon(id: number): Promise<{
    id: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    code: string;
    discountType: string;
    discountValue: number;
    minPurchaseAmount: number | null;
    maxDiscountAmount: number | null;
    validFrom: Date;
    validUntil: Date;
    usageLimit: number | null;
    usageCount: number;
    userLimit: number | null;
    courseIds: string | null;
}>;
export declare function getCoupons(page?: number, limit?: number): Promise<{
    coupons: {
        courseIds: any;
        id: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        code: string;
        discountType: string;
        discountValue: number;
        minPurchaseAmount: number | null;
        maxDiscountAmount: number | null;
        validFrom: Date;
        validUntil: Date;
        usageLimit: number | null;
        usageCount: number;
        userLimit: number | null;
    }[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}>;
export declare function getCouponById(id: number): Promise<{
    courseIds: any;
    couponUsages: ({
        user: {
            id: number;
            email: string;
            name: string;
        };
        order: {
            id: number;
            status: string;
            createdAt: Date;
            orderId: string;
            amount: number;
        };
    } & {
        id: number;
        userId: number;
        orderId: number;
        couponId: number;
        discountAmount: number;
        usedAt: Date;
    })[];
    id: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    code: string;
    discountType: string;
    discountValue: number;
    minPurchaseAmount: number | null;
    maxDiscountAmount: number | null;
    validFrom: Date;
    validUntil: Date;
    usageLimit: number | null;
    usageCount: number;
    userLimit: number | null;
} | null>;
//# sourceMappingURL=coupon.service.d.ts.map