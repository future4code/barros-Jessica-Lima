const tarefas= [
	"Lavar a louça",
	"Comprar Leite"
]  		

const tarefa1 = process.argv[2] 
const tarefa2 = process.argv[3] 

tarefas.push(tarefa1 +" "+ tarefa2) 

console.log(tarefas) 
