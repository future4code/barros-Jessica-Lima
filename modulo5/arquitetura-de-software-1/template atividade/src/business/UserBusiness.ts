import { UserDatabase } from "../data/UserDatabase"

export class UserBusiness {

    // ------------------- CRIAR USUÁRIO --------------------
    createUser = async (input: any): Promise<void> => {

        try {
            const { name, email, password } = input

            if (!name || !email || !password) {
                throw new Error('Body inválido!')
            }

            const id: string = Date.now().toString()
            const userDatabase = new UserDatabase()

            await userDatabase.insertUser({
                id,
                name,
                email,
                password
            })

        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    // ------------------- BUSCAR USUÁRIOS --------------------
    getUsers = async () => {

        const userDatabase = new UserDatabase()
        return await userDatabase.getUser()
    }

    // ------------------- DELETAR USUÁRIOS --------------------
    delUsers = async (id:string) => {

        if(!id){
            throw new Error("Insira um id!")
        }

        const userDatabase = new UserDatabase()
        return await userDatabase.deleteUser(id)
    }
}


