import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness";
const userBusiness = new UserBusiness()

export class UserController {

    public getUserById = async(req: Request, res: Response)=> {
        try{
            const id = req.params.id
            const user = await userBusiness.getUserById(id)

            res.status(200).send({ user })

        }catch(error:any){
            throw new Error(error.message)
        }
    }
}