import { Router } from "express";
import { CouponController } from "./coupon.controller.js";
import { requireAuth } from "../../middlewares/authMiddleware.js";
const router = Router();
// Public route (requires authentication)
router.post("/validate", requireAuth, CouponController.validate);
// Admin routes
router.get("/", requireAuth, CouponController.getAll);
router.get("/:id", requireAuth, CouponController.getById);
router.post("/", requireAuth, CouponController.create);
router.put("/:id", requireAuth, CouponController.update);
router.delete("/:id", requireAuth, CouponController.delete);
export default router;
//# sourceMappingURL=coupon.routes.js.map