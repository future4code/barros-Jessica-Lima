import React, { useState } from 'react';
import Post from './components/Post/Post';
import perfil2 from './img/perfil2.jpg'
import perfil3 from './img/perfil3.jpeg'
import post2 from './img/post2.webp'
import post3 from './img/post3.jpg'
import { FormPost, MainContainer } from './style';

function App() {

  const [post, setPost]=useState([
    {nomeUsuario: "paulinha",
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/200/150"},

    {nomeUsuario: "paulinha",
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/id/1/200/150"},

    {nomeUsuario: "paulinha",
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/seed/picsum/200/150"},
    
  ])

  const componentePosts = post.map((elemento, index)=>{
    return(
      <li key={index}> 
        <Post nomeUsuario={elemento.nomeUsuario}
          fotoUsuario={elemento.fotoUsuario}
          fotoPost={elemento.fotoPost} /></li>
      
    )
  })

  const [inputName, setInputName] = useState("")
  const [inputFotoPerfil, setInputFotoPerfil] = useState("")
  const [inputFotoPost, setInputFotoPost] = useState("")

  const AddNome = (event)=>{
    setInputName(event.target.value)
  }

  const AddFotoPerfil = (event)=>{
    setInputFotoPerfil(event.target.value)
  }

  const AddFotoPost = (event)=>{
    setInputFotoPost(event.target.value)
  }

  const publicar=(event)=>{
    event.preventDefault()
    const NovoPost = [...post,{nomeUsuario: inputName, fotoUsuario: inputFotoPerfil, fotoPost: inputFotoPost}]
    setPost(NovoPost)
    setInputName("");
    setInputFotoPerfil("");
    setInputFotoPost("");
  }
return(
  <>

  <FormPost>
  <h2>Novo post</h2>
      
        <input type='text' required placeholder='Nome' value={inputName} onChange={AddNome}></input>
        <input type='text' required placeholder='Foto de perfil' value={inputFotoPerfil} onChange={AddFotoPerfil}></input>
        <input type='text' required placeholder='Foto post' value={inputFotoPost} onChange={AddFotoPost}></input>
        <button onClick={publicar}>Publicar</button>
     
  </FormPost>

  <MainContainer>
    <ul>{componentePosts}</ul>
  </MainContainer>


  </>
)


}

export default App;
