import React from "react";
import Quienessomos from "../components/componentsNosotros/Quienessomos";
// Importa el componente Quienessomos
import MisionVision from "../components/componentsNosotros/mision_vision"; // Importa el componente MisionVision
// Importa el componente MisionVision
import NuestroEquipo from "../components/componentsNosotros/nuestroequipo"; // Importa el componente NuestroEquipo
const Nosotros = () => {
  return (
    <div>
      {/* renderizamos nuestro componente de Nosotros */}
      <Quienessomos />
      {/* renderizamos nuestro componente de Nosotros */}
      <MisionVision />
      {/* renderizamos nuestro componente de Nosotros */}
      <NuestroEquipo />
      {/* renderizamos nuestro componente de Nosotros */}
    </div>
  );
};

export default Nosotros;
