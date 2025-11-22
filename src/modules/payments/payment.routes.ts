import { Router } from "express";
import { PaymentsController } from "./payment.controller.js";
import { requireAuth } from "../../middlewares/authMiddleware.js";

const router = Router();

router.post("/create", requireAuth, PaymentsController.create);
router.get("/status", requireAuth, PaymentsController.status);

export default router;

