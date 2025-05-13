import React from "react";
import TituloCatalogo from "../components/componentsCatalogo/titulocatalogo";
import Semillas from "../components/componentscatalogo/semillas"; // Importa el componente Semillas
const Catalogo = () => {
  return (
    <div>
      {/* <div>renderizamos el componente de catalogotitulo</div> */}
      <TituloCatalogo />
      {/* <div>renderizamos el componente de semillas</div> */}
      <Semillas />
    </div>
  );
};

export default Catalogo;
