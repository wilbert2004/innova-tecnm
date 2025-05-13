import React from "react";
import Semillas from "../components/componentscatalogo/Semillas"; // Importa el componente Semillas\
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
