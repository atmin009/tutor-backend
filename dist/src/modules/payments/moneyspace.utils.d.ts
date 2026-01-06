/**
 * Verify webhook hash from MoneySpace
 * According to MoneySpace documentation:
 * - If status = "OK": hash = hash_hmac('sha256', transactionID + amount, secret_key)
 * - If status != "OK": hash = hash_hmac('sha256', transactionID + amount + status + orderid, secret_key)
 */
export declare function verifyWebhookHash(hash: string | undefined, status: string | undefined, transactionID: string | undefined, amount: number | string | undefined, orderid: string | undefined): boolean;
/**
 * Check transaction status from MoneySpace API
 * URL: https://www.moneyspace.net/merchantapi/v1/findbytransaction/obj
 */
export declare function checkTransactionStatus(transactionID: string): Promise<{
    status: string;
    isPaid: boolean;
} | null>;
/**
 * Check transaction status with retry mechanism
 * Retries up to 3 times with 3 second delay between attempts
 */
export declare function checkTransactionStatusWithRetry(transactionID: string, maxRetries?: number, delaySeconds?: number): Promise<{
    status: string;
    isPaid: boolean;
} | null>;
//# sourceMappingURL=moneyspace.utils.d.ts.map