
   console.log("Boas vindas ao jogo de Blackjack!")
   console.log("---------------------------------")

/*
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
*/
const carta = comprarCarta();

    if (confirm("Quer iniciar uma nova rodada?")){

      let cartaUsuario1 = comprarCarta()
      let cartaUsuario2 = comprarCarta()
      let cartaComp1 = comprarCarta()
      let cartaComp2 = comprarCarta()

      let somaUsuario = cartaUsuario1.valor + cartaUsuario2.valor
      let somaComputador = cartaComp1.valor + cartaComp2.valor

      console.log("Usuário - cartas:", cartaUsuario1.texto, cartaUsuario2.texto, "pontuação:", somaUsuario)
      console.log("Computador - cartas:", cartaComp1.texto, cartaComp2.texto, "pontuação:", somaComputador)

      if(somaUsuario > somaComputador){
         console.log("O usuário ganhou!")
      }if (somaComputador > somaUsuario){
         console.log("O computador ganhou")
      }if (somaUsuario === somaComputador){
         console.log("Empate!")
      }
      
   } else{
      console.log("O jogo acabou")
    }
 
    
    
    /*function usuario(carta, carta){
      console.log("Usuário - cartas:", carta.texto, carta.texto, "pontuação:", carta.valor + carta.valor)

   }
   usuario(comprarCarta(carta), comprarCarta(carta))
   
   function computador(carta, carta) {
      console.log("Computador - cartas:", carta.texto, carta.texto, "pontuação:", carta.valor + carta.valor)

   }
   computador(comprarCarta(carta), comprarCarta(carta))
   */