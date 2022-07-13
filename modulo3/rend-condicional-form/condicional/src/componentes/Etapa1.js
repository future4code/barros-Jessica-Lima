import React, { useState } from "react";
import { DivFormulario, Formulario, BotaoAvancar } from "../style";
import Etapa2 from "./Etapa2";
import Etapa3 from "./Etapa3";

export default function Etapa1(){
    
    const [inputNome, setInputNome]=useState(null)
    const [inputIdade, setInputIdade]=useState(null)
    const [inputEmail, setInputEmail]=useState(null)
    const [escolaridade, setEscolaridade]=useState(
        [
        {nivel: null}
    ])

    const AddNome=(event)=>{
        setInputNome(event.target.value)
    }

    const AddIdade=(event)=>{
        setInputIdade(event.target.value)
    }

    const AddEmail=(event)=>{
        setInputEmail(event.target.value)
    }

    const AddEscolaridade=(event)=>{
        setEscolaridade(event.target.value)
    }

    const [select1] = "";
    const [select2] = "";
    const [select3] = "";
    const [select4] = "";


    return(
        <DivFormulario>
                <h1>Dados gerais:</h1>
            <Formulario>
                <label>1. Qual o seu nome:</label>
                <input type="text" value={inputNome} onChange={AddNome}></input>

                <label>2. Qual sua idade:</label>
                <input type="text" value={inputIdade} onChange={AddIdade}></input>

                <label>3. Qual seu e-mail:</label>
                <input type="text" value={inputEmail} onChange={AddEmail}></input>

                <label>4. Nível de escolaridade:</label>
                <select className="escolaridade" value={escolaridade} onChange={AddEscolaridade}>
                    <option value={select1} >Ensino Médio Incompleto</option>
                    <option value={select2} >Ensino Médio Completo</option>
                    <option value={select3} >Ensino Superior Incompleto</option>
                    <option value={select4} >Ensino Superior Completo</option>
                </select>

            </Formulario>
        </DivFormulario>
    )
}