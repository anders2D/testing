import { Link } from "react-router-dom";
import pet from "../imagenes/pet.jpg";
import pet1 from "../imagenes/pet1.jpg";
import pet2 from "../imagenes/pet2.jpg";
import pet3 from "../imagenes/pet3.jpg";
import pet4 from "../imagenes/pet4.jpg";
import pet5 from "../imagenes/pet5.jpg";
import cat from "../imagenes/cat.jpg";
import cat1 from "../imagenes/cat1.jpg";
import cat2 from "../imagenes/cat2.jpg";
import cat3 from "../imagenes/cat3.jpg";
import cat4 from "../imagenes/cat4.jpg";
import cat5 from "../imagenes/cat5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <ul className="header-ul">
        <a href="./" className="a-icon">
          <FontAwesomeIcon icon={faPaw} />
        </a>
        <li className="nav-a">
          <Link className="link-header" to="Adopta">
            ADOPTA
          </Link>
        </li>
        <li className="nav-a1">
          <Link className="link-header" to="Acerca">
            NOSOTROS
          </Link>
        </li>
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
      </ul>

      <div className="conta">
        <div className="txt">
          <a href="/Adopta" className="aux">
            <h2 className="header-h2"> PERRITOS </h2>
          </a>
          <p className="txt-p">
            <strong>
              Mas que una mascota se puede convertir en una fuente de alegria,
              su lealtad no tiene precio ni comparacion
            </strong>
          </p>
          <br></br>
          <br></br>
        </div>

        <br></br>
        <br></br>
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
        <div className="txt">
          <a href="/Adopta" className="aux">
            <h2 className="header-h2">GATICOS </h2>
          </a>
          <p className="txt-p">
            <strong>
            Qué regalo más grande que el amor de un gato. (Charles Dickens)<br></br>
            </strong>
            <br></br>
          </p>
          <br></br>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <div className="melogo">
          
          <div className="img" href="/">
            <img src={cat} alt="cat"></img>
          </div>
          <div className="img">
            <img src={cat1} alt="cat1"></img>
          </div>
          <div className="img">
            <img src={cat2} alt="cat2"></img>
          </div>
          <div className="img">
            <img src={cat3} alt="cat3"></img>
          </div>
          <div className="img">
            <img src={cat4} alt="cat4"></img>
          </div>
          <div className="img">
            <img src={cat5} alt="cat5"></img>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default Header;
