import React from 'react';
import "./CardPequeno.css"

function CardPequeno (props){
    return(
        <div className="card-email">
        <img src={props.imagem } alt=""/>
        <p>{ props.texto }</p>
    </div>
    )
}

export default CardPequeno; 