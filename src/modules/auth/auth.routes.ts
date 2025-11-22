import { Router } from "express";
import { loginHandler, registerHandler } from "./auth.controller.js";

const authRouter = Router();

authRouter.post("/login", loginHandler);
authRouter.post("/register", registerHandler);

export default authRouter;

