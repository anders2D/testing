import { Link } from "react-router-dom";
import pet from "../imagenes/pet.jpg";
import pet1 from "../imagenes/pet1.jpg";
import pet2 from "../imagenes/pet2.jpg";
import {
  FontAwesomeIcon,
  
} from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";





const Header = () => {
  return (
    <div className="header">
      
      <div className="header-nav">
      
        <ul className="header-ul">
        <a href="./" className="a-icon">
              <FontAwesomeIcon icon={faPaw} />
        </a>
          <li className="nav-a">
            <Link className="link-header" to="Adopta">
              ADOPTA
            </Link>
          </li>
          <li className="nav-a">
            <Link className="link-header" to="Acerca">
              SOBRE NOSOTROS
            </Link>
          </li>
          <li className="nav-a">
            <Link className="link-header" to="Acerca">
              IMAGENES
            </Link>
          </li>
    
        </ul>
    </div>
    <div className="div-text">
      <a href="/Adopta">      <h2 className="header-h2">  PERRITOS </h2>
      </a>
      <a href="/"><h2 className ="header-h22"> NOTICIAS </h2></a>
      
    </div>
      
      <div className="container">
      <div className="melogo">
          <div className="img" href="/">
            <img src={pet} alt="pet"></img>
          </div>
          <div className="img">
            <img src={pet1} alt="pet1"></img>
          </div>
          <div className="img">
            <img src={pet2} alt="pet2"></img>
          </div>  
        </div>
      </div>
        

        
      
    </div>
  );
};
export default Header;
