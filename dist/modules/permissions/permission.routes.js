import { Router } from "express";
import { createPermissionHandler, deletePermissionHandler, getPermissionHandler, listPermissionsHandler, updatePermissionHandler, } from "./permission.controller.js";
import { requireAuth, requirePermission, } from "../../middlewares/authMiddleware.js";
const permissionRouter = Router();
permissionRouter.use(requireAuth);
permissionRouter.use(requirePermission("manage_roles"));
permissionRouter.get("/", listPermissionsHandler);
permissionRouter.post("/", createPermissionHandler);
permissionRouter.get("/:id", getPermissionHandler);
permissionRouter.put("/:id", updatePermissionHandler);
permissionRouter.delete("/:id", deletePermissionHandler);
export default permissionRouter;
//# sourceMappingURL=permission.routes.js.map