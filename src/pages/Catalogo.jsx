import React from "react";
import TituloCatalogo from "../components/componentsCatalogo/TituloCatalogo"; // Importa el componente TituloCatalogo
import Semillas from "../components/componentsCatalogo/semillas"; // Importa el componente Semillas
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
