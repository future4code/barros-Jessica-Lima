import { useNavigate } from "react-router-dom"
import { ContainerForm } from "./style"

export function AplicationForm(){
    
    const navigate = useNavigate()

    const goToLastPage = () =>{
        navigate(-1)
    }

    

    return(
        <>
            <h1>Formulario de viagem</h1>
            <ContainerForm>
                <main>
                <select>
                    <option>viagem</option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
                    <input placeholder="Nome"></input>
                    <input placeholder="Idade"></input>
                    <input placeholder="Texto de candidatura"></input>
                    <input placeholder="Profissão"></input>
                <select>
                    <option>Escolha um país</option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>

          
                </main>
                <button className="btnform">Enviar</button>
                <button  className="btnform" onClick={goToLastPage} >Voltar</button>
            </ContainerForm>
            

        </>
    )
}