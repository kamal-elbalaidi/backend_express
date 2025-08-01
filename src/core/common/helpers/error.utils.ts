import { Prisma } from "@prisma/client";
import { InternalServerErrorException, BadRequestException } from "../exceptions";
// import { JsonWebTokenError } from "jsonwebtoken";

export const formatError = (err: unknown) => {
  // Prisma error
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    return new BadRequestException("common.db_query_failed", [
      { field: "database", title: err.message || "Database query failed" },
    ]);
  }

  // JWT error
  /* if (err instanceof JsonWebTokenError) {
    return new UnauthorizedException("auth.invalid_token", [
      { field: "token", title: err.message || "Invalid token" },
    ]);
  } */

  // Default: Internal server error
  const message = err instanceof Error ? err.message : "Unexpected error occurred";
  return new InternalServerErrorException("error.server_error", [
    { field: "server", title: message },
  ]);
};
