import  express, { Request, Response} from 'express'
import cors from 'cors'
import {arrayDados} from './data'

const app = express()
app.use(express.json())
app.use(cors())


// ------------------- 4 - retornar afazeres de único status
app.get("/tarefas", (req: Request, res: Response) => {  

    const statusId = req.body.statusId
    
    if( !statusId ){
        res.status(400).send('Deu ruim, verificar informações')
    }

    let status = arrayDados.map((s)=>{
        return s.tarefas
 
    }).flat(1)
    
    status = status.filter((tarefa)=>{
        return tarefa.completed === statusId 
    }) 
    
   res.status(201).send(status)
})

// ---------------------5 criação de tarefa ------------------- FUNCIONANDO
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

// 6 ----------------------- 6 edição de status --------------------- FUNCIONANDO
app.put("/tarefas/alterarStatus", (req: Request, res: Response) => {  

    const idUser = req.headers.authorization
    const idTarefa = req.body.title

    if( !idUser || !idTarefa) {
        res.status(400).send('Deu ruim, passe os parametros')
    }

    const buscaId = arrayDados.filter((user)=>{
        if(idUser === user.userId){
            return idUser
        }
    })
    const alterarStatus = buscaId.map((status)=>{
        status.tarefas.map((s)=>{
            if(idTarefa === s.title){
            s.completed = !s.completed
        }
        })
    })
    // resposta do servidor
    res.status(201).send(arrayDados)
})

// ---------------------- 7 deletar tarefa ---------------------------
/*
app.delete('/tarefas/delete',(req: Request, res: Response)=>{
  
    const userId = req.headers.authorization
    const idTarefa = req.body.tarefaId

    if(!idTarefa && !userId){
        res.status(400).send('Deu ruim, adicionar id')
    }

    const buscaId = arrayDados.filter((user)=>{
        if(userId === user.userId){
            return userId
        }
    })
    const deleteTarefa = buscaId.map((tarefa)=>{
        res.status(200).send(deleteTarefa)
    })

    res.status(201).send(arrayDados)
})

*/
// ---------------------- 8 retorna tarefas de id  ---------------------------
app.get('/tarefas/id',(req: Request, res: Response)=>{

    const idUser = req.headers.authorization

    if(!idUser ){
        res.status(400).send('Deu ruim, informar id')
    }

    const tarefasId = arrayDados.filter((t)=>{
        if(idUser === t.userId){
            return t.tarefas
        }else{
            res.status(400).send('Usuário inválido')
        }
    })
    res.status(201).send(tarefasId)
    console.log(tarefasId)

})


app.listen(3003,()=>{
    console.log('Servidor executando na porta 3003')
})