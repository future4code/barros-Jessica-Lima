import React, { useState } from "react";
import { DivBody, DivCampoMensagem, DivChat, DivFormulario, DivMensagem, DivRemetente, NomeRemetente } from "../style";

export default function Body(){

const [inputRemetente, setInputRemetente] = useState ("")
const [inputMensagem, setInputMensagem] = useState("")

const handleInputRemetente = (event) =>{
    setInputRemetente(event.target.value)
}

const handleInputMensagem = (event) =>{
    setInputMensagem(event.target.value)
}

    return(

        <DivBody>
            <DivChat>
               <NomeRemetente>Remetente Jéssica</NomeRemetente>
                <DivCampoMensagem>
                    <DivFormulario>
                        <DivRemetente>
                            <input className="InputRemetente"
                                placeholder="Remetente..."
                                value={inputRemetente}
                                onChange={handleInputRemetente}
                            />
                            <button>Buscar</button>

                        </DivRemetente>
                        <DivMensagem>
                            <input className="InputMensagem"
                                placeholder="Escreva uma mensagem..."
                                value={inputMensagem}
                                onChange={handleInputMensagem}
                            />
                            <button>Enviar</button>
                        </DivMensagem>
                    </DivFormulario>    
                </DivCampoMensagem>
            </DivChat>    
        </DivBody>
    )
}