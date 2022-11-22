console.log("-- exercicio 1 --")

const nome: string = "julia"
const dataNasc: string = "09/07/2017"

const arrData = dataNasc.split('/')

function Pessoa(nome: string, arrData:string[]) {
    return `Olá me chamo ${nome}, nasci no dia ${arrData[0]} do mês de ${arrData[1]} do ano de ${arrData[2]}`
}
console.log(Pessoa(nome, arrData))