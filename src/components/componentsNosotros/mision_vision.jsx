import React from "react";

const mision_vision = () => {
  return (
    <div
      className="border"
      style={{
        border: "1px solid black",
        width: "100%",
        height: "330px",
        backgroundColor: "#dcdcdc",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "auto", // permite scroll si la pantalla es muy pequeña
      }}
    >
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <p className="oliver1 h3">Misión</p>
            <p className="palatino ">
              Nuestra misión es contrarrestar los daños medioambientales
              causados por el uso excesivo de materiales no sostenibles y
              fomentar la creación de huertos propios, promoviendo así prácticas
              responsables que contribuyan a la regeneración del medio ambiente
              y a la lucha contra el cambio climático.
            </p>
          </div>
          <div className="col">
            <p className="h3 oliver1">Visión</p>
            <p className="palatino">
              Ser una empresa líder en la creación de soluciones ecológicas que
              inspiren a las personas a cultivar sus propios alimentos,
              promoviendo la sostenibilidad y el respeto por el medio ambiente,
              con un impacto positivo en las comunidades y en la lucha contra el
              cambio climático.
            </p>
          </div>
          <div className="col">
            <p className="h3 oliver1"> Valores</p>
            <p className="palatino">
              Reconocemos la grandeza de la naturaleza y trabajamos activamente
              para protegerla. Creemos que cada acción cuenta, y por eso nos
              guiamos por principios que reflejan nuestro compromiso con el
              medio ambiente y la comunidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mision_vision;
