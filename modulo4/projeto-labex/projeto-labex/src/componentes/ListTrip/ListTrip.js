import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constantes/url"
import useRequestData from "../../hook/UseRequestData"
import { AplicationForm } from "../AplicationForm/AplicationForm"
import { ContainerT, ContainerTrips } from "./style"


export function ListTrip(){

    const navigate = useNavigate()
    const [dataTrips, isLoading, error] = useRequestData(`${BASE_URL}trips`)

    const goToLastPage = () =>{
        navigate(-1)
    }
    const goToAplicationForm=()=>{
        navigate("/aplication-form")

    }

    const listTrips = dataTrips && dataTrips.trips && dataTrips.trips.map((trip)=>{
        return(
          <ContainerTrips key={trip.id}>
            <li>
                <h4>Nome: {trip.name}</h4>
                <p>Descrição: {trip.description}</p>
                <p>{trip.planet}</p>
                <p>{trip.durationInDays}</p>
                <p>{trip.date}</p>
            </li>
          </ContainerTrips>
        )
      })

    return(
        <>
        <h1>Lista de viagens</h1>
        <button onClick={goToLastPage} >Voltar</button>
        <button onClick={goToAplicationForm} >VIAJAR</button>

        <ContainerT>
            <main>
            {isLoading&&"carregando..."}
            {!isLoading&&dataTrips&&listTrips}
            {!isLoading&&dataTrips&&error}
            {listTrips}
            </main>
        </ContainerT>
     
        </>
    )
}