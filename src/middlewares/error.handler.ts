import { Request, Response, NextFunction } from "express";
import { ResponseBuilder } from "../core/common/responses/responses.module";
import { HttpException } from "../core/common/exceptions/exception.http";
import { HttpStatus } from "../core/common/constants/http-status";

export const error_handler = (err: any, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof HttpException) {
    return ResponseBuilder.error(
      res,
      err.status_code,
      req.t(err.message),
      err.errors?.map(e => ({
        field: req.t(e.field ?? ""),
        title: req.t(e.title ?? "")
      }))
    );
  }

  return ResponseBuilder.error(res, HttpStatus.not_found, req.t("error:not_found"), [
    { field: req.t("field:server"), title: req.t("error:not_found") }
  ]);
};
