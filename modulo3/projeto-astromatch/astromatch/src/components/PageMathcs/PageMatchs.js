import axios from "axios";
import { useEffect, useState } from "react";
import { LimparMatchs } from "../LimparMatchs/LimparMatchs";

export function PageMatchs(){

    const [listaMatches, setListaMatches]=useState([])

    const getMathces=()=>{
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-lima-barros/matches")
            .then((response)=>{
                setListaMatches(response.data.matches)
            })
            .catch((erro)=>{
                console.log(erro.response)
            })
    }

    useEffect(()=>{
        getMathces();
    },[listaMatches])

    return(
        <>
        <p>pagina de matchs</p>
        <LimparMatchs/>
        {listaMatches.map((user)=>{
        return(
            <div key={user.id}>
                    <img src={user.photo}/>
                    <h1>{user.name}, {user.age}</h1>
                    <p>{user.bio}</p>
            </div>
        )
    })}
        </>
    )
}