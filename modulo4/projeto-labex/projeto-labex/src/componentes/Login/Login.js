import { useNavigate } from "react-router-dom"

export function Login(){

    const navigate = useNavigate()

    const goToLastPage = () =>{
        navigate(-1)
    }
    const goToAdminHome=()=>{
        navigate("/admin-home")
    }

    return(
        <>
            <h1>Login</h1>
            <button onClick={goToLastPage} >Voltar</button>
            <button onClick={goToAdminHome} >Entrar</button>
        </>
    )
}