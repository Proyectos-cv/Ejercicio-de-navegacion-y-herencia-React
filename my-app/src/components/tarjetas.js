

import { Datos } from "../conexion";

function Tarjetas() {
 
    Datos.map((dato) => {return <div> console.log(dato.nombre)</div>});


 /*  return (<div>{
    Datos.map((d) => {
    <div>
        <h1>{d.nombre}</h1>
    </div>
  })}
  </div>) */
}

export default Tarjetas;
