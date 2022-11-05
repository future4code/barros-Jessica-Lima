import  express, { Request, Response} from 'express'
import cors from 'cors'
import { users } from './data'
const app = express()

app.use(express.json())
app.use(cors())

// ------------------ EXERCÍCIO 1 ------------------------
// *a. Qual método HTTP você deve utilizar para isso?*
    // R: GET
// *b. Como você indicaria a **entidade** que está sendo manipulada?*
    // R: /users
app.get('/users',(req: Request, res: Response)=>{ // É só isso? 
    res.status(200).send(users)
})

// ------------------ EXERCÍCIO 2 ------------------------
// a.* Como você passou os parâmetros de type para a requisição? Por quê?
    // Usando headers, e comparando a variavel da req com o user do array
// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
    // Usando um ENUM, assim não pode ser passado outro tipo de type alem do que for definido
app.get('/users/type', (req: Request, res: Response)=>{
   
    let errorCode = 400

    try{
        const typeUser = req.headers.type
        
        if(!typeUser){
            errorCode = 401
            throw new Error ('Id não identificado')
        }
        const buscarId = users.filter((user)=>{
            if(typeUser === user.type){
                return typeUser
            }    
        })
        /*       ARRUMAR
        if(!buscarId){
            errorCode = 401
            throw new Error (`Não existe usuário com o tipo ~${typeUser}~`)
        }
        */
        res.status(200).send(buscarId)

    }catch(err:any){
        res.status(errorCode).send(err.message)
    }
})
// ------------------ EXERCÍCIO 3 ------------------------
app.get('/users/name',(req: Request, res: Response)=>{
    let errorCode = 400

    try{

    }catch(err:any){
        res.status(errorCode).send(err.message)
    }
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});