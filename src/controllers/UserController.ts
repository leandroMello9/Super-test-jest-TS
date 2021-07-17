import CreateUserService from "../service/User/CreateUserService";
import { Request, Response } from "express";

class UserController {
  public async store(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body;
      const createUserService = new CreateUserService();
      const user = await createUserService.execute({
        name,
        password,
        email,
      });
      return response.status(201).json(user);
    } catch (err) {
      return response.status(400).json({
        err: err,
      });
    }
  }
}

export default new  UserController();
