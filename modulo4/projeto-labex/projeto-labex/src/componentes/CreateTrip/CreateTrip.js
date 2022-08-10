import { useNavigate } from "react-router-dom"

export function CreateTrip(){

    const navigate = useNavigate()

    const goToLastPage = () =>{
        navigate(-1)
    }

    return(
        <>
            <h1>Criar viagem</h1>
            <button onClick={goToLastPage} >Voltar</button>

        </>
    )
}