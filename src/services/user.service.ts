import { NotFoundError } from "../errors/not-found.error";
import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";
import { AuthService } from "./auth.service";

const userRepository = new UserRepository();
const authService = new AuthService();

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

  async save(user: User, mensagem: string) {
    const userAuth = await authService.create(user);
    user.id = userAuth.uid
    return userRepository.save(user, mensagem);
  }

  async update(user:User, mensagem: string) {
    const _user = await userRepository.update(user, mensagem);

    if (!_user) {
      throw new NotFoundError("Usuário Não Encontrado!");
    }

    return _user;
  }

  async delete(id: string) {
    return userRepository.delete(id);
  }
}
