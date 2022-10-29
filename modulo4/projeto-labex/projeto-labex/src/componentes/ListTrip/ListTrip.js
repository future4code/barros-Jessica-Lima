import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constantes/url"
import useRequestData from "../../hook/UseRequestData"
import { AplicationForm } from "../AplicationForm/AplicationForm"
import { ContainerT, ContainerTrips } from "./style"
import { Box, SimpleGrid, Button, Heading, CheckCircleIcon } from '@chakra-ui/react'

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
                <h2>{trip.name}</h2>
                <p>{trip.description}</p>
                <p>{trip.planet}  |  {trip.durationInDays}  |  {trip.date}</p>
                <Button 
                    mt='4'
                    colorScheme='blue'
                    size='sm' 
                    variant='solid' 
                    onClick={goToAplicationForm} >Viajar</Button>
            </li>
          </ContainerTrips>
         
        )
      })

    return(
        <>


        <Heading 
            mt='10'
            mb='5'
            color='blue'>
            Lista de viagens
        </Heading>

        <Button 
            mr='10'
            colorScheme='blue'
            size='sm' 
            variant='solid' 
            onClick={goToLastPage} >Voltar</Button>
        <Button 
            colorScheme='blue'
            size='sm' 
            variant='solid' 
            onClick={goToAplicationForm} >Viajar</Button>

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