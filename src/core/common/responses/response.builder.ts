import { Response } from "express";
import { success_response, error_response } from "./response.helpers";

export class ResponseBuilder {
  static success<T>(res: Response, status_code: number, message: string, data?: T, meta: any = {}) {
    return res.status(status_code).json(success_response(status_code, message, data, meta));
  }

  static error(res: Response, status_code: number, message: string, errors?: any, meta: any = {}) {
    return res.status(status_code).json(error_response(status_code, message, errors, meta));
  }
}
