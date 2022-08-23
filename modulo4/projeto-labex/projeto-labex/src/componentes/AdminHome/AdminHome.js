import axios from "axios";
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constantes/url";
import { useProtectPage } from "../../hook/UseProtectPage"
import useRequestData from "../../hook/UseRequestData"
import { ContainerMain, ContainerTrips } from "./style";

export function AdminHome(){
    useProtectPage();
    
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

    const [dataTrips, isLoading, error] = useRequestData(`${BASE_URL}trips`)
    
    const listTrips = dataTrips && dataTrips.trips && dataTrips.trips.map((trip)=>{
        return(
          <ContainerTrips onClick={goToTripDetails}>
            <li >
                <h4>{trip.name}</h4>
                <button>x</button>
            </li>
          </ContainerTrips>
        )
      })

    return(
        <>
            <h1>Admin Home</h1>
            <button onClick={goToLastPage} >Voltar</button>
            <button onClick={goToCreateTrip} >Criar viagem</button>
            <button>Logout</button>
            <ContainerMain>
                <main>
                    {isLoading&&"carregando..."}
                    {!isLoading&&dataTrips&&listTrips}
                    {!isLoading&&dataTrips&&error}
                    {listTrips}
                </main>
            </ContainerMain>
        </>
    )
}