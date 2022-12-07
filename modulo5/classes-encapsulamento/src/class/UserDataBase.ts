import { Knex } from "knex";
import { UserClass } from "./UserClass";

export class UserDataBase{
    constructor(private connection:Knex){
        this.connection=connection;
    }

    public insertUser=async(newUser:UserClass)=>{
        await this.connection("Labe_Users").insert(newUser)
    }
    public getUser=async()=>{
        const result = await this.connection("Labe_Users").select()
        return result
    }
}