export class HttpException extends Error {
  constructor(
    public status_code: number,
    public message: string,
    public errors: { field?: string; title: string }[] = []
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }

  get code() {
    return this.status_code;
  }

  get title() {
    return this.message;
  }
}
