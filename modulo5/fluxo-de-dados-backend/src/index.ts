import express, { Request, Response} from 'express'
import cors from 'cors'
import { produtos } from './data'
const app = express()

app.use(express.json())
app.use(cors())

// ---------------------- 1 ---------------------- (OK)
app.get('/test', (req: Request, res: Response) => {
    res.send('Servidor rodando na porta 3003')
   })

// ---------------------- 2 ---------------------- (OK)
// Criar arquivo data.ts com produtos

// ---------------------- 3 ---------------------- (OK)
// Criar arquivo type.ts e fazer a tipagem do array de produtos

// ---------------------- 4 ---------------------- (ERRO)
app.post('/novoProduto', (res: Response, req: Request) => {
    const { name, price } = req.body 
    try{
        if( !name ){
            const erro=new Error("Nome do produto não informado!");
            erro.name="nomeNãoInformado";
            
            throw erro;
        }
        if( !price ){
            const erro=new Error("Valor do produto não informado!");
            erro.name="valorNãoInformado";
            
            throw erro;
        }
        let addProduto = produtos
        addProduto.push({
            id: Date.now().toString(),
            name: name,
            price: price
        })
       
        res.status(201).send(produtos)

    }catch(erro:any){
        res.status(400).send(erro.message)
    }
})
// ---------------------- 5 ---------------------- (ERRO)
app.get('/produtos',(res: Response, req: Request)=>{
    
    const nome = req.headers.name as string

    if(!nome){
        res.status(400).send('Headers não informado')
    }

    if(nome){
        const retornarProdutos = produtos.filter((i)=>{
            i.name.includes(nome)
        })
        res.status(200).send(retornarProdutos) 
    }

   res.status(200).send(produtos)
})
// ---------------------- 6 ---------------------- (OK)
app.put("/produtos/editar", (req: Request, res: Response) => {  

    const idProduto = req.headers.authorization
    const valor = req.body.price

    try{
        if( !idProduto) {
            const erro=new Error("ID do produto não informado!");
            erro.name="IDNãoInformado";
            
            throw erro;
        }
        if( !valor) {
            const erro=new Error("Valor do produto não informado!");
            erro.name="valorNãoInformado";
            
            throw erro;
        }

        const buscaId = produtos.filter((p)=>{
            if(idProduto === p.id){
                p.price = valor
            }
        })
        
        res.status(201).send(produtos)
    }catch(e:any){
        res.status(400).send(e.message)
}
})
// ---------------------- 7 ---------------------- (OK)
app.delete('/produtos/deletar',(req: Request, res: Response)=>{
    const idProduto = req.headers.authorization

    try{
        if( !idProduto) {
            const erro=new Error("ID do produto não informado!");
            erro.name="IDNãoInformado";
            
            throw erro;
        }

        let buscaId = produtos.find((p)=>{
            return idProduto === p.id
        }) 

        let deleteProduto 

        if(produtos){
            deleteProduto = produtos.filter((p)=>{
                return p.id !== idProduto
            })
            const nProdutos = deleteProduto
            res.status(201).send(nProdutos)
        }else{
            const erro=new Error("ID não encontrado");
            erro.name="IDNãoEncontrado";
            
            throw erro;
        }
    }catch(erro:any){
        res.status(400).send(erro.message)
    }
})
// ---------------------- 8 ---------------------- 


// ---------------------- 9 ---------------------- (OK)
app.put("/produtos/editarProduto", (req: Request, res: Response) => {  

    const idProduto = req.headers.authorization
    const valor = req.body.price

    try{
        if( !idProduto) {   
            const erro=new Error("ID do produto não informado!");
            erro.name="IDNãoInformado";
            
            throw erro;
        }
        if( !valor) {
            const erro=new Error("Valor do produto não informado!");
            erro.name="valorNãoInformado";
            
            throw erro;
        }
        if( isNaN(valor) ) {
            const erro=new Error("Valor não é um número");
            erro.name="valorInválido";
            
            throw erro;
        }
        if( valor == 0 || valor < 0 ) {
            const erro=new Error("O valor não pode ser igual ou menor que zero");
            erro.name="valorInválido";
            
            throw erro;
        }
        
        const buscaId = produtos.filter((p)=>{
            if(idProduto === p.id){
                p.price = valor
            }
        })
        
        if( !buscaId ){
            const erro=new Error("Produto não existe");
            erro.name="AuthotizationError";
            
            throw erro;
        }else{
            res.status(201).send(produtos)
        }

        
    }catch(e:any){
        res.status(400).send(e.message)
}
})
// ---------------------- 10 ---------------------- 



app.listen(3003, () => {
    console.log("Servidor rotando na porta 3003");
   });