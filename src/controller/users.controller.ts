import { NextFunction, Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";
import { NotFoundError } from "../errors/not-found.error";

export class UsersController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    const snapshot = await getFirestore().collection("users").get();
    const users = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    res.send(users);
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    let userId = req.params.id;
    const doc = await getFirestore().collection("users").doc(userId).get();
    if (doc.exists) {
      let user = { id: doc.id, ...doc.data() };
      res.send(user);
    } else {
      throw new NotFoundError("Usuário Não Encontrado!");
    }
  }

  static async save(req: Request, res: Response, next: NextFunction) {
    let user = req.body;
    await getFirestore().collection("users").add(user);

    res.status(201).send("Usuário Adicionado com Sucesso!");
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    const userId = req.params.id;
    const { nome, email }: { nome?: string; email?: string } = req.body;
    const docRef = getFirestore().collection("users").doc(userId);

    if ((await docRef.get()).exists) {
      await docRef.set({ nome, email });
      res.send("Usuário atualizado com sucesso!");
    } else {
      throw new NotFoundError("Usuário Não Encontrado!");
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    let userId = req.params.id;

    await getFirestore().collection("users").doc(userId).delete();

    res.status(204).end();
  }
}
