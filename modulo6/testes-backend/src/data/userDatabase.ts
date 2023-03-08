import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    
    public getUserById = async(id:string)=> {
        try{
            const result = await UserDatabase.connection
            .select("*")
            .from("User_Arq")
            .where({ id });
       
          return result[0];

         }catch(error:any){
            throw new Error(error.message)
        }
    }
}