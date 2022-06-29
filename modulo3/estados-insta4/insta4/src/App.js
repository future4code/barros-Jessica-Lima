import React from 'react';
import Post from './components/Post/Post';
import './style.css'
import perfil2 from './img/perfil2.jpg'
import perfil3 from './img/perfil3.jpeg'
import post2 from './img/post2.webp'
import post3 from './img/post3.jpg'

function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
           <Post
            nomeUsuario={'pikachu'}
            fotoUsuario={perfil2}
            fotoPost={post2}
          />
           <Post
            nomeUsuario={'ash'}
            fotoUsuario={perfil3}
            fotoPost={post3}
          />
  </div>
)

}


export default App;
