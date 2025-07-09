import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export class UsersController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    res.send(await userService.getAll());
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    let userId = req.params.id;
    res.send(await userService.getById(userId));
  }

  static async save(req: Request, res: Response, next: NextFunction) {
    let user = req.body;
    res.status(201).send(await userService.save(user, "Usuário Adicionado com Sucesso!"));
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    const userId = req.params.id;
    const { nome, email }: { nome: string; email: string } = req.body;
    res.send(await userService.update(userId, nome, email, "Usuário atualizado com sucesso!"))
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    let userId = req.params.id;
    await userService.delete(userId)
    res.status(204).end();
  }
}
