export interface PaymentNotificationData {
    userName: string;
    courseTitle: string;
    amount: number;
    originalAmount?: number;
    discountAmount?: number;
    couponInfo?: {
        code: string;
        description: string | null;
        discountAmount: number;
    } | null;
    orderDate: Date;
    phone: string;
    paymentMethod: string;
}
export declare function sendTelegramNotification(botToken: string, chatId: string, data: PaymentNotificationData): Promise<void>;
//# sourceMappingURL=telegram.d.ts.map