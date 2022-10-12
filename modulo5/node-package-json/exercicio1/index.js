// EXERCICIO 1

// A- process.argv

// B -----------------------------------------------
/*
const nome=process.argv[2]
const idade=process.argv[3]


const dados =(nome, idade)=>{
    return `Olá, ${nome}! Você tem ${idade} anos.`
}
console.log(dados(nome, idade))
*/

// C -----------------------------------------------
const nome=Number(process.argv[2])
const idade=Number(process.argv[3])
const novaIdade = idade + 7


const dados =(nome, idade)=>{
    return `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`
}
console.log(dados(nome, idade))
