// exercício 1
/*
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
*/
// resposta: 10 | 10 | 5

//-----------------------------------------
// exercício 2
/*
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
*/
// resposta: 10 | 10 | 10

//-----------------------------------------
// exercício 3
/*
let horasDia = prompt("Quantas horas você trabalha por dia?")
let salarioDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioDia/horasDia} por hora`)
*/
//-----------------------------------------
// exercício escrita de código 1

//let nome
//let idade
//console.log(typeof nome, typeof idade)
// as variáveis são undefined pois não contém valor/atributo
/*
let nome = prompt("Qual é o seu nome?")
let idade = prompt("Quantos anos você tem?")
let idadeConv = Number(idade)
*/
//console.log(nome, idade)
//console.log(typeof nome, typeof idadeConv)

// o tipo da variavel nome é string, a variavel idade também, 
//porém foi convertida para number com a variavel idadeConv

//console.log("Olá", nome, "você tem", idadeConv, "anos")

//------------------------------------------------------
// exercício escrita de código 2
/*
let cafe = prompt("Você gosta de café?")
let chuva = prompt("Você gosta de tempo chuvoso?")
let pokemonGo = prompt("Você joga Pokemon GO?")

console.log("Você gosta de café?", cafe)
console.log("Você gosta de tempo chuvoso?", chuva)
console.log("Você joga Pokemon GO?", pokemonGo)
*/
//------------------------------------------------------
// exercício escrita de código 3
/*
let a = 10
let b = 25
let c 

c = a
a = b
b = c
 
console.log(a, b)
*/
//console.log("O novo valor de a é", a) // O novo valor de a é 25
//console.log("O novo valor de b é", b) // O novo valor de b é 10

//---------------------------------------------------------
// DESAFIO

let primeiroNumero = prompt ("Digite um número")
let segundoNumero = prompt ("Digite outro npumero")
let primeiroConv = Number(primeiroNumero)
let segundoConv = Number(segundoNumero)

//console.log(typeof primeiroConv, typeof segundoConv)
console.log("O primeiro número somado ao segundo resulta em:", primeiroConv + segundoConv)
console.log("O primeiro número multiplicado pelo segundo resulta em:", primeiroConv*segundoConv)