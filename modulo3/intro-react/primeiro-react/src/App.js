import perfil from './perfil.jpeg';
import './App.css';

function mensagem(){
  alert("Boa noite!")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá, eu sou a Jéssica!</h1>
      </header>
      <main>
        <img src={perfil} className="App-perfil" alt="perfil" />
        <p>Esse é o meu primeiro site react!</p>
        <button onClick={mensagem}>Aperte-me</button>
      </main>
      
    </div>
  );
}

export default App;
