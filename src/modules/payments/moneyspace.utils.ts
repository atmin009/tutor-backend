import crypto from "crypto";
import axios from "axios";

/**
 * Verify webhook hash from MoneySpace
 * According to MoneySpace documentation:
 * - If status = "OK": hash = hash_hmac('sha256', transactionID + amount, secret_key)
 * - If status != "OK": hash = hash_hmac('sha256', transactionID + amount + status + orderid, secret_key)
 */
export function verifyWebhookHash(
  hash: string | undefined,
  status: string | undefined,
  transactionID: string | undefined,
  amount: number | string | undefined,
  orderid: string | undefined
): boolean {
  if (!hash || !transactionID || amount === undefined) {
    console.warn("⚠️ Missing required fields for hash verification:", {
      hasHash: !!hash,
      hasTransactionID: !!transactionID,
      hasAmount: amount !== undefined,
    });
    return false;
  }

  const secretKey = process.env.MONEYSPACE_SECRET_KEY;
  if (!secretKey) {
    console.error("❌ MONEYSPACE_SECRET_KEY not found in environment variables");
    return false;
  }

  // Normalize status
  const normalizedStatus = status?.toLowerCase().trim() || "";

  // Calculate hash based on status
  let hashString: string;
  if (normalizedStatus === "ok") {
    // For status = "OK": hash = hash_hmac('sha256', transactionID + amount, secret_key)
    hashString = `${transactionID}${amount}`;
  } else {
    // For status != "OK": hash = hash_hmac('sha256', transactionID + amount + status + orderid, secret_key)
    hashString = `${transactionID}${amount}${status || ""}${orderid || ""}`;
  }

  // Calculate HMAC SHA256
  const calculatedHash = crypto
    .createHmac("sha256", secretKey)
    .update(hashString)
    .digest("hex");

  const isValid = calculatedHash === hash;

  if (!isValid) {
    console.error("❌ Hash verification failed:", {
      receivedHash: hash,
      calculatedHash,
      hashString,
      status: normalizedStatus,
    });
  } else {
    console.log("✅ Hash verification passed");
  }

  return isValid;
}

/**
 * Check transaction status from MoneySpace API
 * URL: https://www.moneyspace.net/merchantapi/v1/findbytransaction/obj
 */
export async function checkTransactionStatus(
  transactionID: string
): Promise<{ status: string; isPaid: boolean } | null> {
  const secretId = process.env.MONEYSPACE_SECRET_ID;
  const secretKey = process.env.MONEYSPACE_SECRET_KEY;

  if (!secretId || !secretKey) {
    console.error("❌ MoneySpace credentials missing");
    return null;
  }

  // Generate timeHash (current timestamp in format: YYYYMMDDHHmmss)
  const now = new Date();
  const timeHash = now
    .toISOString()
    .replace(/[-:T]/g, "")
    .slice(0, 14)
    .replace(/\.\d{3}Z$/, "");

  // Calculate hash: hash_hmac('sha256', transactionID + timeHash, secret_key)
  const hashString = `${transactionID}${timeHash}`;
  const hash = crypto
    .createHmac("sha256", secretKey)
    .update(hashString)
    .digest("hex");

  // NOTE:
  // MoneySpace merchantapi often expects x-www-form-urlencoded (not JSON).
  // If we send JSON, it may respond 400 "missing parameters" (HTML page).
  const requestData = new URLSearchParams();
  requestData.set("secreteID", secretId);
  requestData.set("transactionID", transactionID);
  requestData.set("timeHash", timeHash);
  requestData.set("hash", hash);

  try {
    console.log("🔍 Checking transaction status:", {
      transactionID,
      timeHash,
    });
    console.log("   Request keys:", Array.from(requestData.keys()));

    const response = await axios.post(
      "https://www.moneyspace.net/merchantapi/v1/findbytransaction/obj",
      requestData,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        timeout: 10000, // 10 seconds timeout
      }
    );

    console.log("📦 Check_Transaction API response:", JSON.stringify(response.data, null, 2));

    // MoneySpace sometimes returns an array with keys that include trailing spaces
    // e.g. { "Status Payment ": "Pay Success" }
    const raw = response.data;
    const item = Array.isArray(raw) ? raw[0] : raw;

    // Normalize keys by trimming and lowercasing
    const normalized: Record<string, any> = {};
    if (item && typeof item === "object") {
      for (const [k, v] of Object.entries(item)) {
        normalized[k.trim().toLowerCase()] = v;
      }
    }

    const statusRaw =
      normalized["status"] ??
      normalized["status payment"] ??
      normalized["statuspayment"] ??
      normalized["payment status"] ??
      normalized["paymentstatus"] ??
      "";

    const status = String(statusRaw).toLowerCase().trim();
    const isPaid =
      status === "paid" ||
      status === "paysuccess" ||
      status === "success" ||
      status === "completed" ||
      status === "done" ||
      status === "pay success" ||
      status === "pay_success";

    return {
      status: status || "unknown",
      isPaid,
    };
  } catch (error: any) {
    console.error("❌ Check_Transaction API error:", {
      message: error.message,
      response: error.response?.data,
    });
    return null;
  }
}

/**
 * Check transaction status with retry mechanism
 * Retries up to 3 times with 3 second delay between attempts
 */
export async function checkTransactionStatusWithRetry(
  transactionID: string,
  maxRetries: number = 3,
  delaySeconds: number = 3
): Promise<{ status: string; isPaid: boolean } | null> {
  for (let i = 0; i < maxRetries; i++) {
    const result = await checkTransactionStatus(transactionID);

    if (result && result.isPaid) {
      console.log(`✅ Transaction confirmed as paid (attempt ${i + 1}/${maxRetries})`);
      return result;
    }

    if (result) {
      console.log(
        `⚠️ Transaction status: ${result.status} (not paid yet, attempt ${i + 1}/${maxRetries})`
      );
    }

    // If not last attempt, wait before retrying
    if (i < maxRetries - 1) {
      console.log(`⏳ Waiting ${delaySeconds} seconds before retry...`);
      await new Promise((resolve) => setTimeout(resolve, delaySeconds * 1000));
    }
  }

  console.log(`❌ Transaction status check failed after ${maxRetries} attempts`);
  return null;
}

