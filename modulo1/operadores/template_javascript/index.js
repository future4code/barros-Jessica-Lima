// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//-----------------(1)------------------
/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 // false
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 // false
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) // false (essa eu errei)
console.log("c. ", resultado)

console.log("d. ", typeof resultado) // booleano */

// OBS: eu rodei o código apenas DEPOIS de resolver
// para confirmar, errei uma :/

//-----------------(2)------------------
// RESPOSA:
// Não é possivel realizar uma soma se as variáveis forem do tipo "string",
// elas devem ser convertidas para tipo "number" antes. Caso não seja convertido
// o resultado será a união do conteúdo das "strings". Ex: se o usuário digitar
// o número 2 nas duas opções o resultado será 22

//-----------------(3)------------------
// RESOLUÇÃO DO PROBLEMA:
/*
let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
//-----------------(1)------------------
/*
let idade = Number (prompt ("Quantos anos você tem?"))
let idadeAmigo = Number (prompt("Quantos anos tem @ s@u melhor amig@?"))
let idadeMaior = idade > idadeAmigo
let idadeMaior2 = idadeAmigo > idade
let difIdade = idade - idadeAmigo
let difIdade2 = idadeAmigo - idade

console.log("Sua idade é maior do que a d@ s@u melhor amig@?", idadeMaior > idadeMaior2)
console.log("A diferença de idade é:",  difIdade && difIdade2)
*/
//-----------------(2)------------------
/*
let numeroPar = Number (prompt("Insira um número par:"))
console.log("O resto da divisão por 2 é:", numeroPar % 2) // se o número inserido for par o resultado será 0
*/
// se o número inserido for ímpar o resultado será 1

//-----------------(3)------------------
/*
let idade = Number (prompt("Quantos anos você tem?"))

console.log("Sua idade em meses é:", idade * 12)
console.log("Sua idade em dias é:", idade * 365)
console.log("Sua idade em horas é:", idade * 8760)
*/
//-----------------(4)------------------
/*
let num1 = Number (prompt("Digite um número:"))
let num2 = Number (prompt("Digite outro número:"))
let div1 = num1 % num2
let div2 = num2 % num1

console.log("O primeiro número é maior que o segundo?", num1 > num2)
console.log("O primeiro número é igual ao segundo?", num1 === num2)
console.log("O primeiro número é divisível pelo segundo?", div1 === 0)
console.log("O segundo número é divisível pelo primeiro?", div2 === 0)
*/
//-----------------DESAFIO--------------
//-----------------(1)------------------

/*
Graus Fahrenheit(°F) para Kelvin(K)
(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

Graus Celsius(°C) para Graus Fahrenheit (°C)
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
*/

//let f 
//let f2
//let ck
/*
let fk = (77 - 32) * (5/9) + 273.15
let cf = (f) = (80) * (9/5) + 32
let cf2 = (f2) = (30) * (9/5) + 32
let ck = 30 + 273.15

console.log("77ºf convertidos em K é:", fk, "K")
console.log("80ºC convertidos em ºF é:", f, "ºF")
console.log("30ºC convertidos em ºF é:", cf2,"ºF", ", e convertidos em K é:", ck, "K") 
*/

/* CONVERSÃO PELO USUÁRIO:
let cConverter = Number (prompt("Digite um valor em ºC para ser convertido em ºF e K:"))
cf = (f) = (cConverter) * (9/5) + 32
ck = cConverter + 273.15

console.log(cConverter, "convertido em ºF é:", cf, "ºF", " e", cConverter, " convertido em K é:", ck, "K")
*/

//----------------------------------------------------(2)---------------------------------------------------------

//quilowatt-hora de energia custa R$0.05
/*
const quilowatt = 0.05
const gasto = 280
const valorPagar = quilowatt * gasto
 //let consumo = Number (prompt("Digite o consumo de energia em quilowatt:"))

 console.log("Se o consumo de energia for 280 kilowatts o valor será: R$", valorPagar)
 let desconto = valorPagar * 0.15
 console.log("O desconto de 15% será:", desconto)
*/
 //-----------------------------------------------------(3)---------------------------------------------------------

 //a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg
/*

const valorLibra = 20
console.log("20lb equivalem a:", valorLibra / 2.2046, "kg")
*/

//b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg.

/*
let oz = 10.5
console.log("10,5oz equivale a", oz / 35.274, "kg")
*/

//c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m.

/*
let milha = 100
console.log("100mi equivalem a", milha * 1609, "metros")
*/

//d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m.

/*
let ft = 50
console.log("50ft equivalem a", ft / 3.281, "metros")
*/

//e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro.

/*
let galao = 103.56
console.log("105,56gal equivale a", galao * 3.785, "litros")
*/

//f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro.

/*
let xic = 450
console.log("450xic equivale a",xic * 0.24, "litros")
*/

//g) Escolha ao menos um dos itens anteriores e modifique o programa para que 
//ele peça ao usuário o valor da unidade original antes de converter

/*
let xic = prompt("Quantas xícaras você deseja converter para litros?")
console.log("450xic equivale a",xic * 0.24, "litros")
*/