import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constantes/url"
import { UseForm } from "../../hook/UseForm"
import { ContainerLogin } from "./style"
import { Heading, Button } from '@chakra-ui/react'

export function Login(){

    const navigate = useNavigate()
    const [form, onChange, clear] = UseForm({ email: "", password: "" })

    const goToLastPage = () =>{
        navigate(-1)
    }
    const goToAdminHome=(navigate)=>{
        navigate("/admin-home")
    }

    const fazerLogin = (event)=>{

        event.preventDefault()
        
        axios.post(`${BASE_URL}login`, form)
            .then((response)=>{
                console.log(response.data)
                localStorage.setItem("token", response.data.token)
                goToAdminHome(navigate)
            })
            .catch((erro)=> console.log("deu erro", erro))
            
        //clear();
    }

    return(
        <>
            <Heading 
                mt='10'
                mb='5'
                color='blue'>
                    Login
            </Heading>
            <ContainerLogin>
            <form onSubmit={fazerLogin}>
                <label htmlFor="email">E-mail</label>
                <input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                
                ></input>
                <label htmlFor="password">Senha</label>
                <input 
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="senha"
                    value={form.senha}
                    onChange={onChange}
                    pattern="^.{3,}"
                
                ></input>
                
                <button>Entrar</button>
            </form>
            </ContainerLogin>
            <Button 
                    mt='4'
                    colorScheme='blue'
                    size='sm' 
                    variant='solid' 
                    onClick={goToLastPage} >Voltar</Button>

        </>
    )
}