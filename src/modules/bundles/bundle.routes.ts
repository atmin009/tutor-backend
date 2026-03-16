import { Router } from "express";
import {
  listBundlesHandler,
  getBundleHandler,
  createBundleHandler,
  updateBundleHandler,
  deleteBundleHandler,
  checkoutBundleHandler,
} from "./bundle.controller.js";
import { requireAuth } from "../../middlewares/authMiddleware.js";

const router = Router();

// Admin CRUD
router.get("/admin/bundles", requireAuth, listBundlesHandler);
router.get("/admin/bundles/:id", requireAuth, getBundleHandler);
router.post("/admin/bundles", requireAuth, createBundleHandler);
router.put("/admin/bundles/:id", requireAuth, updateBundleHandler);
router.delete("/admin/bundles/:id", requireAuth, deleteBundleHandler);

// User checkout bundle
router.post("/me/bundles/checkout", requireAuth, checkoutBundleHandler);

export default router;

