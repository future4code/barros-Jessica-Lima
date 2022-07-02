import React from "react";
import {ContainerBodyy, DivCentro, DivDireita, DivEsquerda, DivFormulario, Rodape} from "./style";

export default function ContainerBody(){
    return(
        <ContainerBodyy>
             <DivCentro>   
                <DivFormulario>
                    <input className="InputMensagem"
                        placeholder="Remetente..."
                    />
                    <button>Procurar</button>

                    <input className="InputMensagem"
                        placeholder="Mensagem..."
                    />
                    <button>Enviar</button>
                </DivFormulario>
            </DivCentro>
            <Rodape>Copyright 2022 Labenu All rights reserved, R. Pais Leme, 215, Conjunto 820 Pinheiros. CEP 05424-150</Rodape>
        </ContainerBodyy>
    )

}