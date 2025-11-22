import { Router } from "express";
import { PaymentAdminController } from "./payment.admin.controller.js";
import {
  requireAuth,
  requirePermission,
} from "../../middlewares/authMiddleware.js";

const router = Router();

router.use(requireAuth);
router.use(requirePermission("manage_courses"));

router.get("/revenue-stats", PaymentAdminController.getRevenueStats);
router.get("/recent-orders", PaymentAdminController.getRecentOrders);
router.get("/order/:id", PaymentAdminController.getOrderDetails);
router.get("/payment-methods", PaymentAdminController.getPaymentMethods);

export default router;

