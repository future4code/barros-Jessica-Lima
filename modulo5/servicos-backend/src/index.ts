import express from "express"
import { Request, Response } from "express"
import cors from 'cors'
import BuscaCep from "./services/buscaCep"
import connection from "./dataBase/connection"

const app = express()

app.use(express.json())
app.use(cors())

app.get('/buscacep/:cep',async (req: Request, res: Response) :Promise<void> => {
    try{
        const cep = req.params.cep as string
        const { numero, complemento } = req.body

        const endereco = await BuscaCep(cep) 

        if ( numero && complemento ){
            await connection.raw(`
                INSERT INTO endereco_users (cep, logradouro, numero, complemento, bairro, cidade, estado )
                VALUES ( "${cep}", "${endereco?.logradouro}", ${numero}, "${complemento}", "${endereco?.bairro}", "${endereco?.localidade}", "${endereco?.uf}" );
            `)
        }

        res.status(201).send("Endereço cadastrado com sucesso!")

    }catch(err:any){
    
        res.status(401).send("Deu ruim")
    }
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});