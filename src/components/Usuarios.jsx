import React from "react";

const Usuarios = (props) => {
    return(
        <div>
        <p>Nombre completo: {props.nombre}</p>
        <p>Edad: {props.edad}</p>
        <p>Descripción: {props.descripcion}</p>
        <p>Profesión: {props.profesion}</p>
        <p>Rol: {props.rol}</p>
        </div>
    );
}

export default Usuarios
