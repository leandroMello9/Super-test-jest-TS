
interface IUser {
  name: string,
  password: string,
  email: string
  createdAt?: string,
  updatedAt?: string
}
interface User {
  execute: (user: IUser) => Promise<IUser | void>;
}
export {User, IUser};
