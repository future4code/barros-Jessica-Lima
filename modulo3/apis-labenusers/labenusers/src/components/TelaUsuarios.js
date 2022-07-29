import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TelaUsuarios(){

    const [usuarios, setUsuarios] =useState([])

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const myHeaders = {
        headers:{
            Authorization: "jessica-lima-barros"
        }
    };  

    const urlDel=("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id");
    const headersDel={    
        headers:{
            Authorization: "jessica-lima-barros"
        }
    }

    useEffect(() => {
        getAllUsers();
      }, []);

    // dell
    const dellUser = (indexApagar) =>{
        const deletarUser = usuarios.filter(
            (item)=> item.id  === indexApagar
        );

        axios.delete(urlDel, headersDel, deletarUser.id).then((response)=>{
            alert("Usuário deletado")
            getAllUsers();
        })
        .catch((erro)=>{
            alert("Ops, algo deu errado")
        })

        setUsuarios(deletarUser)
    }

    // get
    const getAllUsers = () =>{
        axios.get(url, myHeaders).then((response)=>{
            setUsuarios(response.data)
        })
        .catch((erro)=>{
            console.log(erro.response)
        })
    }
    getAllUsers();
    
    return(
        <>

        <h1>Lista de usuários</h1>
        {usuarios.map((u) => {
        return (
            <div>
                <p>Nome:<li key={u.id}>{u.name}</li></p>
                <button onClick={dellUser}>x</button>
            </div>
        )
        })}
        
        </>
    )
}