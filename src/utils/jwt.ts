import { config } from "dotenv";
import jwt from "jsonwebtoken";
import type { SignOptions } from "jsonwebtoken";

config();

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not set in environment variables");
}

export type AuthTokenPayload = {
  userId: number;
  roles: string[];
  permissions: string[];
};

export const signToken = (
  payload: AuthTokenPayload,
  options?: SignOptions,
): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1h",
    ...options,
  });
};

export const verifyToken = (token: string): AuthTokenPayload => {
  return jwt.verify(token, JWT_SECRET) as AuthTokenPayload;
};

