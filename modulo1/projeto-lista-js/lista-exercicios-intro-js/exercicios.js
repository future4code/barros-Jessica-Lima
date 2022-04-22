// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

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

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  
  let altura = Number(prompt("Digite a altura:"))
  let largura = Number(prompt("Digite a largura:"))

  console.log("A área do retângulo é:", altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Digite o ano atual:"))
  let anoNascimento = Number (prompt("Digite o ano de nascimento:"))

  console.log("A sua idade é:", anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  peso = Number (prompt("Digite o seu peso"))
  altura = Number (prompt("Digite a sua altura:"))
  let imc = peso / (altura * altura)

  console.log("O seu IMC é:", imc)  // era pra aparecer o pop up nesse?
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual é o seu nome?")
  let idade = prompt("Quantos anos você tem?")
  let email = prompt("Digite o seu e-maiil:")

  console.log("Meu nome é", nome, ", tenho", idade, "anos", ", e o meu e-mail é", email)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cores=[]
  cores[0] = prompt ("Digite sua cor favoritas:")
  cores[1] = prompt ("Digite sua cor favoritas:")
  cores[2] = prompt ("Digite sua cor favoritas:")

  console.log(cores) 
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string = prompt("Digite uma palavra:")

  console.log(string.toUpperCase())
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  custo = prompt("Digite o valor do espetáculo:")
  valorIngresso = prompt("Digite o valor do ingresso:")

  console.log( custo/valorIngresso, " ingressos precisam ser vendidos")
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    string1 = "cafe"
    string2 = "cafe"

    let tamanho = (string1 === string2)
    console.log(tamanho)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  array = ["Laranja", "Banana", "Maçã"]

  console.log(array[0])
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  array = ["Laranja", "Banana", "Maçã"]
  console.log(array[array.length - 1])

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  array = ["café", "chocolate", "batata", "morango"]

  array.push(array.splice(0, 1, 2, 3)[0])
  array.unshift(2)[0]

  console.log(array) //NÃO TA CERTO ESSEEEEEEEEEEEEEEEEEEEEEE
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string1 = prompt("Digite uma palavra")
  string2 = prompt("Digite outra palavra")
  
  let comparacao = (string1 === string2)
  console.log(comparacao)  

}

// EXERCÍCIO 13
/*
- Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos 
(se for exatamente 5 anos, deve ser renovada).

- Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos 
(se for exatamente 10 anos, deve ser renovada).

- Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos */

function checaRenovacaoRG() {
  let anoAtual = Number (prompt("Digite o ano atual:"))
  let anoNascimento = Number (prompt("Digite o seu ano de nascimento:"))
  let anoIdentidade = Number (prompt("Digite o ano em que sua carteita de identidade foi emitida"))
  const renovar20 = 5
  const renovar2050 = 10
  const renovar50 = 15

  let idade = anoAtual - anoNascimento

  let exemplo1 = (idade <= 20) && ((anoIdentidade+renovar20) <= anoAtual)
  console.log(exemplo1)  

  let exemplo2 = (idade > 20 && idade <= 50) && ((anoIdentidade+renovar2050) <= anoAtual)
  console.log (exemplo2)

  let exemplo3 = (idade > 50) && ((anoIdentidade+renovar50) <= anoAtual)
  console.log(exemplo3)
}

// EXERCÍCIO 14
// **São bissextos** todos os anos múltiplos de 400**.**
// **São bissextos** todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400**.**
// **Não são bissextos** todos os demais anos.

function checaAnoBissexto(ano) {
  ano = Number (prompt("Digite um ano:"))

  let anoBi= ((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0) 
  console.log(anoBi)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let idade = prompt("Você possui mais de 18 anos?")
  let ensinoM = prompt("Você possui ensino médio completo?")
  let disponibilidade = prompt ("Você possui disponibilidade exclusiva durante o curso?")

  let incricao = (idade === "sim") && (ensinoM === "sim") && (disponibilidade == "sim")
  console.log(incricao)
}