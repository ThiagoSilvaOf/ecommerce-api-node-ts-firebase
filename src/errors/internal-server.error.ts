import { ErrorBase } from "./base.error";

export class InternalServerError extends ErrorBase {
  constructor() {
    super(500, "Erro Interno do Servidor");
  }
}
