import { Router } from "express";
import {
  listBundlesHandler,
  getBundleHandler,
  createBundleHandler,
  updateBundleHandler,
  deleteBundleHandler,
  checkoutBundleHandler,
} from "./bundle.controller.js";
import { authenticate } from "../../middlewares/authMiddleware.js";

const router = Router();

// Admin CRUD
router.get("/admin/bundles", authenticate, listBundlesHandler);
router.get("/admin/bundles/:id", authenticate, getBundleHandler);
router.post("/admin/bundles", authenticate, createBundleHandler);
router.put("/admin/bundles/:id", authenticate, updateBundleHandler);
router.delete("/admin/bundles/:id", authenticate, deleteBundleHandler);

// User checkout bundle
router.post("/me/bundles/checkout", authenticate, checkoutBundleHandler);

export default router;

