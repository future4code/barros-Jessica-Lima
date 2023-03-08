import { UserRepository } from "../../src/business/userRepository";
import { userMock } from "./mock";

export class UserDatabaseMock implements UserRepository{
    getUserById(id: string){
        return id === "id" ? userMock : undefined
    }
}