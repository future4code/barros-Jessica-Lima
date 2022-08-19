import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constantes/url"
import { useProtectPage } from "../../hook/UseProtectPage"
import useRequestData from "../../hook/UseRequestData"

export function TripDetails(){
    useProtectPage();

    const navigate = useNavigate(`${BASE_URL}trip/IYZoQodwIJ3ZFSMrmMhW`, 
        {headers:{
            auth: localStorage.getItem("token")
        }})

    
    
    const data = useRequestData()
    console.log(data)

    const goToLastPage = () =>{
        navigate(-1)
    }

    return(
        <>
            <h1>Detalhes das viagens</h1>
            <button onClick={goToLastPage} >Voltar</button>

        </>
    )
}