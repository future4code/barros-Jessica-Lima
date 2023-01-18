import { user, users } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    // ------------------- CRIAR USUÁRIO --------------------
    insertUser = async (user: user): Promise<void> => {

        try {
            await BaseDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into('User_Arq')

        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    // ------------------- BISCAR USUÁRIOS --------------------
    getUser = async () => {
        try {
            const users: user[] = []

            const result = await BaseDatabase.connection()
                .select('*')
                .from('User_Arq')

            for (let user of result) {
                users.push(user);
            }

            return users;

        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    // ------------------- DELETE USUÁRIOS --------------------
    deleteUser = async (id:string) => {
        try {
            
            await BaseDatabase.connection()
                .where({id})
                .from('User_Arq')
                .delete()

        } catch (err: any) {
            throw new Error(err.message)
        }
    }
}