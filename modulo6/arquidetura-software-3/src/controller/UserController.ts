import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/UserDTO";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {

      const { email, name, password } = req.body

      const input: UserInputDTO = { 
        email,
        name, 
        password 
      };

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }


  // --------------- GET ALL USERS --------------------
  async getAllUsers(req: Request, res: Response):Promise<void> {
    try {
      const users = await new UserBusiness().getAllUsers()
      
      res.status(201).send({ message: users });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }
}
