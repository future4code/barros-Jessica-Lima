import React from "react"

export function SecaoCurtida(props) {
	return (
		<div className='CurtidaContainer'>
			<input className='InputCurtida'
				placeholder={'Curtida'}
				value={''}
			/>
			<button onClick={props.iconeCurtida}></button>
		</div>
	)
}