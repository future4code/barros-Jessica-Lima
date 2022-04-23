// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------
/*
// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}
*/
// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01 
/*
function calculaAreaRetangulo(altura, largura) {
  
  altura = Number(prompt("Digite a altura:"))
  largura = Number(prompt("Digite a largura:"))

  console.log(altura * largura)
}
calculaAreaRetangulo
*/

// EXERCÍCIO 02
/*
function imprimeIdade(anoAtual, anoNascimento) {
  anoAtual = Number(prompt("Digite o ano atual:"))
  anoNascimento = Number (prompt("Digite o ano de nascimento:"))

  console.log(anoAtual - anoNascimento)
}
imprimeIdade
*/

// EXERCÍCIO 03
/*
let peso = Number(prompt("Digite o seu peso"))
let altura = Number (prompt("Digite a sua altura:"))

function calculaIMC(peso, altura, ) {  
  
  return peso / (altura*altura)
}
calculaIMC
*/

// EXERCÍCIO 04
/*
function imprimeInformacoesUsuario(nome, idade, email) {
  nome = prompt("Qual é o seu nome?")
  idade = prompt("Quantos anos você tem?")
  email = prompt("Digite o seu e-maiil:")

  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
}
imprimeInformacoesUsuario
*/

// EXERCÍCIO 05
/*
function imprimeTresCoresFavoritas() {
  let cores=[]
  cores[0] = prompt ("Digite sua cor favoritas:")
  cores[1] = prompt ("Digite sua cor favoritas:")
  cores[2] = prompt ("Digite sua cor favoritas:")

  console.log(cores) 
}
*/

// EXERCÍCIO 06
/*
string = prompt("Digite uma palavra:")

function retornaStringEmMaiuscula(string) {

  return string.toLocaleUpperCase()
}  
retornaStringEmMaiuscula
*/

// EXERCÍCIO 07
/*
let custo = Number (prompt("custo:"))
let valorIngresso = Number (prompt("valor de cada ingresso:"))

function calculaIngressosEspetaculo(custo, valorIngresso) {

  return custo/valorIngresso
}
calculaIngressosEspetaculo()
*/
// EXERCÍCIO 08
/*
let string1 = prompt("Digite uma palavra")
let string2 = prompt("Digite uma palavra:")

function checaStringsMesmoTamanho(string1, string2) {

    return string1.length === string2.length
}
checaStringsMesmoTamanho
*/
// EXERCÍCIO 09
/*
  let array =[]
  array[0] = prompt("Digite uma palavra")
  array[1] = prompt("Digite uma palavra")
  array[2] = prompt("Digite uma palavra")

function retornaPrimeiroElemento(array) {
  
  return array[0] 
}
retornaPrimeiroElemento
*/

// EXERCÍCIO 10
/*
let arrayA = []
arrayA[0] = prompt("elemento 1:")
arrayA[1] = prompt("elemento 2:")
arrayA[2] = prompt("elemento 3:")
arrayA[3] = prompt("elemento 4:")
arrayA[4] = prompt("elemento 5:")
*/
/*
function retornaUltimoElemento(arrayA) {

  return arrayA[arrayA.length - 1]

}
retornaUltimoElemento
*/

// EXERCÍCIO 11
/*
let arrayTroca = []
arrayTroca[0] = prompt("Elemento 1:")
arrayTroca[1] = prompt("Elemento 2:")
arrayTroca[2] = prompt("Elemento 3:")
arrayTroca[3] = prompt("Elemento 4:")
arrayTroca[4] = prompt("Elemento 5:")

function trocaPrimeiroEUltimo(arrayTroca) {

  let um = arrayTroca[0]
  let fim = arrayTroca[arrayTroca.length-1]

  arrayTroca[0] = fim
  arrayTroca[arrayTroca.length-1] = um

  return arrayTroca 
}
trocaPrimeiroEUltimo
*/

// EXERCÍCIO 12
/*
let stringY = prompt("Digite uma palavra")
let stringX = prompt("Digite outra palavra")

function checaIgualdadeDesconsiderandoCase(stringY, stringX) {
  
  return stringY === stringX
}
checaIgualdadeDesconsiderandoCase()
*/
// EXERCÍCIO 13
/*
- Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos 
(se for exatamente 5 anos, deve ser renovada).

- Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos 
(se for exatamente 10 anos, deve ser renovada).

- Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos */
/*
  let anoAtual = Number (prompt("Digite o ano atual:"))
  let anoNascimento = Number (prompt("Digite o seu ano de nascimento:"))
  let anoIdentidade = Number (prompt("Digite o ano em que sua carteita de identidade foi emitida"))
  let idade = anoAtual - anoNascimento

function checaRenovacaoRG(anoAtual, anoNascimento, anoIdentidade, idade) {
  
  //const renovar20 = 5
  //const renovar2050 = 10
  //const renovar50 = 15

  return (idade <= 20) && ((anoIdentidade+5) <= anoAtual) || (idade > 20 && idade <= 50) && ((anoIdentidade+10) <= anoAtual) || (idade > 50) && ((anoIdentidade+15) <= anoAtual)
  //console.log((idade <= 20) && ((anoIdentidade+5) <= anoAtual))
  //let exemplo1 = (idade <= 20) && ((anoIdentidade+5) <= anoAtual)
  //console.log(exemplo1)  

  //return (idade > 20 && idade <= 50) && ((anoIdentidade+10) <= anoAtual)
  //console.log((idade > 20 && idade <= 50) && ((anoIdentidade+10) <= anoAtual))
  //let exemplo2 = (idade > 20 && idade <= 50) && ((anoIdentidade+10) <= anoAtual)
  //console.log (exemplo2)

  //return (idade > 50) && ((anoIdentidade+15) <= anoAtual)
  //console.log((idade > 50) && ((anoIdentidade+15) <= anoAtual))
  //let exemplo3 = (idade > 50) && ((anoIdentidade+15) <= anoAtual)
  //console.log(exemplo3)
}
checaRenovacaoRG
*/
// EXERCÍCIO 14
// **São bissextos** todos os anos múltiplos de 400**.**
// **São bissextos** todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400**.**
// **Não são bissextos** todos os demais anos.
/*
let ano = Number (prompt("Digite um ano:"))

function checaAnoBissexto(ano) {
  
  return ((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0)
}
checaAnoBissexto

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let idade = prompt("Você possui mais de 18 anos?")
  let ensinoM = prompt("Você possui ensino médio completo?")
  let disponibilidade = prompt ("Você possui disponibilidade exclusiva durante o curso?")

  let incricao = (idade === "sim") && (ensinoM === "sim") && (disponibilidade == "sim")
  console.log(incricao)
}
*/