import { CustomError } from "./CustomError";

export class InvalidTitle extends CustomError{
    constructor(){
        super(400, "Título inválido")
    }
}

export class InvalidDuration extends CustomError{
    constructor(){
        super(400, "Duração inválida (min 30min")
    }
}
