// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

// Exercício 1:

/*
function minhaFuncao(variavel) {
	return variavel * 5
}
console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
*/

// Resposta A: 10 50 (resultado dos números multiplicados por 5)
// Resposta B: NaN (pois não teria número para multiplicar)

//--------------------------------------------------------------------------------------

// Exercício 2:

/*
let textoDoUsuario = prompt("Insira um texto");
const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura") // não entendi o uso dos dois metodos já que toLowerCase converte em minúsulo (ESTUDAR!)
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
*/

// Resposta A: A função verifica se a palavra "cenoura" está inclusa no texto inserido
// Resposta B: Eu gosto de cenoura = true | CENOURA é bom pra vista = true | Cenouras crescem na terra = false 

//--------------------------------------------------------------------------------------

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

// Exercício 1:

// A)
/*
    function eu(){
        "Eu sou Jess, tenho 23 anos, moro no RS e sou estudante."
    }
    const textoSobreMim = eu
    console.log(textoSobreMim)
*/
// B)
/*
    function infosPessoa(nome, idade, cidade, profissao){
        nome = prompt ("Digite o seu nome:")
        idade = prompt ("Digite a sua idade:")
        cidade = prompt ("Digite a sua cidade:")
        profissao = prompt ("Digite a sua profissao:")

        console.log("Eu sou", nome, "tenho", idade, "anos, moro em", cidade, "e sou", profissao) 
    }
    let pessoa = infosPessoa()
*/

//--------------------------------------------------------------------------------------

// Exercício 2:

// A) Soma dois números
/*
    function soma (num1 , num2){
        num1 = Number (prompt("Digite um número:"))
        num2 = Number (prompt("Digite outro número:"))

        return num1 + num2
    }
    let resultado = soma()
    console.log(resultado)
*/

// B) Verifica se o primeiro número é maior ou igual ao segundo
/*
    function maiorIgual (num1, num2){
        num1 = Number (prompt("Digite um número"))
        num2 = Number (prompt("Digite outro número:"))

        return num1 >= num2
    }
    let resultado = maiorIgual()
    console.log(resultado)
*/

// C) retornar booleano indicando se o número é par
/*
    function par(num1){
        num1 = Number (prompt("Digite um número"))

        let resultado = num1 % 2 == 0
        return resultado
    }
    let funcaoPar = par()
    console.log(funcaoPar)
*/

// D) retornar tamanho da mensagem
/*
    function mensagem (texto){
        texto = prompt("Digite uma frase:")

        return (texto.length) + "\n" + texto.toUpperCase()
    }
    let resultado = mensagem()
    console.log(resultado)
*/

//--------------------------------------------------------------------------------------

// Exercício 3: calcular operações básicas
/*
let num1 = Number(prompt("Digite um número:"))
let num2 = Number(prompt("Digite um número:")) 

    function soma (){
        return num1 + num2
    }

    function subtracao (){
        return num1 - num2
    }
        
    function multiplicacao(){
        return num1 * num2
    }

    function divisao(){
        return num1 / num2
    }

let soma1 = soma()
console.log("A soma dos números é", soma1)

let diferenca = subtracao()
console.log("A diferença entre os números é:", diferenca)

let multip = multiplicacao()
console.log("A multiplicação dos números é:", multip)

let divis = divisao()
console.log("A divisão dos números é:", divis)
*/
//--------------------------------------------------------------------------------------

// DESAFIO: arrow function

/*
const valor1 = (val1, val2) => {
    val1 = 20
    val2 = 30
    return val1 + val2 
}
let resultado = valor1()

const imprimir = (resultado) => {
    console.log(resultado ) 
    
}
imprima = imprimir(resultado)
*/

// DESAFIO: teorema de Pitágoras


