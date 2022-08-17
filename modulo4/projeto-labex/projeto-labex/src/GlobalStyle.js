import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle` 
    :root {
        --soft-white: #f2f2f2;
        --green: #8bcf21;
        --yellow: #ffcb15;
        --dark: #383b40;
        --deep-blue: #011640;
        --deep-blue-secondary: #010f2b;


    body{
        background: var(--soft-white);
    }

 
    h1{
        padding-top: 20px;
        color: #03bb85;
    }

    button{
        padding: 8px 20px;
        border-style: none;
        background-color: gray;
        font-weight: 600;
        border-radius: 5px;
        color: white;
        margin: 5px;
        margin-top: 20px;

    }

    button:hover{
        background-color: #03bb85;
        
    }

    input{
        margin-top: 10px;
        margin-bottom: 10px;
        border-style: none;
        width: 8px 160px;
        padding-left: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 170px;
        font-weight: 600;
        border-radius: 5px;
        color: black;
    }
    select{
        width: 360px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        border-radius: 5px;
        background-color: white;
    }

    }
`