import { Datos } from "./conexion";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { useState, useEffect } from "react";
import Aplicacion from "./App";
import {BrowserRouter as Router} from 'react-router-dom'

export const Contextoprincipal = React.createContext();

function Contexto() {
  const [valores, setValores] = useState([]);

  useEffect(() => {
    setValores(Datos);
    /* console.log(Datos); */
  }, []);
  if (valores === undefined) {
    return <div>no hay valores</div>;
  } else {
    return <Aplicacion />;
  }

  /* return (
      <div>
        {valores.map((item, index) => (
          <div key={index}>
            <p>Nombre: {item.nombre}</p>
            <p>Apellido: {item.apellido}</p>
            <p>Edad: {item.edad}</p>
          </div>
        ))}
      </div>
    ); */
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(
  <Contextoprincipal.Provider value={Datos}>
    <Router>
    <Contexto />
    </Router>
  </Contextoprincipal.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. TPLearn more: https://bit.ly/CRA-vitals
reportWebVitals();
