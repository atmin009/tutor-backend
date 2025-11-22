import { Router } from "express";
import { webhookHandler } from "./payment.webhook.controller.js";

const router = Router();

// Webhook endpoint - NO authentication required (MoneySpace calls this)
router.post("/webhook", webhookHandler);

export default router;

