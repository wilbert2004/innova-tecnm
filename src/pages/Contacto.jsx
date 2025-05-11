import React from "react";
import Contactosuno from "../components/componentecontacto/contactosuno";
import Informaciosoli from "../components/componentecontacto/informaciosoli"; // Importa el componente Informaciosoli
import Formuubicacion from "../components/componentecontacto/formuubicacion";
const Contacto = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      {/* importamos el componente de contactouno */}
      <Contactosuno />
      {/* renderizamos el componente de contactouno */}
      <Informaciosoli />
      {/* renderizamos el componente de Informaciosoli */}
      <Formuubicacion />
      {/* renderizamos el componente de Formuubicacion */}
    </div>
  );
};

export default Contacto;
