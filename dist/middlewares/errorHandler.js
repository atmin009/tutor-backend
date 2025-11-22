import { error } from "../utils/apiResponse.js";
export const errorHandler = (err, _req, res, _next) => {
    // Prisma errors
    if (err.code === "P2002") {
        return error(res, 409, "Unique constraint violation", "A record with this value already exists");
    }
    if (err.code === "P2025") {
        return error(res, 404, "Record not found");
    }
    // Validation errors
    if (err.name === "ValidationError") {
        return error(res, 400, "Validation error", err.message);
    }
    // JWT errors
    if (err.name === "JsonWebTokenError") {
        return error(res, 401, "Invalid token");
    }
    if (err.name === "TokenExpiredError") {
        return error(res, 401, "Token expired");
    }
    // Default error
    const statusCode = err.statusCode || err.status || 500;
    const message = err.message || "An unexpected error occurred";
    const details = process.env.NODE_ENV === "development" ? err.stack : undefined;
    return error(res, statusCode, message, details);
};
//# sourceMappingURL=errorHandler.js.map