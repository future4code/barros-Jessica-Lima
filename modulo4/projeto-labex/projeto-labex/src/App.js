import './App.css';
import { Router } from './componentes/Router/Router';
import { GlobalStyle } from './GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react';
function App() {

  return (
    <div className="App">
      
      <ChakraProvider>
        <GlobalStyle/>
        <Router/>
          
      </ChakraProvider>

    </div>
  )
}

export default App;
