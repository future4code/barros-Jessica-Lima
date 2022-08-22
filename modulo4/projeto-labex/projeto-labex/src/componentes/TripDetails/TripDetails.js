import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../../constantes/url"
import { useProtectPage } from "../../hook/UseProtectPage"
import useRequestData from "../../hook/UseRequestData"

export function TripDetails(){
    useProtectPage();
    const navigate = useNavigate()
    const { tripId } = useParams()

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
            approve: true
        }
        axios.put(`${BASE_URL}trips/${tripId}/candidates/${id}/decide`, body,{
            headers: {
                auth: localStorage.getItem("token")
            }
        }.then((resonse) =>{ alert("Candidato aprovado!") })
        .catch((erro)=>{ alert("Erro!") })
        )
    }

    const reprovCandidato = (id) =>{
        const body = {
            approve: false
        }
        axios.put(`${BASE_URL}trips/${tripId}/candidates/${id}/decide`, body,{
            headers: {
                auth: localStorage.getItem("token")
            }
        }.then((resonse) =>{ alert("Candidato reprovado!") })
        .catch((erro)=>{ alert("Erro!") })
        )
    }

    const listDetails = data && data.trips && data.trips.map((i)=>{
        return(
            <div key={i.id}>
                <li>
                    <h2>Candidato</h2>
                    <p>Nome: {i.name}</p>
                    <p>{i.age}</p>
                    <p>{i.profession}</p>
                    <p>{i.applicationText}</p>
                    <button onClick={aprovCandidato}>Aprovar</button>
                    <button onClick={reprovCandidato}>Reprovar</button>
                </li>
            </div>
        )
    })
    console.log("lista deralhes", listDetails)
    
    return(
        <>
            <h1>Detalhes das viagens</h1>
            <button onClick={goToLastPage} >Voltar</button>
            <ul>{listDetails}</ul>
        </>
    )
}