// A) ----------------------------
/*
let minhaString: string
minhaString = "pompom"
minhaString = 2

// uma variavel de tipo string não pode receber um número
*/
// B) ----------------------------
/*
let meuNumero: number | string
meuNumero = 10
meuNumero = "pompom"

// usa-se o | que simboliza "ou"
*/
// C / D) ----------------------------
enum CoresArcoIris{
    VERMELHO="vermelho",
    LARANJA="laranja",
    AMARELO="amarelo",
    VERDE="verde",
    AZUL="azul",
    ANIL="anil",
    VIOLETA="violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CoresArcoIris
}

const pessoa1 : Pessoa={
    nome: "pompom",
    idade: 2,
    corFavorita: CoresArcoIris.VERDE
}
const pessoa2 : Pessoa={
    nome: "lilo",
    idade: 4,
    corFavorita: CoresArcoIris.AZUL
}
const pessoa3 : Pessoa={
    nome: "juli",
    idade: 6,
    corFavorita: CoresArcoIris.AMARELO
}

console.table(pessoa1)