import { Request, Response, NextFunction } from "express";
import { NotFoundException } from ".";

export const exception_not_found = (_req: Request, _res: Response, next: NextFunction) => {
  next(new NotFoundException("common.not_found"));
};
