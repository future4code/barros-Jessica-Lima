import { useState } from "react";
import { DivChat, DivFooter, DivForm, DivMensagens, MainContainer } from "./style";

export default function Chat(){

    const [inputNome, setInputNome]=useState("")
    const [inputMensagem, setInputMensagem]=useState("")

    const [arrayChat, setArrayChat]=useState([
        {nome: "", mensagem: ""}
    ])

    const arrayChats= arrayChat.map((item, index)=>{
        return(
            <DivMensagens key={index}>
                <h4>{item.nome} </h4>
                <p>{item.mensagem}</p>
                <button onClick={()=>{apagarMensagem(index)}}>x</button>
            </DivMensagens>
        )
    })

    const AddNome = (event)=>{
        setInputNome(event.target.value)
    }

    const AddMensagem = (event)=>{
        setInputMensagem(event.target.value)
    }

    const enviarMensagem=(event)=>{
        event.preventDefault()
        const atualizarArray = [...arrayChat,{nome: inputNome, mensagem: inputMensagem}]
        setArrayChat(atualizarArray)
        setInputMensagem("")
    }   
    // REMOVER MENSAGEM
    const apagarMensagem=(indexApagar)=>{
        const atualizarArray=arrayChat.filter((item, index)=>{
            return index !== indexApagar
        })
        setArrayChat(atualizarArray)
    }


    // ENVIAR COM ENTER
    document.addEventListener("keypress", function(e){
        if(e.key === "Enter"){
            const btn = document.querySelector("#enviar")
            btn.Click();
        }
    })

    return(
        <MainContainer>
            <DivFooter>
                <h1>WhatsLab</h1>
            </DivFooter>
        <DivChat>
        <ul>
            {arrayChats}
        </ul>
        </DivChat>
        <DivForm>
            <input className="nome" type="text" required placeholder="Nome" value={inputNome} onChange={AddNome}></input>
            <input id="enviar" className="mensagem" type="text" required placeholder="Mensagem" value={inputMensagem} onChange={AddMensagem}></input>
            <button onClick={enviarMensagem}>Enviar</button>
        </DivForm>

        
        </MainContainer>
       
    )

} 