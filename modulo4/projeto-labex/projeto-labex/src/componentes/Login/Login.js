import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constantes/url"
import { UseForm } from "../../hook/UseForm"
import { ContainerLogin } from "./style"

export function Login(){

    const navigate = useNavigate()
    const [ body,onChange,clear ]=UseForm({ email: "", senha: ""})

    const goToLastPage = () =>{
        navigate(-1)
    }
    //const goToAdminHome=()=>{
    //    navigate("/admin-home")
    //}

    const fazerLogin = (event)=>{
        navigate("/admin-home")

        event.preventDefault()
        axios.post(`${BASE_URL}login`, body)
            .then((response)=>{
                console.log(response.data)
            }).catch((erro)=>{
                console.log("deu erro", erro)
            })
        clear();
    }

    return(
        <>
            <h1>Login</h1>
            <ContainerLogin>
            <form onSubmit={fazerLogin}>
                <label htmlFor="email">E-mail</label>
                <input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email"
                    value={body.email}
                    onChange={onChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                
                ></input>
                <label htmlFor="senha">Senha</label>
                <input 
                    id="senha"
                    name="senha"
                    type="password"
                    required
                    placeholder="senha"
                    value={body.senha}
                    onChange={onChange}
                    pattern="^.{3,}"
                
                ></input>
                <button>Entrar</button>
            </form>
            </ContainerLogin>
            <button onClick={goToLastPage} >Voltar</button>
        </>
    )
}