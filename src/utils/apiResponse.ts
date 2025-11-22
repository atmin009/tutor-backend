import type { Response } from "express";

type SuccessResponse<T = unknown> = {
  data: T;
  message: string;
};

type ErrorResponse = {
  data: null;
  message: string;
  details?: unknown;
};

export const success = <T = unknown>(
  res: Response,
  data: T,
  message = "Success"
) => {
  const response: SuccessResponse<T> = {
    data,
    message,
  };
  return res.json(response);
};

export const error = (
  res: Response,
  statusCode: number,
  message: string,
  details?: unknown
) => {
  const response: ErrorResponse = {
    data: null,
    message,
    ...(details !== undefined && { details }),
  };
  return res.status(statusCode).json(response);
};

