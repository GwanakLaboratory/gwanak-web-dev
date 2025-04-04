import { HTTPError } from 'ky';

export interface IErrorResponse extends HTTPError {
  code: ErrorCode;
  status: number;
  date: Date;
}
export type ErrorCode =
  // Common
  | 'C01'
  // User
  | 'U01'
  // User - Token
  | 'T01'
  // External API
  | 'E01'
  // JWT
  | 'J001';
