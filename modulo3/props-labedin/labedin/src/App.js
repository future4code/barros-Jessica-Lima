import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import perfil from './img/perfil.jpg'
import email from './img/email.png'
import endereco from './img/endereco.png'
import vermais from './img/vermais.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={perfil} 
          nome="Jéssica Oliveira de Lima" 
          descricao="Olá, eu sou a Jéssica, porém prefiro Jess. Sou designer gráfica, social media e aluna da Labenu no curso de Desenvolvimento Web Full Stack. Adoro jogar Pokemon GO nas horas vagas."
        />
        
        <ImagemButton 
          imagem={vermais} 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={email}
          texto="Email: jessicalimabitt@gmail.com"
          />

        <CardPequeno
          imagem={endereco}
          texto="Rua Labenu"
          />
          
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

     

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
