import { verifyToken } from "../utils/jwt.js";
const extractToken = (req) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
        return null;
    }
    return authHeader.replace("Bearer ", "").trim();
};
export const requireAuth = (req, res, next) => {
    try {
        const token = extractToken(req);
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const payload = verifyToken(token);
        req.user = payload;
        next();
    }
    catch {
        return res.status(401).json({ message: "Unauthorized" });
    }
};
export const requirePermission = (permissionName) => (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const hasPermission = req.user.permissions.includes(permissionName);
    if (!hasPermission) {
        return res.status(403).json({ message: "Forbidden" });
    }
    next();
};
//# sourceMappingURL=authMiddleware.js.map