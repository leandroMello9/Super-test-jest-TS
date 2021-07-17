import {IUser, User} from "./interface/IUser";
import { UserModel } from "../../models/User";
import bycript from "bcrypt";
class CreateUserService implements User {
  public async execute({
    password,
    email,
    name,
  }: IUser): Promise<IUser | void> {
    try {
      const bycriptPassword = bycript.hashSync(password, 8);
      const user = await UserModel.create({
        name,
        password: bycriptPassword,
        email,
      });
      return user;
    } catch (err) {
        throw Error(`Erro create User Service ${err} `)
    }
  }
}

export default CreateUserService;