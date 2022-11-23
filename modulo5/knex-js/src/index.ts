import express from "express"
import cors from 'cors'
import dotenv from "dotenv";
import connection from './dataBase/connection'
import { Request, Response } from "express"

dotenv.config();

const app = express()

app.use(express.json())

app.use(cors())

// ------------------- EXERCÍCIO 1 ----------------------
// B)  GET - Buscar ator pelo nome
app.get('/actor/name', async (req:Request, res:Response): Promise<void> =>{
    try{

        const name = req.query.name as string
        let result

        if(name){
            result = await connection.raw(
                `
                    SELECT * FROM Actor WHERE name LIKE "%${name}%";
                `
            )
        }else{
            result = await connection.raw(
                `
                    SELECT * FROM Actor;       
                `
            )
        }   
        res.status(200).send(result[0])

    }catch(err:any){
        res.status(400).send(err.message)
    }
})  

// c)  GET - Buscar ator pelo genero
app.get('/actor/gender', async (req:Request, res:Response): Promise<void> =>{
    try{
        const gender = req.query.gender
        let result

        if(gender){
            result = await connection.raw(`
                SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
            `)
        }
        res.status(200).send(result[0])

    }catch(err:any){
        res.status(400).send(err.message)
    }
})  

// ------------------- EXERCÍCIO 2 ----------------------
// A)
app.put('/actor/salary', async (req:Request, res:Response): Promise<void> =>{
    try{
        const id = req.query.id
        const salary = req.query.salary

            await connection("Actor").update({
                salary: salary
            }).where("id", id)
        

        res.status(200).send("Alterado com sucesso!")

    }catch(err:any){
        res.status(400).send(err.message)
    }
})  

// B)
app.delete('/actor/delete', async (req:Request, res:Response): Promise<void> =>{
    try{
        const id = req.query.id

        await connection.raw(`
            SET foreign_key_checks = 0;
        `)

        await connection("Actor").delete().where("id", id)
        
        await connection.raw(`
            SET foreign_key_checks = 0;
        `)

        res.status(200).send("Deletado com sucesso!")

    }catch(err:any){
        res.status(400).send(err.message)
    }
}) 

// C)
app.get('/actor/media', async (req:Request, res:Response): Promise<void> =>{
    try{
        const gender = req.query.gender

        const result = await connection("Actor")
            .avg("salary")
            .where({gender})

        res.status(200).send(result)

    }catch(err:any){
        res.status(400).send(err.message)
    }
}) 

// ------------------- EXERCÍCIO 3 ----------------------
// A)
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const actor = await connection("Actor")
        .where({id});
  
      res.status(200).send(actor)

    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  // B)
  app.get("/actor/ngender", async (req: Request, res: Response) => {
    try {
      const gender = req.query.gender;

      const actor = await connection("Actor")
        .count("gender")
        .where({gender: gender})
  
      res.status(200).send(actor)

    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  // ------------------- EXERCÍCIO 4 ----------------------
// A)
app.put("/actor/attsalary", async (req: Request, res: Response):Promise<void> => {
    try{
        const {id, salary} = req.body
      
            await connection("Actor").update({
                salary: salary
            }).where("id", id)
        

        res.status(200).send("Alterado com sucesso!")

    }catch(err:any){
        res.status(400).send(err.message)
    }
  });

  // B) 
  app.delete('/actor/delete:id', async (req:Request, res:Response): Promise<void> =>{
    try{
        const id = req.params.id
/*
        await connection.raw(`
            SET foreign_key_checks = 0;
        `)
*/
        await connection("Actor").delete().where("id", id)
     /*   
        await connection.raw(`
            SET foreign_key_checks = 0;
        `)
*/
        res.status(200).send("Deletado com sucesso!")

    }catch(err:any){
        res.status(400).send(err.message)
    }
}) 




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});