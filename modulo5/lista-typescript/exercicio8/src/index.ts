console.log("-- exercicio 8 --")

const palavra: string = "sapo"

function anagrama(palavra: string){
	const nCaracteres = palavra.length
	let fatorial = nCaracteres

	for (let i = 1; i < nCaracteres; i++){
		fatorial *= i 
	}
	console.log(fatorial)
}
console.table(anagrama(palavra))