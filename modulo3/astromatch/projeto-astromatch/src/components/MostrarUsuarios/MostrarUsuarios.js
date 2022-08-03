import React, { useEffect } from "react";
import { ContainerCard, ContainerPerfil, DivTextos, FotoPerfil, TelaUsuarios, ContainerImg, DivBotoes, DivSim, DivNao, VerMatches } from "./style";

export default function MostrarUsuarios(props){

    const usuario = props.listaUsuarios.map((user)=>{
        return(
            <div>
                <ContainerImg>
                    <img src={user.photo}/>
                </ContainerImg>
                <h4>{user.name}, {user.age}</h4>
                <p>{user.bio}</p>
            </div>
        )
    })



    return(
        <TelaUsuarios>
            <h1>astromatch</h1>
            <ContainerCard>
                <ContainerPerfil>

                    {usuario}
                        
                </ContainerPerfil>

                <DivBotoes>
                    <DivSim>
                        <a href="#"> <img className="sim" src={props.sim}/> </a>
                    </DivSim>
                    <DivNao>
                        <a href="#"> <img className="nao" src={props.nao}/> </a>
                    </DivNao>
                </DivBotoes>

            </ContainerCard>

            <VerMatches>Matches</VerMatches>
        </TelaUsuarios>
    )
}