import styled from "styled-components";

/* HEADER */
export const WhatsLab=styled.div`
    font-size: 30px;
    font-weight: bold;
    color: #03bb85;
`
export const DivHeader=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #2e2e2e;
    padding-top: 40px;
    padding-bottom: 20px;
    img{
        width: 40px;
        margin-left: 6px;
    }

    *{
        background-color: #2e2e2e;

    }
`
/* BODY */
export const DivBody=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2e2e2e;
`

export const DivChat=styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    width: 800px;
    height: 500px;
`
export const NomeRemetente=styled.h3`
    color: #03bb85
  
`

export const DivCampoMensagem=styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
  
`


export const DivFormulario=styled.div`
   margin-top: 400px;
   margin-bottom: 10px;
   display: flex;

`
export const DivRemetente=styled.div`
    display: flex;
    input{
        margin-left: 10px;
        width: 170px;
        padding-left: 10px;
        border-radius: 4px;
        border-style: solid;
        border-color: #03bb85;
   }
  
   button{
        margin-left: 2px;
        padding: 10px;
        background-color: #03bb85;
        border-style: solid;
        border-color: #03bb85;
        color: white;
        font-weight: bold;
        border-radius: 4px;
   }
`
export const DivMensagem=styled.div`
    display: flex;
    input{
        margin-left: 10px;
        width: 430px;
        padding-left: 10px ;
        border-radius: 4px;
        border-style: solid;
        border-color: #03bb85;
   }
  
   button{
        margin-left: 2px;
        padding: 10px;
        background-color: #03bb85;
        border-style: solid;
        border-color: #03bb85;
        color: white;
        font-weight: bold;
        border-radius: 4px;
   }
`

/* FOOTER */
export const DivFooter=styled.div`
    font-size: 12px;
    color: #03bb85;
    padding-top: 36px;
    padding-bottom: 20px;
    background-color: #2e2e2e;

`