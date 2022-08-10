import { useNavigate } from "react-router-dom"

export function TripDetails(){

    const navigate = useNavigate()

    const goToLastPage = () =>{
        navigate(-1)
    }

    return(
        <>
            <h1>Detalhes das viagens</h1>
            <button onClick={goToLastPage} >Voltar</button>

        </>
    )
}