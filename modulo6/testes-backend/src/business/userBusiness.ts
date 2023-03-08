import { UserRepository } from "./userRepository"

export class UserBusiness{
    constructor( 
        private userDatabase: UserRepository,
        ){}

    public getUserById = async(id:string) => {
        try{
            const user = await this.userDatabase.getUserById(id)
            return user
        }catch(error:any){
            throw new Error(error.message)
        }
    }
}