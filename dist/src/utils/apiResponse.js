export const success = (res, data, message = "Success") => {
    const response = {
        data,
        message,
    };
    return res.json(response);
};
export const error = (res, statusCode, message, details) => {
    const response = {
        data: null,
        message,
        ...(details !== undefined && { details }),
    };
    return res.status(statusCode).json(response);
};
//# sourceMappingURL=apiResponse.js.map