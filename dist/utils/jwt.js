import { config } from "dotenv";
import jwt from "jsonwebtoken";
config();
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not set in environment variables");
}
export const signToken = (payload, options) => {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: "1h",
        ...options,
    });
};
export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};
//# sourceMappingURL=jwt.js.map