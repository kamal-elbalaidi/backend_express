import { Request, Response, NextFunction } from "express"
import { get_users_service } from "./user.service";

export const get_users = async (req: Request, res: Response, next: NextFunction) => {
  get_users_service(req, res, next);
};
