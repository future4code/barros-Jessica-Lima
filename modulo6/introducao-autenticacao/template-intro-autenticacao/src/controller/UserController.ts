import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { EditUserInputDTO, LoginInputDTO, UserInputDTO } from "../model/user";
import { Authenticator } from "../services/Authenticator";

export class UserController {

  public signup = async (req: Request, res: Response) => {
    try {
      const { name, nickname, email, password } = req.body;

      const input: UserInputDTO = {
        name,
        nickname,
        email,
        password,
      };
      const userBusiness = new UserBusiness()
      const token = await userBusiness.signup(input);

      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: LoginInputDTO = {
        email,
        password,
      };
      const userBusiness = new UserBusiness()
      const token = await userBusiness.login(input);

      res.status(201).send({ token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public editUser = async (req: Request, res: Response) => {
    try {

      const input: EditUserInputDTO = {
        name: req.body.name,
        nickname: req.body.nickname,
        id: req.params.id
      };

      const userBusiness = new UserBusiness()
      userBusiness.editUser(input);

      res.status(201).send({ message: "Usuário alterado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getUserId = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string
      const authenticator = new Authenticator()

      const authorizationData = authenticator.getTokenData(token)

      const userDatabase = new UserDatabase()
      const user = await userDatabase.getUserById(authorizationData.id)

      res.status(200).send({ id: user.id, email: user.email, });

    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }




}
