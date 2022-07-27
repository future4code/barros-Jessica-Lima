import { useState } from 'react';
import './App.css';
import Agradecimento from './componentes/Agradecimento';
import Etapa1 from './componentes/Etapa1';
import Etapa2 from './componentes/Etapa2';
import Etapa3 from './componentes/Etapa3';
import { BotaoAvancar } from './style';

function App() {
 
  const [etapa, setEtapa]=useState(1)
  let avancar;

    switch (etapa){
      case 1:
        avancar = <Etapa1/>
      case 2:
        avancar = <Etapa2/>
      case 3:
        avancar = <Etapa3/>
      case 4:
        avancar = <Agradecimento/>
    break;
    default:
      <Etapa1/>
    }

  function ProximaEtapa(){
 
    setEtapa(etapa +1)
  }
  
  return (

    <div className="App">
    <Etapa1/>
    <BotaoAvancar onClick={ProximaEtapa}>Avançar etapa</BotaoAvancar>
    <Etapa2/>
    <BotaoAvancar onClick={ProximaEtapa}>Avançar etapa</BotaoAvancar>
    <Etapa3/>
    <BotaoAvancar onClick={ProximaEtapa}>Avançar etapa</BotaoAvancar>
    <Agradecimento/>
    </div>
  );
}

export default App;

/*
{avancar}
      <BotaoAvancar onClick={ProximaEtapa}>Avançar etapa</BotaoAvancar>
      */