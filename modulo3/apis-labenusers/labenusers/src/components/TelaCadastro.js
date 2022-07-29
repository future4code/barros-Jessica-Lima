import React, { useState } from "react";
import axios from "axios";

export default function TelaCadastro(){
    
    const [inputNome, setInputNome] = useState("")
    const [inputEmail, setInputEmail] = useState("")

    const AtNome = (event) =>{
        setInputNome(event.target.value)
    }

    const AtEmail = (event) =>{
        setInputEmail(event.target.value)
    }
    // axios ------------------------------------------------
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const myHeaders = {
        headers:{
            Authorization: "jessica-lima-barros"
        }
    };
    // post
    const body = {
        name: inputNome,
        email: inputEmail
    };

    // botão adicionar usuario
    const AddUsuario = (event) =>{
        event.preventDefault();
        axios.post(url, body, myHeaders).then(()=>{
            alert("Usuário cadastrado com sucesso!")
            setInputEmail("")
            setInputNome("")
        })
        .catch((erro)=>{
            alert("Ops, algo deu errado!")
        })
    }

    return(
        <div>
            <h1>Cadastro de usuários</h1>
            <input type="text" placeholder="Nome" value={inputNome} onChange={AtNome}></input>
            <input type="text" placeholder="E-mail" value={inputEmail} onChange={AtEmail} ></input>
            <button onClick={AddUsuario}>Criar usuário</button>
        </div>
    )
}