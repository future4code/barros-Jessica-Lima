import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../../constantes/url"
import { useProtectPage } from "../../hook/UseProtectPage"
import useRequestData from "../../hook/UseRequestData"
import { ContainerC, ContainerCandidate } from "./style";

export function TripDetails(){
    useProtectPage();
    const navigate = useNavigate()
    const { tripId } = useParams()

    const [trip, setTrip] = useState()
    const getTripDetails = () =>{
        axios.get(`${BASE_URL}trip/${tripId}`,{
            headers:{
                auth: localStorage.getItem("token")
            }
        }).then((response)=>{setTrip(response.data.trip)
        }).catch((erro)=>{ console.log(erro)})
    }

    useEffect(()=>{
        getTripDetails()
    },[])

    
    const [data] = useRequestData(`${BASE_URL}trip/NoIFVcOiSgTKTIPVZwXS`,
    {headers:{
        auth: localStorage.getItem("token")
    }})

    const goToLastPage = () =>{
        navigate(-1)
    }

    // put
    const aprovCandidato = (id) =>{
        const body = {
            "approve": true
        }
        axios.put(`${BASE_URL}trips/${tripId}/candidates/${id}/decide`, body,{
            headers: {
                auth: localStorage.getItem("token")
            }
        }.then((response) =>{ alert("Candidato aprovado!"); console.log(response.data.trip) })
        .catch((erro)=>{ alert("Erro!") })
        )
    }

    const reprovCandidato = (id) =>{
        const body = {
            "approve": false
        }
        axios.put(`${BASE_URL}trips/${tripId}/candidates/${id}/decide`, body,{
            headers: {
                auth: localStorage.getItem("token")
            }
        }.then((response) =>{ alert("Candidato reprovado!"); console.log(response.data.trip) })
        .catch((erro)=>{ alert("Erro!") })
        )
    }   
 
    return(
        <>
            <h1>Viagem</h1>
            {trip && trip.trips && trip.trips.map((trip)=>{
                return(
                    <div>
                        <h4>{trip.name}</h4>
                        <p>teste</p>
                    </div>
                )
    
            })}

            <button onClick={goToLastPage} >Voltar</button>

            <h1>Candidatos</h1>
            <ContainerC>
                <main>
                    {data && data.trip.candidates && data.trip.candidates.map((i)=>{
                        return(
                            <ContainerCandidate key={i.id}>
                                <li>
                                    <h2>Candidato</h2>
                                    <p>{i.name}</p>
                                    <p>{i.age}</p>
                                    <p>{i.profession}</p>
                                    <p>{i.applicationText}</p>
                                    <button onClick={aprovCandidato}>Aprovar</button>
                                    <button onClick={reprovCandidato}>Reprovar</button>
                                </li>
                            </ContainerCandidate>
                    )
                    })}
                </main>
            </ContainerC>
        </>
    )
}
