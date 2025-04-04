/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorCode } from '../config/error';

class CustomError extends Error {
  code: ErrorCode;
  status: number;
  date: Date;

  constructor(code: ErrorCode, status: number, ...params: any[]) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.code = code;
    this.status = status;
    this.date = new Date();
  }
}

export default CustomError;
