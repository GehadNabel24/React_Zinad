import logo from './logo.svg';
import './App.css';
import {Footer} from './Componants/Footer'
import { Home } from './Componants/Home/home';
import {Products} from'./Componants/Products/Products'
function App() {
  return (   
    <>
      <Home/>
      <Products/>
      <Footer/>
    </>
    

  );
}

export default App;
