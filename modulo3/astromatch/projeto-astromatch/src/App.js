import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import MostrarUsuarios from './components/MostrarUsuarios/MostrarUsuarios';
import sim from "./img/coracao.png"
import nao from "./img/nao.png"

function App() {

  const [listaUsuarios, setListaUsuarios]=useState([])

  useEffect(()=>{
    getProfileToChoose();
  },[])

  // requisição GetProfileToChoose
  const getProfileToChoose=()=>{
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jesssica-lima-barros/person")
    .then((response)=>{
      //console.log(response.data)
      setListaUsuarios([response.data.profile])

    })
    .catch((error)=>{
      console.log(error.response)
    })
  }

  return (
    <div className="App">
        
        <MostrarUsuarios listaUsuarios={listaUsuarios}
        sim={sim}
        nao={nao}
        ></MostrarUsuarios>
    </div>
  );
}

export default App;
