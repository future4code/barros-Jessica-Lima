console.log("-- exercicio 6 --")

type Dados={
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const array: Dados[] =[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]
function Banco(array:Dados[]){
    const attSaldo = array.map((c)=>{
        let saldo = c.debitos.reduce((a: number, b: number)=> a + b, 0)
        return {cliente: c.cliente, saldoTotal: (c.saldoTotal - saldo), debitos: []}
    }).filter((c)=>{
        return c.saldoTotal <0
    })
    return attSaldo
}

console.table(Banco(array))