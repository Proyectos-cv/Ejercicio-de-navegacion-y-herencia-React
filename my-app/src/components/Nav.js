import { BrowserRouter as Router, Route, Link, Routes, Outlet} from "react-router-dom";
import Iniciar from './Inicio'
import React from 'react'
function Nav() {
  return (
   
      <div>
        <nav id="navegacion">
          <ul>
            <li>
              {/* <a href="../../public/inicio.html">Inicio</a> */}
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/acerca">Acerca</Link>
            </li>
            <li>
              <a href="/servicios">Servicios</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </nav>
       {/*  <Routes>
          <Route path="/" element= {<Iniciar/>}/>
          <Route path="/acerca" element={<h1>Acerca de</h1>} />
        </Routes> */}
        <Outlet/>
      </div>

  );
}

export default Nav;
