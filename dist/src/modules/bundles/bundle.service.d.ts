export declare const listBundlePromotions: () => Promise<{
    id: number;
    name: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    price: number;
    courseIds: string;
    maxCourses: number | null;
    startsAt: Date | null;
    endsAt: Date | null;
}[]>;
export declare const getBundlePromotionById: (id: number) => Promise<{
    id: number;
    name: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    price: number;
    courseIds: string;
    maxCourses: number | null;
    startsAt: Date | null;
    endsAt: Date | null;
} | null>;
export declare const createBundlePromotion: (data: {
    name: string;
    description?: string | null;
    price: number;
    status?: string;
    courseIds: number[];
    maxCourses?: number | null;
    startsAt?: Date | null;
    endsAt?: Date | null;
}) => Promise<{
    id: number;
    name: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    price: number;
    courseIds: string;
    maxCourses: number | null;
    startsAt: Date | null;
    endsAt: Date | null;
}>;
export declare const updateBundlePromotion: (id: number, data: {
    name?: string;
    description?: string | null;
    price?: number;
    status?: string;
    courseIds?: number[];
    maxCourses?: number | null;
    startsAt?: Date | null;
    endsAt?: Date | null;
}) => Promise<{
    id: number;
    name: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    price: number;
    courseIds: string;
    maxCourses: number | null;
    startsAt: Date | null;
    endsAt: Date | null;
}>;
export declare const deleteBundlePromotion: (id: number) => Promise<{
    id: number;
    name: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    price: number;
    courseIds: string;
    maxCourses: number | null;
    startsAt: Date | null;
    endsAt: Date | null;
}>;
//# sourceMappingURL=bundle.service.d.ts.map