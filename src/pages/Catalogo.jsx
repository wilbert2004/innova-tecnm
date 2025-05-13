import React from "react";
import Semillas from "../components/componentscatalogo/semillas"; // Asegúrate que la ruta y el nombre son correctos
import TituloCatalogo from "../components/componentscatalogo/titulocatalogo";
const Catalogo = () => {
  return (
    <div>
      {/* <div>renderizamos el componente de titulo</div> */}
      <TituloCatalogo />
      {/* <div>renderizamos el componente de semillas</div> */}
      <Semillas />
    </div>
  );
};

export default Catalogo;
