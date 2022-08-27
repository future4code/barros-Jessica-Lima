import styled from "styled-components";

export const ContainerTrips=styled.div`
    background-color: white;
    list-style: none;
    border-radius: 5px;
    box-shadow: 7px 7px 10px 0px rgba(50, 50, 50, 0.22);
    padding: 20px;
    margin: 20px;
    width: 400px;
    align-items: baseline;

    h2{
        color: blue;
        font-weight: 600;
        font-size: 20px;
    }

    p{
        color: gray;
    }
`
export const ContainerT=styled.div`
    align-items: center;
    main{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }
`