import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {

    // ------------------- CRIAR USUÁRIO --------------------
    createUser = async (req: Request, res: Response): Promise<void> => {

        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)

            res.status(201).send({ message: "Usuário criado!" })

        } catch (err: any) {
            res.status(400).send(err.message)
        }
    }


    // ------------------- BUSCAR USUÁRIOS --------------------
    getAllUser = async (req: Request, res: Response): Promise<void> => {

        try {

            const users = await new UserBusiness().getUsers()
            res.status(201).send(users)

        } catch (err: any) {
            res.status(400).send(err.message)
        }
    }

    // ------------------- DELETAR USUÁRIO --------------------
    deleteUser = async (req: Request, res: Response): Promise<void> => {

        try {

           const id = req.params.id

           await new UserBusiness().delUsers(id)

            res.status(201).send('Usuário deletado com sucesso!')

        } catch (err: any) {
            res.status(400).send(err.message)
        }
    }

}