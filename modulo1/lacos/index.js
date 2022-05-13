// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Exercício 1:

/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
*/

// O que o código está fazendo? Uma estrutura de laço que vai adicionar +1 a variável valor a cada rodada, até o índice ser = a 5 
// Qual o resultado impresso no console? 10 (soma dos números do índice em cada rodada)

//-------------------------------------------------------------------------------------------

// Exercício 2:
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
*/
// a) O que vai ser impresso no console? 19, 21, 23, 25, 27, 30 (imprime todos os números maiores que 18)

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, 
//o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

//-------------------------------------------------------------------------------------------

// Exercício 3:
/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0

while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
// Qual seria o resultado impresso no console, se o usuário digitasse o número 4? 
// *
// **
// ***
// ****
*/

//-------------------------------------------------------------------------------------------
// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// Exercício 1:
/*
let quantosAnimais = Number (prompt("Quantos animais de estimação você tem?"))
let nomesPets = []

if (quantosAnimais == 0){
    console.log("Que pena! Você pode adotar um pet")

} if (quantosAnimais > 0){
    for(let i = 0; i < quantosAnimais; i++){

        let nomes = prompt("Qual o nome do seu pet?")
        nomesPets += nomes + " "

    }
    console.log(nomesPets)
}
*/
//-------------------------------------------------------------------------------------------

// Exercício 2:
/*
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

    // a
    console.log("A) Array original")
    for (let i = 0; i < arrayOriginal.length; i++){
        console.log(arrayOriginal[i])
    }

    // b
    console.log("B) Array dividido por 10:")
    for (let i = 0; i < arrayOriginal.length; i++){
        console.log(arrayOriginal[i]/10)
    }
    // c
    console.log("C) Números pares:")
    for (let i = 0; i < 1; i++){
       
        if (arrayOriginal[i] % 2 == 0){
            console.log(arrayOriginal)
        }
    }
    // d
    console.log("D) Novo array strings:")
    for (let iNum = 0; iNum<arrayOriginal.length; iNum++){

        let arrayString = ""
        arrayString += arrayOriginal[iNum]
        let iString = ""
        iString += iNum
        console.log("O elemento do index", iString, "é", arrayString)
    }
    // e
    console.log("E) Maior e menor números do array:") // não sei como usar uma estrutura de loop nessa

    arrayOriginal.sort((a, b) => a - b)
    console.log("O maior número é", arrayOriginal.slice(-1), "e o menor é", arrayOriginal[0])
    
/*
//-------------------------------------------------------------------------------------------
// DESAFIO

// Exercício 1:
/*
    let numero1 = Number (prompt("Vamos jogar!"))
    let i = 0
    let qualNumero = numero1 - 1

    while(qualNumero != numero1){
     i++
     qualNumero = Number (prompt("Qual é o número?"))
     
     if(qualNumero > numero1){
         console.log("Errooooouou, é menor", "\n", "O número chutado foi", qualNumero)
     }
     if(qualNumero < numero1){
         console.log("Errooooooou, é maior", "\n", "O número chutado foi", qualNumero)
     }
     if (qualNumero === numero1) {
         console.log("Acertou!", "\n", "O número chutado foi:", qualNumero,"\n", "O número de tentativas foi:", i)
         qualNumero = numero1  
     }
}
          */

// Exercício 2:
/*
let numero1 = Math.floor(Math.random() * 100) // testar com numero menor

let i = 0
let qualNumero = numero1 - 1

while(qualNumero != numero1){
 i++
 qualNumero = Number (prompt("Qual é o número?"))
 
 if(qualNumero > numero1){
     console.log("Errooooouou, é menor", "\n", "O número chutado foi", qualNumero)
 }
 if(qualNumero < numero1){
     console.log("Errooooooou, é maior", "\n", "O número chutado foi", qualNumero)
 }
 if (qualNumero === numero1) {
     console.log("Acertou!", "\n", "O número chutado foi:", qualNumero,"\n", "O número de tentativas foi:", i)
     qualNumero = numero1  
 }
}
*/
// apenas alterei a variavel numero1 que antes tinha o prompt, agora ela tem o metodo floor e random que sorteia numeros