import { User } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
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

    } catch (err: any) {
      throw new Error(err.message)
    }
  }


}
