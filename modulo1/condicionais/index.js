// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//Exercício 1:
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/ 

// 0BS: o código foi rodado apenas no final para conferir

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// O teste verifica se o resto da divisão por 2 é 0 e mostra 
//"Passou no teste", se não mostra "Não passou no teste"

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Imprime "Passou no teste" para os números que o resto da divisão por 2 for 0

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Imprime "Não passou no teste" para números que o resto da divisão por 2 não é 0 (não exata)

//----------------------------------------------------------------------------------------------

//Exercício 2:
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/

//  a) Para que serve o código acima?
//  Para mostrar o preço da fruta que o usuario escolher

//  b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//  O preço da fruta Maçã é R$ 2.25

//  c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem 
//  impressa no console se retirássemos o `break` que está logo acima do `default` 
//  (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//  O preço da fruta  Pêra  é  R$  5
//  O break é a pausa da condição, retirando ele o código segue rodando 

//----------------------------------------------------------------------------------------------

//Exercício 3:
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
*/
// a) O que a primeira linha está fazendo?
// Perguntando um número ao usuário e armazenando na variável numero já convertendo para number 

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// 10 - Esse número passou no teste, -10 - nada

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Haverá um erro, a variavel mensagem está declarada dentro do if e sendo impressa fora dele,
// para isso funcionar a variavel precisaria ser criada em escopo global

//----------------------------------------------------------------------------------------------
// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//Exercício 1:

/*
let idade = Number(prompt("Digite a idade"))

if (idade >= 18){
  console.log("Você pode dirigir")
}else{
  console.log("Você não pode dirigir")
}
*/

//----------------------------------------------------------------------------------------------

//Exercício 2:
/*
let turno = prompt("Qual o seu turno de estudo?").toLocaleUpperCase()

if (turno == "M"){
  console.log("Bom dia!")
} if (turno == "V"){
  console.log("Boa tarde")
}if (turno == "N"){
  console.log("Boa noite")
}
*/
//----------------------------------------------------------------------------------------------

//Exercício 3:
/*
let turno = prompt("Qual o seu turno de estudo?").toLocaleUpperCase()

  switch (turno){
    case "M":
      console.log("Bom dia!")
    break;
    case "V":
      console.log("Boa tarde!")
    break
    case "N":
      console.log("Boa noite!")
    break
  }
  */

//----------------------------------------------------------------------------------------------

//Exercício 4:
/*
let genero = prompt("Digite o gênero do filme:").toLocaleLowerCase()
let valor = Number(prompt("Valor do ingresso"))

if (genero === "fantasia" && valor <= 15){
  console.log("Bom filme!")
}else{
  console.log("Escolha outro filme :(")
}
*/

//----------------------------------------------------------------------------------------------
//DESAFIO

// Exercício 1:
/*
let genero = prompt("Digite o gênero do filme:").toLocaleLowerCase()
let valor = Number(prompt("Valor do ingresso"))

if (genero === "fantasia" && valor <= 15){
  let pipoca = prompt("Qual sabor de pipoca você vai escolher?")
  console.log("Bom filme!", "e aproveite a sua pipoca de", pipoca)
}else{
  console.log("Escolha outro filme :(")
}
*/

// Exercício 2:
/*
let nome = prompt("Digite o nome completo")
let tipoDeJogo = prompt("Qual o tipo de jogo: IN (internacional) ou DO (domestico)?")
let etapaDeJogo = prompt("Qual a etapa de jogo: SF (semi-final), DT (terceiro lugar) ou FI (final)?").toLocaleUpperCase()
let categoria = Number(prompt("Qual categoria: 1, 2, 3 ou 4"))
let quantidadeIngressos = Number(prompt("Quantos ingressos?"))

// ingressos semifinais
const sf1 = 1.320
const sf2 = 880
const sf3 = 550
const sf4 = 220
  
  if (etapaDeJogo == "SF" && categoria == 1){

    console.log("--------- Dados da compra ---------")
    console.log("Nome do cliente:", nome)
    console.log("Tipo de jogo:", tipoDeJogo)
    console.log("Etapa de jogo:", etapaDeJogo)
    console.log("Categoria:", categoria)
    console.log("------------- Valores--------------")
    console.log("Valor do ingresso:", sf1)
    console.log("Valor total:", quantidadeIngressos * sf1)

  }if (etapaDeJogo == "SF" && categoria == 2){

    console.log("--------- Dados da compra ---------")
    console.log("Nome do cliente:", nome)
    console.log("Tipo de jogo:", tipoDeJogo)
    console.log("Etapa de jogo:", etapaDeJogo)
    console.log("Categoria:", categoria)
    console.log("------------- Valores--------------")
    console.log("Valor do ingresso:", sf2)
    console.log("Valor total:", quantidadeIngressos * sf2)

  }if (etapaDeJogo == "SF" && categoria == 3){

    console.log("--------- Dados da compra ---------")
    console.log("Nome do cliente:", nome)
    console.log("Tipo de jogo:", tipoDeJogo)
    console.log("Etapa de jogo:", etapaDeJogo)
    console.log("Categoria:", categoria)
    console.log("------------- Valores--------------")
    console.log("Valor do ingresso:", sf3)
    console.log("Valor total:", quantidadeIngressos * sf3)

  } if (etapaDeJogo == "SF" && categoria == 4){

    console.log("--------- Dados da compra ---------")
    console.log("Nome do cliente:", nome)
    console.log("Tipo de jogo:", tipoDeJogo)
    console.log("Etapa de jogo:", etapaDeJogo)
    console.log("Categoria:", categoria)
    console.log("------------- Valores--------------")
    console.log("Valor do ingresso:", sf4)
    console.log("Valor total:", quantidadeIngressos * sf4)
  }

// ingressos terceiro lugar
const dt1 = 660
const dt2 = 440
const dt3 = 330
const dt4 = 170

  if (etapaDeJogo == "DT" && categoria == 1){

    console.log("--------- Dados da compra ---------")
    console.log("Nome do cliente:", nome)
    console.log("Tipo de jogo:", tipoDeJogo)
    console.log("Etapa de jogo:", etapaDeJogo)
    console.log("Categoria:", categoria)
    console.log("------------- Valores--------------")
    console.log("Valor do ingresso:", dt1)
    console.log("Valor total:", quantidadeIngressos * dt1)

  } if (etapaDeJogo == "DT" && categoria == 2){

    console.log("--------- Dados da compra ---------")
    console.log("Nome do cliente:", nome)
    console.log("Tipo de jogo:", tipoDeJogo)
    console.log("Etapa de jogo:", etapaDeJogo)
    console.log("Categoria:", categoria)
    console.log("------------- Valores--------------")
    console.log("Valor do ingresso:", dt2)
    console.log("Valor total:", quantidadeIngressos * dt2)

  } if (etapaDeJogo == "DT" && categoria == 3){

    console.log("--------- Dados da compra ---------")
    console.log("Nome do cliente:", nome)
    console.log("Tipo de jogo:", tipoDeJogo)
    console.log("Etapa de jogo:", etapaDeJogo)
    console.log("Categoria:", categoria)
    console.log("------------- Valores--------------")
    console.log("Valor do ingresso:", dt3)
    console.log("Valor total:", quantidadeIngressos * dt3)

  } if (etapaDeJogo == "DT" && categoria == 4){

    console.log("--------- Dados da compra ---------")
    console.log("Nome do cliente:", nome)
    console.log("Tipo de jogo:", tipoDeJogo)
    console.log("Etapa de jogo:", etapaDeJogo)
    console.log("Categoria:", categoria)
    console.log("------------- Valores--------------")
    console.log("Valor do ingresso:", dt4)
    console.log("Valor total:", quantidadeIngressos * dt4)
  }

// ingressos final
const fi1 = 1980
const fi2 = 1320
const fi3 = 880
const fi4 = 330

  if (etapaDeJogo == "FI" && categoria ==1){
    
    console.log("--------- Dados da compra ---------")
    console.log("Nome do cliente:", nome)
    console.log("Tipo de jogo:", tipoDeJogo)
    console.log("Etapa de jogo:", etapaDeJogo)
    console.log("Categoria:", categoria)
    console.log("------------- Valores--------------")
    console.log("Valor do ingresso:", fi1)
    console.log("Valor total:", quantidadeIngressos * fi1)

  } if (etapaDeJogo == "FI" && categoria == 2){

    console.log("--------- Dados da compra ---------")
    console.log("Nome do cliente:", nome)
    console.log("Tipo de jogo:", tipoDeJogo)
    console.log("Etapa de jogo:", etapaDeJogo)
    console.log("Categoria:", categoria)
    console.log("------------- Valores--------------")
    console.log("Valor do ingresso:", fi2)
    console.log("Valor total:", quantidadeIngressos * fi2)

  }if (etapaDeJogo == "FI" && categoria == 3){

    console.log("--------- Dados da compra ---------")
    console.log("Nome do cliente:", nome)
    console.log("Tipo de jogo:", tipoDeJogo)
    console.log("Etapa de jogo:", etapaDeJogo)
    console.log("Categoria:", categoria)
    console.log("------------- Valores--------------")
    console.log("Valor do ingresso:", fi3)
    console.log("Valor total:", quantidadeIngressos * fi3)

  } if (etapaDeJogo == "FI" && categoria == 4){

    console.log("--------- Dados da compra ---------")
    console.log("Nome do cliente:", nome)
    console.log("Tipo de jogo:", tipoDeJogo)
    console.log("Etapa de jogo:", etapaDeJogo)
    console.log("Categoria:", categoria)
    console.log("------------- Valores--------------")
    console.log("Valor do ingresso:", fi4)
    console.log("Valor total:", quantidadeIngressos * fi4)
  }
  */