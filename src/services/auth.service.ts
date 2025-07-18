import { FirebaseError } from "firebase/app";
import { EmailAlreadyExists } from "../errors/email-already-exists";
import { UnauthorizedError } from "../errors/unauthorized.error";
import { User } from "../models/user.model";
import { FirebaseAuthError, getAuth, UserRecord } from "firebase-admin/auth";
import { getAuth as getFirebaseAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";

export class AuthService {
  async create(user: User): Promise<UserRecord> {
    try {
      return await getAuth().createUser({
        email: user.email,
        displayName: user.nome,
        password: user.password,
      });
    } catch (err) {
      if (err instanceof FirebaseAuthError && err.code === "auth/email-already-exists") {
        throw new EmailAlreadyExists();
      }

      throw err;
    }
  }

  async login(email:string, password:string): Promise<UserCredential>{
    return signInWithEmailAndPassword(getFirebaseAuth(), email, password)
    .catch(err => {
      if(err instanceof FirebaseError && err.code === "auth/invalid-credential" ){
        throw new UnauthorizedError()
      }

      throw err;
    })
  }
}
