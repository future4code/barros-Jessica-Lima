import './App.css';
import Header from './componentes/Header'
import Body from './componentes/Body'
import Footer from './componentes/Footer'
import IconeChat from './img/chat.png'

function App() {
  return (
    <div className="App">
      <Header
      imagem={IconeChat}
      />
      <Body/>
      <Footer/>
      
    </div>
  );
}

export default App;
