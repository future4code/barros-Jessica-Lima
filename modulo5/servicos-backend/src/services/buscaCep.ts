import axios from "axios";

async function BuscaCep(cep: string) {
    try{
        const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        
        const endereco = {
            logradouro: data.logradouro,
            bairro: data.bairro,
            localidade: data.localidade,
            uf: data.uf
        }
        return endereco
        
    }catch(err:any){
        console.log(err.message)
    }
    
}
export default BuscaCep;