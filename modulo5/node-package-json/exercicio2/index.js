const o = process.argv[2]
const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])

const operacao = (n1, n2) =>{
    switch(o){
        case "add":
            return `Resposta é ${n1 + n2}`
        case "sub":
            return `Resposta é ${n1 - n2}`
        case "mult":
            return `Resposta é ${n1 * n2}`
        case "div":
            return `Resposta é ${n1 / n2}`
        break;
    }
}
console.log(operacao(n1, n2))