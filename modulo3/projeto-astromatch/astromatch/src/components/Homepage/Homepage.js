import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { HomeContainer } from "./style";

export function Homepage(){

    // estado para escolher perfil para match
    const [escolherPerfil, setEscolherPerfil] = useState([])
    
    // Get Profile To Choose ----------------------
    function getProfileToChoose(){
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-lima-barros/person")
            .then((response)=>{
                setEscolherPerfil([response.data.profile]);
            })
            .catch((error)=>{
                console.log(error.response)
            })
    }


    // POST Choose Person ------------------------
    const choosePerson = (choice) =>{

        const body = {
            choice: choice,
            id: escolherPerfil.id,
        };
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-lima-barros/choose-person",
        {headers: {"Access-Control-Allow-Origin": "*"}}, body)
        .then((response)=>{
            getProfileToChoose();
        })
        .catch((erro)=>{
            console.log("Algo deu errado", erro.response)
        })
    }

    useEffect(()=>{
        getProfileToChoose();
      },[])

    // evento botoes sim e não        
    const ClickSim=(event)=>{event.preventDefault(); choosePerson(true)}
    const ClickNao=(event)=>{event.preventDefault(); choosePerson(false)}
    
    return(
        <HomeContainer>    
        <Card
            ClickSim={ClickSim}
            ClickNao={ClickNao}
            escolherPerfil={escolherPerfil}
        />

        </HomeContainer>
    )
}