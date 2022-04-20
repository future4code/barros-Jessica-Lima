
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Exercício 1: indique mensagens impressas
/*let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. , null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. , 11

let i = 0
console.log('d. ', array[i]) // d. , 3

array[i+1] = 19
console.log('e. ', array) //  e. , [3, 4, 5, 6 ,7,8,9,10,11,12,13,19]

const valor = array[i+6]
console.log('f. ', valor) // f. , 9 */

//OBS: rodei o código apenas no final para verificar o que acertei

//---------------------------------------------------------------------------------------------------

// Exercício 2: indique mensagens impressas

// Qual será o valor impresso no console se a entrada do 
// usuário for: "Subi num ônibus em Marrocos"? 

/*
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
*/

// SUBI NUM ÔNIBUS EM MIRROCOS + 27
// .toUpperCase() deixa os caracteres em maiúsculo
// .replaceAll() substitui uma letra/palavra por outra
// .length conta o tamanho da variável

//OBS: rodei o código apenas no final para verificar o que acertei

//---------------------------------------------------------------------------------------------------

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// Exercício 1:
/*
let nomeDoUsuario = prompt("Digite o seu nome:")
let emailDoUsuario = prompt("Digite o seu e-mail:")

console.log("O e-mail", emailDoUsuario, "foi cadastrado com sucesso. Seja bem-vindo(a),", nomeDoUsuario, "!")
*/
//---------------------------------------------------------------------------------------------------

// Exercício 2:

/*
let array = ["Subway", "Macarrão", "Morango", "Nescau", "Brigadeiro"]
console.log(array)

console.log("Essas são minhas comidas preferidas:", array[0], "\n", array[1], "\n", array[2], "\n", array[3], "\n", array[4])

let comidaUsuario = prompt("Qual é a sua comida preferida?")
let novoArray = []
array.splice(1,1)
array.splice(1,0, comidaUsuario)

console.log(array)
*/

//---------------------------------------------------------------------------------------------------

// Exercício 3:
/*
let listaDeTarefas=[]

listaDeTarefas[0] = prompt("Tarefa 1:")
listaDeTarefas[1] = prompt("Tarefa 2:")
listaDeTarefas[2] = prompt("Tarefa 3:")

console.log(listaDeTarefas)
let tarefaOk = Number (prompt ("Qual tarefa você já realizou?: 0, 1 ,2"))

listaDeTarefas.splice(tarefaOk, 1)
console.log(listaDeTarefas)
*/
//---------------------------------------------------------------------------------------------------

// DESAFIO

// Exercício 1:
//Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
/*
let arrayFrase = []
let frase = prompt("Digite uma frase:")

arrayFrase = frase.split(" ")
console.log(arrayFrase)
*/

//---------------------------------------------------------------------------------------------------

// Exercício 2: encontrar o indice da posição do abacaxi
/*
let arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

let posicaoAbacaxi = arrayFrutas.indexOf('Abacaxi')
console.log(posicaoAbacaxi)
*/


