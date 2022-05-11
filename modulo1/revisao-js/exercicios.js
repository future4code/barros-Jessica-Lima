// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
   let arrayPares = array.filter((item) =>{
      return item % 2 == 0
   })
  return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   
   const pares = array.filter((nPares)=>{
      return(nPares % 2 ===0)
   })

   const paresAoQuadrado = pares.map((nPares) =>{
      return (Math.pow(nPares, 2))
   })
   return paresAoQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   
   let maiorNumero = Math.max.apply(null, array)
   return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

   let maior = Math.max(num1, num2)
   let menor = (Math.min(num1,num2))
   let divisivel = maior % menor == 0
   let dif = maior - (Math.min(num1, num2))

   const doisNumeros = {
      maiorNumero: maior,
      maiorDivisivelPorMenor: divisivel,
      diferenca: dif
   }
   return doisNumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

   let arrayPares = [] 

   for(let i = 0; arrayPares.length < n; i++){

      if (i % 2 === 0){
         arrayPares.push(i) 
      }
   }  
   return arrayPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   
   if(ladoA === ladoB && ladoA === ladoC){
      return "Equilátero"
   }

   if ( ladoA == ladoB && ladoA != ladoC || ladoA == ladoC && ladoA != ladoB || ladoB == ladoC && ladoB != ladoA){
      return "Isósceles"
   }

   if (ladoA != ladoB != ladoC){
      return "Escaleno"
   }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
   let arrayDoisNumeros = []

   array.sort((a,b) => a-b)
   let segundoMaior = array[array.length-2]
   let segundoMenor = array[1]

   arrayDoisNumeros.push(segundoMaior)
   arrayDoisNumeros.push(segundoMenor)
      
   return arrayDoisNumeros

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}