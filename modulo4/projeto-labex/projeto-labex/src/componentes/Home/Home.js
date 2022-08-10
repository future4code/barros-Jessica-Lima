import { useNavigate } from "react-router-dom"

export function Home(){

    const navigate = useNavigate()

    const goToListTrips = () =>{
        navigate("/list-trip")
    }
    const goToLogin = () =>{
        navigate("/login")
    }
    return(
       <>
       <h1>Home</h1>
        <button onClick={goToLogin} >Área administrativa</button>
        <button onClick={goToListTrips} >Lista de viagens</button>
       </> 
    )
}