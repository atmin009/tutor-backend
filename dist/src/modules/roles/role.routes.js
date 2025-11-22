import { Router } from "express";
import { createRoleHandler, deleteRoleHandler, getRoleHandler, listRolesHandler, updateRoleHandler, } from "./role.controller.js";
import { requireAuth, requirePermission, } from "../../middlewares/authMiddleware.js";
const roleRouter = Router();
roleRouter.use(requireAuth);
roleRouter.use(requirePermission("manage_roles"));
roleRouter.get("/", listRolesHandler);
roleRouter.post("/", createRoleHandler);
roleRouter.get("/:id", getRoleHandler);
roleRouter.put("/:id", updateRoleHandler);
roleRouter.delete("/:id", deleteRoleHandler);
export default roleRouter;
//# sourceMappingURL=role.routes.js.map