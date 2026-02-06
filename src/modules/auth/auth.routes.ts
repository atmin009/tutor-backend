import { Router } from "express";
import { loginHandler, registerHandler, registerSuperAdminHandler } from "./auth.controller.js";

const authRouter = Router();

authRouter.post("/login", loginHandler);
authRouter.post("/register", registerHandler);
authRouter.post("/register-super-admin", registerSuperAdminHandler);

export default authRouter;

