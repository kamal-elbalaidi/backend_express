import prisma from "../../core/config/prisma.config";
import { TFunction } from "i18next";
import { Request, Response, NextFunction } from "express"
import { ResponseBuilder } from "../../core/common/responses/responses.module";
import { InternalServerErrorException } from "../../core/common/exceptions";
import { formatError } from "../../core/common/helpers/error.utils";

export const get_users_service = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const t: TFunction = req.t;
    const user = await prisma.user.findMany({});
    ResponseBuilder.success(res, 200, t("user.found"), user);
  } catch (err: any) {
    // next(new InternalServerErrorException(req.t("common.db_connection_failed"), [{ field: "knnnnnnnn", title: "kkkk" }]))
    next(formatError(err))
  }
};
