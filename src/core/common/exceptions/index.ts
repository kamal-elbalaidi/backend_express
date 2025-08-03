import { HttpStatus } from "../constants/http-status";
import { HttpException } from "./exception.http";

export class NotFoundException extends HttpException {
  constructor(
    message = "error:not_found",
    errors?: { field?: string; title: string }[]
  ) {
    const formattedErrors = errors ? [...errors] : [{ field: "field:resource", title: "title:not_found" }];
    super(HttpStatus.not_found, message, formattedErrors);
  }
}

export class ConflictException extends HttpException {
  constructor(
    message = "common.duplicate_entry",
    errors?: { field?: string; title: string }[]
  ) {
    const formattedErrors = errors ? [...errors] : [{ field: "field:resource", title: "error:duplicate_entry" }];
    super(HttpStatus.conflict, message, formattedErrors);
  }
}

export class BadRequestException extends HttpException {
  constructor(
    message = "error:bad_request",
    errors?: { field?: string; title: string }[]
  ) {
    const formattedErrors = errors ? [...errors] : [{ field: "field:request", title: "error:bad_request" }];
    super(HttpStatus.bad_request, message, formattedErrors);
  }
}

export class InternalServerErrorException extends HttpException {
  constructor(
    message = "error:server_error",
    errors?: { field?: string; title: string }[]
  ) {
    const formattedErrors = errors ? [...errors] : [{ field: "field:server", title: "error:server_error" }];
    super(HttpStatus.internal_server_error, message, formattedErrors);
  }
}
