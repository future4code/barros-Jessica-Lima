import { useNavigate } from "react-router-dom"

export function ListTrip(){

    const navigate = useNavigate()

    const goToLastPage = () =>{
        navigate(-1)
    }
    const goToAplicationForm=()=>{
        navigate("/aplication-form")
    }

    return(
        <>
        <h1>Lista de viagens</h1>
        <button onClick={goToLastPage} >Voltar</button>
        <button onClick={goToAplicationForm} >Viajar</button>
        </>
    )
}