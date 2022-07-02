import styled from "styled-components"; 

export const ContainerHeader=styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    margin: 0px;
    background-color: #1b1b1b;
    height: 100px;
   
`
export const Titulo=styled.h1`
    color: orange;
    font-size: 40px;
`

export const ContainerBodyy=styled.div`
    background-color: orange;
    width: 100%;
    height: 540px;
`

export const DivCentro=styled.div`
    margin: auto;
    width: 900px;
    height: 540px;
    background-color: white;

    input, button{
        padding: 6px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    button{
        background-color: orange;
        color: white;
        border-style: solid;
        border-color: orange;
    }

`

export const ContainerChat=styled.div`
    margin-top: -230px;
    display: grid;
    grid-template-rows: 2fr 4fr;
    width: 600px;
    height: 400px;
    background-color: white;
    border-radius: 12px;
    padding: 20px;
`
export const Rodape=styled.div`
    font-size: 12px;
    color: gray;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 400px;
    
`
export const DivFormulario=styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    margin: auto;
    padding-top: 450px;
    width: 600px;
    height: 50px;   
`
