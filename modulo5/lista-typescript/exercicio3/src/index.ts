console.log("-- exercicio 3 --")

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme={
    nome: string,
    ano: number,
    genero: GENERO
    pontuacao?: number
}

const filme1: Filme={
    nome: "Harry Potter e a Câmara Secreta",
    ano: 2002,
    genero: GENERO.ACAO,
    pontuacao: 10
}

console.table(filme1)

console