import React from "react";
// Importa React y los estilos necesarios
import "../index.css"; // Importa los estilos CSS para la página de inicio
import cajaregalooli from "../assets/cajaregalooli.avif";
import imagenglobal from "../assets/imagendos.avif"; // Importa la imagen de la caja de regalo
//importamos el la ruta de nosotros por que nos va servir para el boton de about us
import { Link } from "react-router-dom"; // Importa el componente Link de react-router-dom
import CuadritoInicio from "../components/cuadritoInicio"; // Importa el componente CuadritoInicio
import CuadritoObjetivo from "../components/CuadritoObjetivo"; // Importa el componente CuadritoObjetivo
import CuadritoElige from "../components/CuadritoElige"; // Importa el componente CuadritoElige
const Inicio = () => {
  return (
    <div
      style={{
        maxWidth: "100%", // Limita el ancho máximo del contenedor
        overflow: "hidden", // Evita que el contenido se salga del contenedor
        padding: "0px", // Agrega espacio interno
      }}
    >
      <div className="grid text-center">
        <div className="g-col-6">
          {/* Primer cuadrito para el formato color chocolate del div */}
          <CuadritoInicio />
          {/* segundo cuadrito para nuestro objetivo */}
          <CuadritoObjetivo />
          {/* tercer cuadro para nuestro elegirnos */}
          <CuadritoElige />
          {/* Cuarto cuadro para el contacto y redes */}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
