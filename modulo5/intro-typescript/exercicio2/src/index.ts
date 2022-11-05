
let cor1: string ="rosa"
let cor2: string ="azul"
let cor3: string ="roxo"

const arr: string[] = []

function imprimeCores(cor1:string, cor2:string, cor3:string){
    arr.push(cor1, cor2, cor3)
    return arr
}

console.log(imprimeCores(cor1, cor2, cor3))
