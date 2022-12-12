import React from 'react';
import { Player } from 'video-react';


const aux =()=>{

    return (
      <div className="formulario">
        <div className="div-form">
          <h2 className="h2">Adopcion</h2>
          <br></br>
          <p ><strong>Para realizar la adopcion solo debes !!!completar el formulario¡¡¡</strong> </p>
          <br></br>
          <form action="test.php" method="get">
              <p><strong>Nombre:</strong> <input type="text" name="name-dueño" size="30"></input></p>
              <br></br>
              <p><strong>Lugar de residencia: </strong> <input type="text" name="residencia-dueño" size="20"></input></p>
              <br></br>
              <p><strong>Edad:  </strong><input type="number" name="age-dueño" size="3" min="2000"></input></p>
              <br></br>
              <p><strong>Por que quieres adoptar? : </strong><textarea type="text" name="comentario-dueño" size="60"></textarea></p>
              <br></br>
              <h4>QUE SEXO DESEA </h4>
              <br></br>
              <p><strong>Sexo :</strong><input type="radio" value="m"></input>Macho</p>
              <p><strong>Sexo :</strong><input type="radio" value="h"></input>Hembra</p>
              <br></br>
              <p className="form-p">
              <input type="submit" value="Enviar" className="form-input"></input>
              <input type="reset" value="Borrar" className="form-input"></input>
            </p>

              
          </form>
        </div>
       
          <div className='prueba'>
            <Player >
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
          </div>
        </div>
        
        
      
    );
  }
export default aux;


