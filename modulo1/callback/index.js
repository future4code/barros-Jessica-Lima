// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// OBS: Rodei os códigos apenas no final para comparar com meu raciocínio  

// Exercício 1:
/*
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

// a) O que vai ser impresso no console? Vai imprimir todo o array (com os objetos)
*/
// -------------------------------------------------------------------------------------
// Exercício 2:
/*
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)
*/
// a) O que vai ser impresso no console? Vai imprimir apenas os nomes contidos no array

// -------------------------------------------------------------------------------------
// Exercício 3:
/*
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)
*/
// a) O que vai ser impresso no console? Vai imprimir apenas os apelidos DIFERENTES (!=) de "Chijo" do array

// -------------------------------------------------------------------------------------
// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// Exercício 1:
/*
const pets = [
  { nome: "Lupin", raca: "Salsicha"},
  { nome: "Polly", raca: "Lhasa Apso"},
  { nome: "Madame", raca: "Poodle"},
  { nome: "Quentinho", raca: "Salsicha"},
  { nome: "Fluffy", raca: "Poodle"},
  { nome: "Caramelo", raca: "Vira-lata"},
]

// a) Crie um novo array que contenha apenas o nome dos doguinhos
  console.log("A) -----------")

  const nomesPets = pets.map((item, index)=>{
      return item.nome
  })
  console.log(nomesPets)

// b) Crie um novo array apenas com os cachorros salsicha
console.log("B) -----------")

  const dogsSalsicha = pets.filter((item, index)=>{
      return item.raca == "Salsicha"
  }) 
  console.log(dogsSalsicha )

// c) Crie um novo array que possuirá mensagens para enviar para todos 
// os clientes que são poodles. A mensagem deve ser: "Você ganhou um 
// cupom de desconto de 10% para tosar o/a `[NOME]`!"
console.log("C) -----------")

  const cupomPoodles = pets.filter ((item)=>{
    if (item.raca === "Poodle"){
      console.log("Você ganhou um cupom de desconto de 10% para tosar o", item.nome)
    }  
  })
*/

// -------------------------------------------------------------------------------------
// Exercício 2:

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a) Crie um novo array que contenha apenas o nome de cada item
console.log("A)----------------------------")

  const nomeProduto = produtos.map((item)=>{
    console.log(item.nome)
  })

// b) Crie um novo array que contenha um objeto com o nome e o preço 
// de cada item, aplicando 5% de desconto em todos eles
console.log("B)----------------------------")

  function desconto(produto){
    let precoDesconto=produto.preco-(produto.preco*0.05)
    return {"nome:": produto.nome, "preco": precoDesconto.toFixed(2)}
  }
  let arrayDesconto = produtos.map(desconto)
  console.log(arrayDesconto)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
console.log("C)----------------------------")

  const bebidasProdutos = produtos.filter((item)=>{
    return item.categoria == "Bebidas"
  })
  console.log(bebidasProdutos)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
console.log("D)----------------------------")

  const ypeProdutos = produtos.filter((item)=>{
    
    if (item.nome.includes("Ypê") === true){
    return item.nome
  }
  })
  console.log(ypeProdutos)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse 
// array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
console.log("E)----------------------------")

const fraseProdutos = produtos.filter((item)=>{
    
  if (item.nome.includes("Ypê") === true){
  console.log("Compre", item.nome, "por", item.preco)
}
})
console.log(fraseProdutos)

// -------------------------------------------------------------------------------------
// DESAFIO

// Exercício 1:

/*
console.log("-------------- DESAFIO --------------")
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
]

// a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

  const ordemAlf = pokemons.map((pokemon)=>{
   
   // arrayOriginal.sort((a, b) => a - b)
    
    let ordem = pokemon.sort((a,b)=> a - b)
    console.log(ordem)

  })*/