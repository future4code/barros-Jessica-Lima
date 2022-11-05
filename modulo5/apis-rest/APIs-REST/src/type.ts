export type  Usuarios={
    id: number,
    name: string,
    email: string,
    type: TIPO,
    age: number
}

export enum TIPO{
    ADMIN= "ADMIN",
    NORMAL= 'NORMAL'
}