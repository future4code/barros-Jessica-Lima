import React, { useState } from "react";
import { DivFormulario, Formulario } from "../style";

export default function Etapa3(){
    
    const [inputGraduacao, setInputGraduacao]=useState(null)
    const [cursoComplementar, setCursoComplementar]=useState(
        [
        {curso: null}
    ])

    const AddGraduacao=(event)=>{
        setInputGraduacao(event.target.value)
    }

    const AddCursoComplementar=(event)=>{
        setCursoComplementar(event.target.value)
    }

    return(
        <DivFormulario>
                <h1>Etapa 3: Informações sobre quem não se formou <br></br> no ensino superior nem está cursando</h1>
            <Formulario>
                <label>1. Por que você não terminou um curso de graduação?</label>
                <input type="text" value={inputGraduacao} onChange={AddGraduacao}></input>

                <label>2. Você fez algum curso complementar?</label>
                <select className="escolaridade">
                    <option value={cursoComplementar.curso} onChange={AddCursoComplementar}>Curso técnico</option>
                    <option value={cursoComplementar.curso} onChange={AddCursoComplementar}>Cursos de inglês</option>
                    <option value={cursoComplementar.curso} onChange={AddCursoComplementar}>Não fiz curso complementar</option>
                </select>

            </Formulario>
        </DivFormulario>
    )
}