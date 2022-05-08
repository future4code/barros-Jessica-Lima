/*   console.log("Boas vindas ao jogo de Blackjack!")
   console.log("---------------------------------")

const carta = comprarCarta();

   let resposta = (confirm("Quer iniciar uma nova rodada?"))
   let i = 0

   while (resposta===true){
   i++
   resposta = (confirm("Quer iniciar uma nova rodada?"))

   if (resposta === true){
      
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
   }
}
   if (resposta === false){
      console.log("O jogo acabou")
    }

*/