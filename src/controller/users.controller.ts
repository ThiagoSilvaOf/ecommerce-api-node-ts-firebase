import { Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";

export class UsersController {
  static async getAll(req: Request, res: Response) {
    const snapshot = await getFirestore().collection("users").get();
    const users = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    res.send(users);
  }

  static async getById(req: Request, res: Response) {
    let userId = req.params.id;
    const doc = await getFirestore().collection("users").doc(userId).get()
    let user = {id: doc.id, ...doc.data()}
    res.send(user);
  }

  static async save(req: Request, res: Response) {
    let user = req.body;
    await getFirestore().collection("users").add(user);

    res.send("Usuário Adicionado com Sucesso!");
  }

  static async update(req: Request, res: Response) {
    const userId = req.params.id;
    const { nome, email }: { nome?: string; email?: string } = req.body;

    await getFirestore().collection("users").doc(userId).set({nome, email})

    res.send("Usuário atualizado com sucesso!");
  }

  static async delete(req: Request, res: Response) {
    let userId = req.params.id;

    await getFirestore().collection("users").doc(userId).delete()

    res.send("Usuário Removido com Sucesso!");
  }
}
