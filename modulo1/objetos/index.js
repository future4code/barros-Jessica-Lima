// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Exercício 1:
/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
*/
// RESPOTA: Matheus Nachtergaele | Virginia Cavendish | Globo 14h
// OBS: rodei o código apenas no final para conferir se acertei

//------------------------------------------------------------------------------------

// Exercício 2:
/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
*/
//a) O que vai ser impresso no console? 
// Juca 3 SRD
// Juba 3 SRD
// Jubo 3 SRD

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Mantém os mesmos dados do outro objeto, podendo serem feitas alterações

//------------------------------------------------------------------------------------

// Exercício 3:
/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
*/
//a) O que vai ser impresso no console?
// false | undefined

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// False, Undefined (Backender = false no objeto e Undefined vem da altura que não foi citada no )

//------------------------------------------------------------------------------------

// Exercício 1:
// A ) 
/*
 const pessoa = {
     nome: "Amanda",
     apelido: ["Amandinha", " Mandinha", " Mandi"],
 }

 function objeto(nome, apelido){
     
    console.log(`Eu sou ${nome}, mas pode me chamar de: ${apelido}`)

 }
 objeto(pessoa.nome, pessoa.apelido)

 // B )
    const pessoa1 = {
     ...pessoa,
     apelido: ["Manda", " Man", " Dinha"]
 }

 objeto(pessoa1.nome, pessoa1.apelido)
*/

//------------------------------------------------------------------------------------

// Exercício 2:
// A )
/*
 const pessoaX ={
	 nome: "Jessie",
	 idade: 22,
	 profissao: "Membro da Equipe Rocket"
 }

 const pessoaY ={
	 nome: "James",
	 idade: 22,
	 profissao: "Membro da Equipe Rocket"
 }

 // B )
 function equipeRocket(nome, nomeCaracteres, idade, profissao, profissaoCaracteres) {
	let array = []
	array[0] = nome
	array[1] = nomeCaracteres
	array[2] = idade
	array[3] = profissao
	array[4] = profissaoCaracteres

	console.log(array)

 }
 equipeRocket(pessoaX.nome, pessoaX.nome.length, pessoaX.idade, pessoaX.profissao, pessoaX.profissao.length)
 equipeRocket(pessoaY.nome, pessoaY.nome.length, pessoaY.idade, pessoaY.profissao, pessoaY.profissao.length)
*/

//------------------------------------------------------------------------------------

// Exercício 3:
/*
let carrinho =[]

let fruta1 ={
	nome: "Morango",
	disponibilidade: true
}
let fruta2 ={
	nome: "Limão",
	disponibilidade: true
}
let fruta3 ={
	nome: "Abacate",
	disponibilidade: true
}

function frutas(adicionarFruta){
	carrinho.push(adicionarFruta)
}
frutas(fruta1)
frutas(fruta2)
frutas(fruta3)

console.log(carrinho)
*/

//------------------------------------------------------------------------------------
// DESAFIO

// Exercício 1:
/*
function pessoaA(nome, idade, profissao) {

	nome = prompt("Qual é o seu nome?")
	idade = Number(prompt("Quantos anos você tem?"))
	profissao = prompt("Qual é a sua profissão?")

	const objetoPessoa={
		nome: nome,
		idade: idade,
		profissao: profissao
	}
	console.log(objetoPessoa)
}
pessoaA()
*/

// Exercício 2:
/*
function filmes(){

	const filme1 ={
		nome: "Meninas Malvadas",
		anoLancamento: 2004
	}
	const filme2 ={
		nome: "Toy Story",
		anoLancamento: 1995
	}
	console.log(filme1.anoLancamento < filme2.anoLancamento)

}
filmes()
*/

// Exercício 3:

let carrinho =[]

let fruta1 ={
	nome: "Morango",
	disponibilidade: true
}
let fruta2 ={
	nome: "Limão",
	disponibilidade: true
}
let fruta3 ={
	nome: "Abacate",
	disponibilidade: true
}

function frutas(adicionarFruta){
	carrinho.push(adicionarFruta)
}
frutas(fruta1)
frutas(fruta2)
frutas(fruta3)

console.log(carrinho)

// desafio aqui

function controleEstoque(fruta){
	
	fruta.disponibilidade=!fruta.disponibilidade
}

console.log(fruta1.nome, fruta1.disponibilidade)
console.log(fruta2.nome, fruta2.disponibilidade)
console.log(fruta3.nome, fruta3.disponibilidade)

controleEstoque(fruta1)
controleEstoque(fruta2)
controleEstoque(fruta3)

console.log(fruta1.nome, fruta1.disponibilidade)
console.log(fruta2.nome, fruta2.disponibilidade)
console.log(fruta3.nome, fruta3.disponibilidade)