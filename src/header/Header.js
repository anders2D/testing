import { Link } from "react-router-dom";
import pet from "../imagenes/pet.jpg";
import pet1 from "../imagenes/pet1.jpg";
import pet2 from "../imagenes/pet2.jpg";
import pet3 from "../imagenes/pet3.jpg";
import pet4 from "../imagenes/pet4.jpg";
import pet5 from "../imagenes/pet5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";




const Header = () => {

  return (
    <div className="header">
      <ul className="header-ul">
        <li>
          <a href="./" className="a-icon" title="icon">
            <FontAwesomeIcon icon={faPaw} />
          </a>
        </li>
        <li className="nav-a">
          <Link className="link-header" to="Fom">
            Adopcion
          </Link>
        </li>
        <li className="nav-a1">
          <Link className="link-header" to="Mision">
            Imagenes Random
          </Link>
        </li>
        <li>
          <div className="texto">
            <a href="https://tuperro.com/?sort=latest" className="header-p">
              <br></br>
              <p className="header-p">
                <strong>
                  Ves algo una mascota de tu interes?<br></br>
                </strong>
                !El momento es ahora, adopta una mascota!
              </p>
            </a>
          </div>
        </li>
        
      </ul>
        <div className="melogo">
          <div className="img" >
            <img src={pet} alt="pet"></img>
          </div>
          <div className="img">
            <img src={pet1} alt="pet1"></img>
          </div>
          <div className="img">
            <img src={pet2} alt="pet2"></img>
          </div>
          <div className="img">
            <img src={pet3} alt="pet1"></img>
          </div>
          <div className="img">
            <img src={pet4} alt="pet1"></img>
          </div>
          <div className="img">
            <img src={pet5} alt="pet1"></img>
          </div>
        </div>
        <div className="fotosdogs">
          <div className="img" >
            <img src={pet} alt="pet"></img>
          </div>
          <div className="img">
            <img src={pet1} alt="pet1"></img>
          </div>
          <div className="img">
            <img src={pet2} alt="pet2"></img>
          </div>
          <div className="img">
            <img src={pet3} alt="pet1"></img>
          </div>
          <div className="img">
            <img src={pet4} alt="pet1"></img>
          </div>
          <div className="img">
            <img src={pet5} alt="pet1"></img>
          </div>
        </div>
    </div>
  );
};
export default Header;
