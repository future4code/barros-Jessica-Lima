import React, { useState } from 'react'
import { ComentConteiner, InputComentario } from '../../style'


export function SecaoComentario(props) {
	return (
		<ComentConteiner>
			<InputComentario className='InputComentario'
				placeholder={'Comentário'}
				value={props.resposta}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</ComentConteiner>
	)
}