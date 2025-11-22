export declare function createPaymentSession(userId: number, courseId: number, paymentType: string, couponCode?: string): Promise<{
    orderId: string;
    amount: number;
    originalAmount: number;
    discountAmount: number;
    couponId: number | null;
    transactionId: any;
    paymentUrl: any;
    qrImageUrl: any;
    courseTitle: string;
}>;
export declare function getPaymentStatus(orderId: string): Promise<{
    id: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    orderId: string;
    courseId: number;
    amount: number;
    paymentType: string | null;
    transactionId: string | null;
    paymentUrl: string | null;
    qrImageUrl: string | null;
    couponId: number | null;
    discountAmount: number;
}>;
//# sourceMappingURL=payment.service.d.ts.map