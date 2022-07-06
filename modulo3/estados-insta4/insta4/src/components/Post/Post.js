import React, {useState} from 'react'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { SecaoCurtida } from '../SecaoCurtida/SecaoCurtida'
import { PostContainer, PostFooter, PostHeader, PostPhoto } from '../../style'

function Post(props){
  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [respostaUsuario, setrespostaUsuario] = useState("")

  let componenteCurtida

  const onClickCurtida = () => {
    setCurtido(!curtido);
    if (curtido) {
      setnumeroCurtidas(numeroCurtidas - 1);
    } else {
      setnumeroCurtidas(numeroCurtidas + 1);
    }
    console.log("Curtiu!");
  }

  const handlerespostaUsuario = (event) =>{
    setrespostaUsuario(event.target.value)
    console.log(respostaUsuario)

  }

  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = 
      <SecaoComentario aoEnviar={aoEnviarComentario} resposta={respostaUsuario} 
      onChangeComentario={handlerespostaUsuario} />

    }

    console.log(comentando)
  }

  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} valor={respostaUsuario} onChangeComentario={handlerespostaUsuario}/>
    }

  return(
    <PostContainer>
      <PostHeader>
        <img className = 'UserPhoto' src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto className = 'PostPhoto'src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>

      {componenteComentario}
      {componenteCurtida}

      </PostContainer>
  )
}


export default Post 