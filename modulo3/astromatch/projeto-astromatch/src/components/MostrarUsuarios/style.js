import styled from "styled-components";

export const TelaUsuarios=styled.div`
    display: grid;
    justify-content: center;
    align-items: center;

    h1{
        color: white;
    }
`

export const ContainerCard=styled.div`
    box-shadow: 0 0 8px gray;
    background-color: white;
    border-radius: 2%;
    margin-bottom: 38px;
    height: 500px;
    width: 400px;
`

export const ContainerPerfil=styled.div`
    position: relative;

    img{
        height: 400px;
        width: 400px;
        border-radius: 2%;

    }

    h4{
        position: absolute;
        font-size: 26px;
        left: 20px;
        top: 280px;
    }
    p{
        position: absolute;
        left: 20px;
        top: 340px;
        font-size: 14px;
        text-align: left;
    }

`

export const ContainerImg=styled.div`
    background-image: ${(props) => props.fundo};
    height: 500px;
    width: 400px;

`

export const DivBotoes=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -84px;
`

export const DivSim=styled.div`
    box-shadow: 0 0 8px gray;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: white;

    .sim{
        width: 50px;
        padding-top: 13px;
        padding-bottom: 7px;
        padding-left: 10px;
        padding-right: 10px;
        align-items: center;
        justify-content: center;

    }
`

export const DivNao=styled.div`
    box-shadow: 0 0 8px gray;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin-left: 30px;

    .nao{
        width: 30px;
        padding: 20px;
        align-items: center;
        justify-content: center;

    }
`
export const VerMatches=styled.button`
    padding: 10px;
    font-size: 16px;
    margin-bottom: 36px;
    margin-top: -24px;
    background-color: white;
    border-style: none;
    font-weight: bold;
    border-radius: 4px;
    color: #fb4b63;

    :hover{
        background-color: yellow;
        box-shadow: 0 0 8px gray;

    }
`