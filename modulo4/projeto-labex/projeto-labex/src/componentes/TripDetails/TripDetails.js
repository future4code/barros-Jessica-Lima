import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../../constantes/url"
import { useProtectPage } from "../../hook/UseProtectPage"
import useRequestData from "../../hook/UseRequestData"
import { ContainerC, ContainerCandidate } from "./style";
import { Heading, Button } from '@chakra-ui/react'

export function TripDetails(){
    useProtectPage();
    const navigate = useNavigate()

    const [trip, setTrip] = useState()
    const {id} = useParams()
    console.log(id)
    const goToLastPage = () =>{
        navigate(-1)
    }
    useProtectPage()

    const getTripDetails = () =>{
        axios
            .get(`${BASE_URL}trip/${id}`,{
                headers:{
                    auth: localStorage.getItem("token")
                }
            })
            .then((response)=>{setTrip(response.data.trip)})
            .catch((erro)=>{console.log(erro)})
    }

    console.log(trip)

    useEffect(() =>{
        getTripDetails()
    }, [])

    const decideCandidate = (approve, candidatesId) =>{
        const body={
            approve: approve
        }
        axios.put(`${BASE_URL}trips/${id}/candidates/${candidatesId}/decide`, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((response)=>{ console.log(response.data.trip) })
        .catch((erro)=>{console.log(erro)}) 
    }

    const aprovarCandidato = () => {
        decideCandidate(true, trip.candidates.id)
      };
    
      const rejeitarCandidato = () => {
        decideCandidate(false, trip.candidates.id)
      };


    return(
        <>  

        <Heading 
                mt='10'
                color='blue'>
                    Detalhes
            </Heading>

        <ContainerC>
            <main>
                
                        <div>
                            <h4>Nome: {trip && trip.name}</h4>
                            <p>Planeta: {trip && trip.planet}</p>
                            <p>Data: {trip && trip.date}</p>
                            <p>Duração: {trip && trip.durationInDays}</p>
                            <p>{trip && trip.description}</p>
                        </div>
               
                </main>
            </ContainerC>
            <Button 
                    mt='4'
                    colorScheme='blue'
                    size='sm' 
                    variant='solid' 
                    onClick={goToLastPage} >Voltar</Button>

            <Heading 
                mt='10'
                color='blue'>
                    Candidatos
            </Heading>
            <ContainerC>
                <main>
                    {trip && trip.candidates && trip.candidates.map((trip)=>{
                        return(
                            <ContainerCandidate key={trip.id}>
                                <li>
                                    <p>{trip.name}</p>
                                    <p>{trip.age}</p>
                                    <p>{trip.profession}</p>
                                    <p>{trip.applicationText}</p>
                                    <Button 
                                        mr='5'
                                        mt='4'
                                        colorScheme='green'
                                        size='sm' 
                                        variant='solid' 
                                        onClick={()=>aprovarCandidato()} >Aprovar</Button>
                                    <Button 
                                        mt='4'
                                        colorScheme='red'
                                        size='sm' 
                                        variant='solid' 
                                        onClick={()=>rejeitarCandidato()} >Reprovar</Button>
                                </li>
                            </ContainerCandidate>
                        )
                    })
                    }
                </main>
            </ContainerC>
        </>
    )
}
