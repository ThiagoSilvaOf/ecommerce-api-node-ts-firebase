import { EmailAlreadyExists } from "../errors/email-already-exists";
import { User } from "../models/user.model";
import { getAuth, UserRecord } from "firebase-admin/auth";

export class AuthService {
  create(user: User): Promise<UserRecord> {
    return getAuth().createUser({
      email: user.email,
      displayName: user.nome,
      password: user.password,
    }).catch(err => {
      if(err.code === "auth/email-already-exists"){
        throw new EmailAlreadyExists()
      }

      throw err;
    });
  }
}
