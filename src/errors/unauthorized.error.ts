import { ErrorBase } from "./base.error";

export class UnauthorizedError extends ErrorBase {
  constructor() {
    super(401, "Não Autorizado!");
  }
}
