import React from 'react';
import Post from './components/Post/Post';
import perfil2 from './img/perfil2.jpg'
import perfil3 from './img/perfil3.jpeg'
import post2 from './img/post2.webp'
import post3 from './img/post3.jpg'
import { MainContainer } from './style';

function App() {

  const arrayPosts=[
    {nomeUsuario: "paulinha",
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/200/150"},

    {nomeUsuario: "paulinha",
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/200/150"},

    {nomeUsuario: "paulinha",
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/200/150"},
    
  ]
  const componentePosts = arrayPosts.map((elemento, index)=>{
    return(
      <li key={index}> 
        <Post nomeUsuario={elemento.nomeUsuario}
          fotoUsuario={elemento.fotoUsuario}
          fotoPost={elemento.fotoPost} /></li>
    )
  })

return(
  <MainContainer>
    <ul>{componentePosts}</ul>
  </MainContainer>
)

}


export default App;
