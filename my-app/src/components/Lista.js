import { useContext, useEffect, useState } from "react";
import { Contextoprincipal } from "../index";
import { Cards } from "./cards";

export function Lista() {
  const Dato = useContext(Contextoprincipal);
  const [valores, setValores] = useState([]);
  useEffect(() => {
    setValores(Dato);
  }, []);
  return (
    <div id="lista">
      {valores.length > 0 ? (
        valores.map((item, index) => (
          <div id="card" key={index}>
            <Cards
              nombre={item.nombre}
              apellido={item.apellido}
              edad={item.edad}
            />
          </div>
        ))
      ) : (
        <p>No hay datos para mostrar.</p>
      )}
    </div>
  );
}
