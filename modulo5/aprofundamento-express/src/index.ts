import  express, { Request, Response} from 'express'
import cors from 'cors'
import {arrayDados} from './data'

const app = express()
app.use(express.json())
app.use(cors())

// 4 - retornar afazeres de único status
/*
app.get("/tarefas/:id", (req: Request, res: Response) => {  

    function statusTarefas(status:boolean){

        const statusT = arrayDados.filter((s)=>{
            return s.completed == status
        })
        return statusT
    }
    res.status(201).send(statusTarefas(false))
})
*/
// 5 - criação de tarefa ---------------------------- FUNCIONANDO
app.post("/addtarefa", (req: Request, res: Response) => {  
    
    const tarefaNova = req.body.title
    const idUser = req.headers.authorization
    const {title, completed} = req.body
    
    if ( !idUser || !title || !completed ){
        res.status(400).send('Deu ruim, verificar informações')
    }
    
    for (let i=0; i < arrayDados.length; i++){
        if(arrayDados[i].userId === idUser){
            arrayDados[i].tarefas.push({
                id: Date.now().toString(),
                title: tarefaNova,
                completed: completed
            })
        }
    }
    res.status(201).send({arrayDados})
})

// 6 - edição de status
/*
app.put("/tarefas/:userId/alterarStatus", (req: Request, res: Response) => {  

    const tarefasId = req.params.userId
    const idTarefaAlterar = 2 //arrumar isso
    const {userId, id, title, completed} = req.body

    // tratamento de erro
    if( !tarefasId || !idTarefaAlterar || !userId || !id || !title || !completed ) {
        res.status(400).send('Deu ruim, passe os parametros')
    }
    // procurar tarefa a alterar
    const selecTarefa = arrayDados.find((tarefa)=>{
        return tarefa.userId === idTarefaAlterar
    })

    let tarefasSelecionadas

    // verifica se a tarefa existe 
    if(selecTarefa){
        tarefasSelecionadas = selecTarefa.find((tarefa)=>{
            return tarefa.userId === tarefasId
        })
    }else{
        res.status(400).send('Tarefa não encontrada')
    }

    if(){

    }else{
        res.status(400).send('Tarefa não encontrada')
    }


    // resposta do servidor
    res.status(201).send('bananinha')

})
*/

// 7 - deletar tarefa
/*
app.delete('/tarefas/delete',(req: Request, res: Response)=>{
    const idTarefa = req.query.tarefaId
    const userId = req.headers.iduser

    if(!idTarefa && !userId){
        res.status(400).send('Deu ruim, adicionar id')
    }

    const tarefasFiltradas = arrayDados.find((user)=>{
        return user.userId === userId
    })
    
 

})
*/

app.listen(3003,()=>{
    console.log('Servidor executando na porta 3003')
})