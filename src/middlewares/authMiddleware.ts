import type { NextFunction, Request, Response } from "express";
import type { AuthTokenPayload } from "../utils/jwt.js";
import { verifyToken } from "../utils/jwt.js";

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Request {
      user?: AuthTokenPayload;
    }
  }
}

const extractToken = (req: Request): string | null => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return null;
  }

  return authHeader.replace("Bearer ", "").trim();
};

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = extractToken(req);

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const payload = verifyToken(token);
    req.user = payload;

    next();
  } catch {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const requirePermission =
  (permissionName: string) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const hasPermission = req.user.permissions.includes(permissionName);

    if (!hasPermission) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };

