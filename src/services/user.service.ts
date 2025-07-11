import { NotFoundError } from "../errors/not-found.error";
import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";

const userRepository = new UserRepository();

export class UserService {
  async getAll(): Promise<User[]> {
    return userRepository.getAll();
  }

  async getById(id: string): Promise<User | null> {
    const user = await userRepository.getById(id);
    if (!user) {
      throw new NotFoundError("Usuário Não Encontrado!");
    }

    return user;
  }

  async save(user: any, mensagem: string) {
    return userRepository.save(user, mensagem);
  }

  async update(id: string, nome: string, email: string, mensagem: string) {
    const user = await userRepository.update(id, nome, email, mensagem);

    if (!user) {
      throw new NotFoundError("Usuário Não Encontrado!");
    }

    return user;
  }

  async delete(id: string) {
    return userRepository.delete(id);
  }
}
