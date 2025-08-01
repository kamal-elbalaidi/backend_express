import { Response } from "express";
import { success_response, error_response } from "./response.helpers";

export class ResponseBuilder {
  static success<T>(res: Response, code: number, message: string, data?: T, meta: any = {}) {
    return res.status(code).json(success_response(code, message, data, meta));
  }

  static error(res: Response, code: number, message: string, errors?: any, meta: any = {}) {
    return res.status(code).json(error_response(code, message, errors, meta));
  }
}
