import axios from "axios";

const TELEGRAM_API_URL = "https://api.telegram.org/bot";

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

export async function sendTelegramNotification(
  botToken: string,
  chatId: string,
  data: PaymentNotificationData
): Promise<void> {
  if (!botToken || !chatId) {
    console.warn("⚠️  Telegram bot token or chat ID not configured. Skipping notification.");
    return;
  }

  try {
    // Format date in Thai format
    const date = new Date(data.orderDate);
    const formattedDate = date.toLocaleString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Format amounts
    const formattedAmount = new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(data.amount);

    let amountText = `💰 *ราคา:* ${formattedAmount}`;
    if (data.originalAmount && data.discountAmount && data.discountAmount > 0) {
      const formattedOriginal = new Intl.NumberFormat("th-TH", {
        style: "currency",
        currency: "THB",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(data.originalAmount);
      const formattedDiscount = new Intl.NumberFormat("th-TH", {
        style: "currency",
        currency: "THB",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(data.discountAmount);
      amountText = `💰 *ราคาเดิม:* ${formattedOriginal}\n🎫 *ส่วนลด:* ${formattedDiscount}\n💰 *ราคาสุทธิ:* ${formattedAmount}`;
    }

    // Format payment method
    const paymentMethodText =
      data.paymentMethod === "qrnone"
        ? "PromptPay QR"
        : data.paymentMethod === "card"
        ? "Credit Card"
        : data.paymentMethod || "ไม่ระบุ";

    // Coupon info
    let couponText = "";
    if (data.couponInfo) {
      couponText = `\n🎫 *คูปอง:* ${data.couponInfo.code}${data.couponInfo.description ? ` (${data.couponInfo.description})` : ""}`;
    }

    // Create message
    const message = `🎉 *การชำระเงินสำเร็จ*

👤 *ชื่อ-นามสกุล:* ${data.userName}
📚 *คอร์ส:* ${data.courseTitle}
${amountText}${couponText}
📅 *วันที่:* ${formattedDate}
📱 *เบอร์โทร:* ${data.phone || "ไม่ระบุ"}
💳 *ช่องทางการชำระเงิน:* ${paymentMethodText}

✅ *สถานะ:* ชำระเงินสำเร็จ`;

    const url = `${TELEGRAM_API_URL}${botToken}/sendMessage`;

    await axios.post(url, {
      chat_id: chatId,
      text: message,
      parse_mode: "Markdown",
    });

    console.log("✅ Telegram notification sent successfully");
  } catch (error: any) {
    // Don't throw error - we don't want to break the payment flow if Telegram fails
    console.error("❌ Failed to send Telegram notification:", error.message);
    if (error.response) {
      console.error("   Response:", error.response.data);
    }
  }
}

