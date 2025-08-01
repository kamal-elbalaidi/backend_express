import { HttpException } from "./exception.http";

export class NotFoundException extends HttpException {
  constructor(
    message = "common.not_found",
    errors?: { field?: string; title: string }[]
  ) {
    const formattedErrors = errors ? [...errors] : [{ field: "resource", title: "user.not_found" }];
    super(404, message, formattedErrors);
  }
}

export class ConflictException extends HttpException {
  constructor(
    message = "common.duplicate_entry",
    errors?: { field?: string; title: string }[]
  ) {
    const formattedErrors = errors ? [...errors] : [{ field: "resource", title: "common.duplicate_entry" }];
    super(409, message, formattedErrors);
  }
}

export class BadRequestException extends HttpException {
  constructor(
    message = "common.bad_request",
    errors?: { field?: string; title: string }[]
  ) {
    const formattedErrors = errors ? [...errors] : [{ field: "request", title: "common.bad_request" }];
    super(400, message, formattedErrors);
  }
}

export class InternalServerErrorException extends HttpException {
  constructor(
    message = "common.server_error",
    errors?: { field?: string; title: string }[]
  ) {
    const formattedErrors = errors ? [...errors] : [{ field: "server", title: "common.server_error" }];
    super(500, message, formattedErrors);
  }
}
