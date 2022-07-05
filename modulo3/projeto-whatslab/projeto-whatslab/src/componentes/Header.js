import React from "react";
import { WhatsLab, DivHeader } from "../style";

export default function Headers(props){
    return(
            <DivHeader>
                <WhatsLab>WhatsLab</WhatsLab>
                <img src={props.imagem} alt="icone-chat"/>
            </DivHeader>
    )
}