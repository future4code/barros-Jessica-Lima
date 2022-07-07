import styled from "styled-components";

export const PostContainer=styled.div`
    border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px;

`
export const PostHeader=styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img{
        height: 30px;
        width: 30px;
        margin-right: 10px;
        border-radius: 50%;
    }


`
export const PostFooter=styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
`
export const PostPhoto=styled.img`
    width: 100%;

`

export const ComentConteiner=styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

export const InputComentario=styled.input`
    width: 100%;
    margin-right: 5px;
`

export const MainContainer=styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    ul{
        list-style: none;
    }
`

export const FormPost=styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    margin-top: 20px;
    width: 100%;

    input{
        margin-left: 20px;
        padding: 8px;
    }
    button{
        margin-left: 20px;
        border: none;
        padding: 10px;
        text-decoration: none;
        background-color: black;
        color: white;
        font-weight: bold;
        cursor: pointer;
        border-radius: 5px;
    }
`