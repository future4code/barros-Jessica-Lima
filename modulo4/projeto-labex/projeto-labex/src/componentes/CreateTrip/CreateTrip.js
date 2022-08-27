import { useNavigate } from "react-router-dom"
import { UseForm } from "../../hook/UseForm"
import { ContainerForm } from "./style"
import axios from "axios"
import { BASE_URL } from "../../constantes/url"
import { useProtectPage } from "../../hook/UseProtectPage"
import { Heading, Button } from '@chakra-ui/react'

export function CreateTrip(){
    useProtectPage();

    const navigate = useNavigate()
    const [form,onChange,clear]=UseForm({ 
        name: "", 
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
    })

    const createTrip=(event)=>{
        event.preventDefault()

        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays,
        }

        axios.post(`${BASE_URL}trips`, body, 
        {headers: {
            auth: localStorage.getItem("token")
        }
        })
            .then((response)=>{
                console.log(response.data)
            }).catch((erro)=>{
                console.log("deu erro", erro)
            })
        clear();
    }

    const goToLastPage = () =>{
        navigate(-1)
    }

    return(
        <>
            <Heading 
                mt='10'
                mb='5'
                color='blue'>
                    Criar viagem
            </Heading>
            

            <ContainerForm>
                <form onSubmit={createTrip}>
                            <label htmlFor="name">Nome</label>
                            <input 
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Nome"
                                pattern="^.{5,}"
                                required
                                value={form.name}
                                onChange={onChange}    
                            ></input>
                        <select
                            id="planet"
                            name="planet"
                            required
                            value={form.planet}
                            onChange={onChange}
                        >
                            <option>Escolha um planeta</option>
                            <option>Mercúrio</option>
                            <option>Vênus</option>
                            <option>Terra</option>
                            <option>Marte</option>
                            <option>Júpiter</option>
                            <option>Saturno</option>
                            <option>Urano</option>
                            <option>Netuno</option>
                        </select>
                            <label htmlFor="date">Data</label>
                            <input 
                                id="date"
                                name="date"
                                type="date"
                                Min={"2022-08-22"}
                                required
                                value={form.date}
                                onChange={onChange}
                            ></input>
                            <label htmlFor="description">Descrição</label>
                            <input 
                                id="description"
                                name="description"
                                type="text"
                                required
                                pattern="^.{30,}"
                                placeholder="Descrição"
                                value={form.description}
                                onChange={onChange}
                            ></input>
                            <label htmlFor="durationInDays">Duração em dias</label>
                            <input 
                                id="durationInDays"
                                name="durationInDays"
                                type="number"
                                required
                                placeholder="Duração em dias"
                                Min={50}
                                value={form.durationInDays}
                                onChange={onChange}
                            ></input>
                        <button>Criar viagem</button>

                </form>
            </ContainerForm>

            <Button 
                    mt='4'
                    colorScheme='blue'
                    size='sm' 
                    variant='solid' 
                    onClick={goToLastPage} >Voltar</Button>
        </>
    )
}