import React from "react";

const TituloCatalogo = () => {
  return (
    <div
      className="border"
      style={{
        border: "1px solid black",
        width: "100%",
        height: "330px",
        backgroundColor: "#FFF8F1",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "auto", // scroll si la pantalla es chica
      }}
    >
      <div className="container text-center">
        <div className="row">
          <div
            className="col"
            style={{
              fontFamily: "'lulo-clean-w01-one-bold', sans-serif",
              fontSize: "50px",
              color: "#000000",
              textTransform: "uppercase",
              lineHeight: "1",
              fontWeight: "800", // Valores comunes: 700 (bold), 800 (extra bold), 900 (black)
            }}
          >
            Semillas
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col palatino h4" style={{ color: "#000000" }}>
            <p>
              Bienvenido a nuestro catálogo de semillas, aquí encontrarás una
              selección de las semillas. Explora mis proyectos para saber más
              sobre lo que hago.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TituloCatalogo;
