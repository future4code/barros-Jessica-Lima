import { useNavigate } from "react-router-dom"
import { UseForm } from "../../hook/UseForm"
import { ContainerForm } from "./style"
import axios from "axios"
import { BASE_URL } from "../../constantes/url"
import { useProtectPage } from "../../hook/UseProtectPage"

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

        axios.post(`${BASE_URL}trips`, body)
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
            <h1>Criar viagem</h1>
            <button onClick={goToLastPage} >Voltar</button>
            <ContainerForm>
                <form onSubmit={createTrip}>
                            <label htmlFor="nome">Nome</label>
                            <input 
                                id="nome"
                                name="name"
                                type="text"
                                placeholder="Nome"
                                pattern="^.{5,}"
                                required
                                value={form.name}
                                onChange={onChange}    
                            ></input>
                        <select>
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
                            <label htmlFor="data">Data</label>
                            <input 
                                id="data"
                                name="date"
                                type="date"
                                min={"2022-08-20"}
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
        </>
    )
}