import { TFunction } from "i18next";
import { Request, Response, NextFunction } from "express"
import { ResponseBuilder } from "../../core/common/responses/responses.module";
import { InternalServerErrorException } from "../../core/common/exceptions";
import { HttpStatus } from "../../core/common/constants/http-status";
import { get_users_service } from "./user.service";


export const get_users = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const t: TFunction = req.t;
    const user = await get_users_service()
    ResponseBuilder.success(res, HttpStatus.ok, t("user:found"), user);
  } catch (err: any) {
    next(new InternalServerErrorException())
  }
};

