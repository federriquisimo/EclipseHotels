
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Bookingscrren from './screens/Bookingscrren';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import EnContruccion from './screens/EnContruccion';
import Inicio from './screens/Inicio';




function App() {
  return (
    <div className="App">
      <Navbar/>

      <BrowserRouter>
         <Routes>
         <Route path='/' exact Component = {Inicio}/>
          <Route path='/home' exact Component = {Homescreen}/>
          <Route path='/book/:roomid/:fromdate/:todate' exact Component={Bookingscrren}/>
          <Route path='/register' exact Component={Registerscreen}/>
          <Route path='/login' exact Component={Loginscreen}/>
          <Route path='/enConstruccion/:totalamount' exact Component={EnContruccion}/>
        </Routes>
        
        </BrowserRouter>

      
      
          
    </div>
  );
}

export default App;
