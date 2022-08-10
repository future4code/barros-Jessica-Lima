import { useNavigate } from "react-router-dom"

export function AplicationForm(){
    
    const navigate = useNavigate()

    const goToLastPage = () =>{
        navigate(-1)
    }
    return(
        <>
            <h1>Formulario de viagem</h1>
            <button onClick={goToLastPage} >Voltar</button>

        </>
    )
}