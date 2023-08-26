import React from "react";

const Saludo = (props) => {
    return (
        <h2>me llamo {props.nombre} y tengo {props.edad} años</h2>
    );
}
export default Saludo