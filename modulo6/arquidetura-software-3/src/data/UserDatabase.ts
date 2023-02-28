import { CustomError } from "../error/CustomError";
import { User } from "../model/User"
import { InsertUserInputDTO } from "../model/UserDTO";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create(user: InsertUserInputDTO): Promise<void> {
    await UserDatabase.connection
      .insert(user)
      .into(UserDatabase.TABLE_NAME);
  }

  // --------------- GET ALL USERS --------------------
  getAllUsers = async () => {
    try {
      const users: User[] = []

      const result = await BaseDatabase.connection()
        .select('*')
        .from('LABEFLIX_USER')

      for (let user of result) {
        users.push(user);
      }

      return users

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  }


}
