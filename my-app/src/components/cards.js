import React from "react";

export function Cards(props) {
  return (
    <>
      <h3>Nombre: {props.nombre}</h3>
      <p>Apellido: {props.apellido}</p>
      <p>Edad: {props.edad}</p>
    </>
  );
}
