import  express, { Request, Response} from 'express'
import cors from 'cors'
import { mockPosts, mockUsuarios } from './data'
import { Posts } from './types'

const app = express()
app.use(express.json())
app.use(cors())

// 4 - retorna todos os usuarios criados
app.get("/usuarios/:id", (req: Request, res: Response) => {
    const users = mockUsuarios.map((user)=>{
    return user
    })
    res.status(201).send(users)
})

// 7 - retorna todos os posts
app.get("/posts/:id", (req: Request, res: Response) => {
    const posts = mockPosts.map((post)=>{
    return post
    })
    res.status(201).send(posts)
})

// 8 - retorna todos posts de um usuario
app.get("/postsUser/:id", (req: Request, res: Response) => {
    
    const usuarioPost: number = 4
    const postUser = mockPosts.filter((post)=>{
        
       if(post.userId === usuarioPost){
            return post
       }
   
    })
    res.status(201).send(postUser)
})



app.listen(3003, ()=>{
    console.log("Servidor rodando na porta 3003")
})

