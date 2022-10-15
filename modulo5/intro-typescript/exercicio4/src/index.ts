
const n1:number = 50
const n2:number = 20

function comparar(n1:number, n2:number):number{
    
    let maior:number
    let menor:number

    if(n1 > n2){
        maior = n1
        menor = n2
    }else{
        maior = n2
        menor = n1
    }

    const diferenca = maior - menor
    return diferenca
}

console.log(comparar(n1, n2))