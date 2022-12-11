import Header from './Header/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Adopta from './Adopta';
import Mision from './componentes/Mision';
import Acerca from './componentes/Acerca';



function App() {
  return (
    
    <div className="App" >
       
      <BrowserRouter>
      <Header/>
        <Routes>
        
          <Route path="/Adopta" element={<Adopta/>}/>
          <Route path="/Mision" element={<Mision/>}/>
          <Route path="/Acerca" element={<Acerca/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
