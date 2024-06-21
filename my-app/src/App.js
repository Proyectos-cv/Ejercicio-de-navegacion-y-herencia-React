import React from "react";
import { Lista } from "./components/Lista";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Carrusel from './components/Carousel'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="/contacto" element={<Lista/>} />
          <Route path="/acerca" element={<Carrusel/>} />
          <Route path="/servicios" element={<h1>Servicios</h1>} />
        </Route>
      </Routes>
      {/* <Nav />
      <Lista /> */}
    </>
  );
}

export default App;
