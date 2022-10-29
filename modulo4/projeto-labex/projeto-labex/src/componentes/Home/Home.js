import { useNavigate } from "react-router-dom"
import { Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text, SimpleGrid, Box } from '@chakra-ui/react'
import { ContainerHome, ContainerBtn } from "./style"

export function Home(){

    const navigate = useNavigate()

    const goToListTrips = () =>{
        navigate("/list-trip")
    }
    const goToLogin = () =>{
        navigate("/login")
    }
    return(

       <ContainerHome>
            <SimpleGrid columns={1} spacing={2}>
                <Box height='80px'></Box>
                <Box height='80px'></Box>

                <Box height='80px'>
                    <Heading 
                        color='blue'>
                        LabeX
                    </Heading>
                </Box>
               
                <Box height='80px'>
                    <Button 
                        mr='10'
                        colorScheme='blue'
                        size='sm' 
                        variant='solid' 
                        onClick={goToLogin} >Área administrativa</Button>
                    <Button 
                        colorScheme='blue'
                        size='sm' 
                        variant='solid' 
                        onClick={goToListTrips} >Lista de viagens</Button>
                </Box>
            </SimpleGrid>
            
            
            

                    

       </ContainerHome> 
    )
}