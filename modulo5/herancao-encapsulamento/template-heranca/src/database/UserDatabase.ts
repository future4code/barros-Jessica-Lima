import { Knex } from "knex";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

    constructor (connection:Knex) {
        super(connection);
    
    }

    public getAllUsers=async()=>{
        const result = await this.connection("TABLE_USERS").select()
        return result;
    }

    public createUser(){

    }

    public getUserById(){

    }

}