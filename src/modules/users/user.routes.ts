import { Router } from "express";
import {
  createUserHandler,
  deleteUserHandler,
  getUserHandler,
  listUsersHandler,
  updateUserHandler,
} from "./user.controller.js";
import {
  requireAuth,
  requirePermission,
} from "../../middlewares/authMiddleware.js";

const userRouter = Router();

userRouter.use(requireAuth);
userRouter.use(requirePermission("manage_users"));

userRouter.get("/", listUsersHandler);
userRouter.post("/", createUserHandler);
userRouter.get("/:id", getUserHandler);
userRouter.put("/:id", updateUserHandler);
userRouter.delete("/:id", deleteUserHandler);

export default userRouter;

