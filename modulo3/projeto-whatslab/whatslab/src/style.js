import styled from "styled-components";

export const MainContainer=styled.div`
    display: grid;
    justify-content: center;
`

export const DivFooter=styled.div`
    text-align: center;
    color: orange;
`

export const DivChat=styled.div`
    width: 700px;
    height: 520px;
    border-radius: 6px;
    background-color: #f9eac3;
`
export const DivForm=styled.form`
    bottom: 30px;
    position: fixed;
    width: 100%;
    text-align: center;

    .nome{
        padding: 5px 8px;
        margin-right: 10px;
        border-color: orange;
        border-style: solid;
        border-radius: 5px;
    }

    .mensagem{
        padding: 5px 120px;
        margin-right: 10px;
        border-color: orange;
        border-style: solid;
        border-radius: 5px;

    }
    button{
        padding: 6px 15px;
        margin-right: 10px;
        border: none;
        background-color: orange;
        color: white;
        border-radius: 5px;

    }
`

export const DivMensagens=styled.div`
    display: flex;
    align-items: center;
    h4{
        color: orange;
    }

    p{
        margin-left: 10px;

    }
    button{
        margin-left: 20px;
        background-color: none;
        border: none;
    }
    button:hover{
        display: flex;
        background-color: orange;
        
    }


`