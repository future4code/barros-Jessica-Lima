import { CustomError } from "./CustomError";

export class InvalidName extends CustomError{
    constructor(){
        super(400, "Nome inválido")
    }
}

export class InvalidEmail extends CustomError{
    constructor(){
        super(400, "Email inválido")
    }
}

export class InvalidPasword extends CustomError{
    constructor(){
        super(400, "Senha precisa ter no mínimo 8 catacteres")
    }
}