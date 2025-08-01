import { Request, Response, NextFunction } from "express";
import { ResponseBuilder } from "../core/common/responses/responses.module";
import { HttpException } from "../core/common/exceptions/exception.http";
// import { AppConfig } from "../core/common/constants/constants.app";
// import { formatError } from "../core/common/helpers/error.utils";

export const error_handler = (err: any, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof HttpException) {
    return ResponseBuilder.error(
      res,
      err.code,
      req.t(err.message),
      err.errors?.map(e => ({
        field: req.t(e.field),
        title: req.t(e.title)
      }))
    );
  }

  return ResponseBuilder.error(res, 500, req.t("error.server_error"), [
    { field: "server", title: req.t("error.server_error") }
  ]);
};
