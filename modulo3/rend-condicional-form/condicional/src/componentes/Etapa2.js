import React, { useState } from "react";
import { DivFormulario, Formulario } from "../style";

export default function Etapa2(){
    
    const [inputCurso, setInputCurso]=useState(null)
    const [inputUnidade, setInputUnidade]=useState(null)

    const AddCurso=(event)=>{
        setInputCurso(event.target.value)
    }

    const AddUnidade=(event)=>{
        setInputUnidade(event.target.value)
    }

    return(
        <DivFormulario>
                <h1>Etapa 2: Informações educacionais para quem está <br></br>cursando (ou já terminou) o ensino superior</h1>
            <Formulario>
                <label>1. Qual o curso:</label>
                <input type="text" value={inputCurso} onChange={AddCurso}></input>

                <label>2. Qual a unidade de ensino:</label>
                <input type="text" value={inputUnidade} onChange={AddUnidade}></input>

            </Formulario>
        </DivFormulario>
    )
}