console.log("-- exercicio 7 --")

type Estoque ={
    nome: string,
    quantidade: number,
    valorUnitario: number
}

type EstoqueAjustado ={
    nome: string,
    quantidade: number,
    valorUnitario: number | string
}

const estoqueAtual: Estoque[] =[
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

function ajustaValor(estoqueAtual:Estoque[]){
	const ajusta = estoqueAtual.map((i)=>{
		const valorAjustado: number | string = i.valorUnitario.toFixed(2).replace('.',',')
		return {nome: i.nome, quantidade: i.quantidade, valorUnitario: "R$ "+valorAjustado}
	})
	let newEstoque :EstoqueAjustado[] = ajusta
	
	function ordenar(a: Estoque, b: Estoque){
		if(a.quantidade <b.quantidade){
			return -1
		} else if(a.quantidade > b.quantidade){
			return 1
		}else{
			return 0
		}
	}
	return newEstoque.sort(ordenar)
}	
console.table(ajustaValor(estoqueAtual))