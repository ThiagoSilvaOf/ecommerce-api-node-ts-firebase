import { getFirestore } from "firebase-admin/firestore";
import { User } from "../models/user.model";

export class UserRepository {
  async getAll(): Promise<User[]> {
    const snapshot = await getFirestore().collection("users").get();
    return snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    }) as User[];
  }

  async getById(id: string): Promise<User | null> {
    const doc = await getFirestore().collection("users").doc(id).get();
    if (doc.exists) {
      return { id: doc.id, ...doc.data() } as User;
    } else {
      return null
    }
  }

  async save(user: any, mensagem: string) {
    await getFirestore().collection("users").add(user);
    return { message: mensagem };
  }

  async update(id: string, nome: string, email: string, mensagem: string) {
    const docRef = getFirestore().collection("users").doc(id);

    if ((await docRef.get()).exists) {
      await docRef.set({ nome, email });
      return { message: mensagem };
    } else {
      return null
    }
  }

  async delete(id: string) {
    await getFirestore().collection("users").doc(id).delete();
  }
}
