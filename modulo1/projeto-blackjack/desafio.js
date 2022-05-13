
//  EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 

    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    //console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    //console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)

   let jogo = confirm("Bem-vinde ao jogo Blackjack!" + "\n" + "Quer iniciar uma nova rodada?")
   let arrayUsuario = []   
   let arrayComputador = []

   if(jogo === true){

      arrayUsuario[0] = comprarCarta()
      arrayUsuario[1] = comprarCarta()

      arrayComputador[0] = comprarCarta()
      arrayComputador[1] = comprarCarta()

      // sortear caso sejam dois As
      if (arrayUsuario[0].valor === 11 && arrayUsuario[1].valor === 11){
         arrayUsuario[0] = comprarCarta()
         arrayUsuario[1] = comprarCarta()
      }
      if (arrayComputador[0].valor === 11 && arrayComputador[1].valor === 11){
         arrayComputador[0] = comprarCarta()
         arrayComputador[1] = comprarCarta()
      }
     
      let comprarMais = confirm(`Suas cartas são ${arrayUsuario[0].texto} ${arrayUsuario[1].texto}. A carta revelada do computador é ${arrayComputador[0].texto}. \n Deseja comprar mais uma carta?`)

      // soma cartas usuario
      let somaUsuario = arrayUsuario.map(item =>item.valor).reduce((prev, curr) => prev + curr, 0)
      
      // soma cartas computador
      let somaComputador = arrayComputador.map(item =>item.valor).reduce((prev, curr) => prev + curr, 0)
      
      // caso usuario queira comprar mais carta
      if (comprarMais === true && somaUsuario < 21){

         for (let i = 2; somaUsuario < 21; i++){

            arrayUsuario[i] = comprarCarta() // aqui ta o problema
            somaUsuario += arrayUsuario[i].valor
         }
      }
      // cartas computador
      if (comprarMais === false && somaUsuario <= 21){
         
         for(let i = 2; somaComputador <= somaUsuario; i++){
            arrayComputador[i] = comprarCarta()
            somaComputador += arrayComputador[i].valor
         }
      }

      if(somaComputador > somaUsuario){
         alert("O computador ganhou")
      }
      if (somaUsuario > somaComputador){
         alert("O usuário ganhou")
      }
      if (somaUsuario === somaComputador){
         alert("Empate")
      }

      console.log("A soma das cartas do usuario é", somaUsuario)
      console.log("Array usuario", arrayUsuario)
      console.log("A soma das cartas do computador é", somaComputador)
      console.log("Array computador", arrayComputador)


      
      
   }

   if (jogo === false){
      alert("O jogo acabou")
   }
   