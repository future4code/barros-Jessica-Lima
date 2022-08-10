import { useNavigate } from "react-router-dom"

export function AdminHome(){

    const navigate = useNavigate()

    const goToLastPage = () =>{
        navigate(-1)
    }
    const goToTripDetails=()=>{
        navigate("/trip-details")
    }

    const goToCreateTrip=()=>{
        navigate("/create-trip")
    }

    return(
        <>
            <h1>Admin Home</h1>
            <button onClick={goToLastPage} >Voltar</button>
            <button onClick={goToCreateTrip} >Criar viagem</button>
            <button onClick={goToTripDetails} >Viagem detalhes</button>
        </>
    )
}