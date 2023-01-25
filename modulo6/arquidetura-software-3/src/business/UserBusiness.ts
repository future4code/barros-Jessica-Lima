import { UserDatabase } from "../data/UserDatabase"
import { InvalidEmail, InvalidName, InvalidPasword } from "../error/UserError"
import { UserInputDTO } from "../model/UserDTO"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
  async create(input: UserInputDTO): Promise<void> {

    const { name, email, password } = input

    // erros ----------------------------
    if (!name) { throw new InvalidName() }
    //if (!email.includes("@")) { throw new InvalidEmail() }
    if (password.length < 8) { throw new InvalidPasword() }

    const id = IdGenerator()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  // --------------- GET ALL USERS --------------------
  getAllUsers = async () => {
    const userDatabase = new UserDatabase()
    return await userDatabase.getAllUsers()
  }

}
