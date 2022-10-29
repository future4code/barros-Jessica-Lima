import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../../constantes/url";
import { useProtectPage } from "../../hook/UseProtectPage"
import useRequestData from "../../hook/UseRequestData"
import { ContainerMain, ContainerTrips } from "./style";
import { Box, SimpleGrid, Button, Heading, CheckCircleIcon } from '@chakra-ui/react'

export function AdminHome(){
    useProtectPage();
    let { id } = useParams()

    const navigate = useNavigate()

    const goToLastPage = () =>{
        navigate(-1)
    }
    const goToTripDetails=(id)=>{
        navigate(`/trip-details/${id}`)
    }

    const goToCreateTrip=()=>{
        navigate("/create-trip")
    }

    const [dataTrips, isLoading, error] = useRequestData(`${BASE_URL}trips`)

    const logout = () =>{
        localStorage.removeItem("token")
        navigate("/login")
    }

    const deleteTrip = () =>{
        const token = localStorage.getItem("token")
        axios
            .delete(`${BASE_URL}trips/${id}`, {headers: {auth: token}})
            .then((response)=>{alert("viagem removida!")})
            .catch((erro)=>{alert("algo deu errado"); console.log(erro)})
    }

    const listTrips = dataTrips && dataTrips.trips && dataTrips.trips.map((trip)=>{
        return(
          <ContainerTrips >
            <li key={trip.id}>
                <h4 onClick={()=>goToTripDetails(trip.id)}>{trip.name}</h4>
                <Button 
                    mt='4'
                    colorScheme='red'
                    size='sm' 
                    variant='solid' 
                    onClick={deleteTrip} >Deletar</Button>
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
            Admin home
        </Heading>
            <Button 
                mt='4'
                colorScheme='blue'
                size='sm' 
                variant='solid' 
                onClick={goToLastPage} >Voltar</Button>
            <Button 
                ml='5'
                mr='5'
                mt='4'
                colorScheme='blue'
                size='sm' 
                variant='solid' 
                onClick={goToCreateTrip} >Criar viagem</Button>
            <Button 
                mt='4'
                colorScheme='blue'
                size='sm' 
                variant='solid' 
                onClick={logout} >Logout</Button>
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