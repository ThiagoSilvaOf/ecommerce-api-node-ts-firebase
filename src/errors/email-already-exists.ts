import { ErrorBase } from "./base.error";

export class EmailAlreadyExists extends ErrorBase{
  constructor(){
    super(409, "O e-mail informado já está em uso por outra conta!")
  }
}