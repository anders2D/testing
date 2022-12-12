import Header from './header/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Mision from './componentes/Mision';
import Fom from './header/Fom';



function App() {
  return (
    
    <div className="App" >
    
      
      <BrowserRouter>
      <Header/>
        <Routes>
        
          <Route path="/Fom" element={<Fom/>}/>
          <Route path="/Mision" element={<Mision/>}/>
          
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
