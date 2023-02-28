import express from "express"
import cors from 'cors'
import connection from "./dataBase/connection"
import { Request, Response } from "express"

const app = express()

app.use(express.json())
app.use(cors())


// ------------------------------ EXERCÍCIO 1,2,3 ------------------------------

app.get('/filtrar-tipo', async (req: Request,res: Response):Promise<void> =>{
    try{
        const filter = req.query.filter as string
        let sort = req.query.sort as string
        let size = 5
        let page = Number(req.query.page)
  
        if(!sort){
            sort = "email"
        }

        if(sort !== "name" && sort !== "type"){
            sort = "email"
        }
        
        let offset = size * (page - 1)

        const result = await connection("aula48_exercicio")
            .where("type", "LIKE", `${filter}`)
            .orderBy(sort, "ASC")  
            .limit(size)
            .offset(offset)

        res.status(201).send(result)
    }catch(err:any){

    }
})

// ------------------------------ EXERCÍCIO 4 ------------------------------
app.get('/filtrar', async (req: Request,res: Response):Promise<void> =>{
    try{
        let filter = req.query.filter as string
        let sort = req.query.sort as string
        let size = 5
        let page = Number(req.query.page)
        let order = req.query.order as string

        if(!page){
            page = 1
        }

        if(!filter){
            filter = "%"
        }

        if(!order){
            order = "DESC"
            sort = "name"
        }
        
        if(!sort){  
            sort = "email"
        }

        if(sort !== "name" && sort !== "type"){
            sort = "email"
        }
        
        let offset = size * (page - 1)

        const result = await connection("aula48_exercicio")
            .where("type", "LIKE", `${filter}`)
            .orderBy(sort, order)  
            .limit(size)
            .offset(offset)

        res.status(201).send(result)
    }catch(err:any){

    }
})




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});