import React from "react";
import imagentres from "../assets/imagentres.avif";

const CuadritoElige = () => {
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          minWidth: "820px", // evita que se comprima en pantallas chicas
        }}
      >
        {/* Texto */}
        <div
          style={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p
            style={{
              color: "#E0BE9A",
              fontFamily: '"palatino linotype", serif',
              fontSize: "45px",
              margin: 0,
              paddingBottom: "10px",
            }}
          >
            ¿Por qué elegirnos?
          </p>
          <p
            style={{
              color: "#404040",
              fontFamily: "helvetica-w01-light, sans-serif",
              fontSize: "25px",
              margin: 0,
            }}
          >
            Al elegir Semillarte, estás optando por un detalle <br />
            sostenible que promueve la conexión con la tierra y el <br />
            cuidado del medio ambiente. Además, cada caja puede <br />
            personalizarse para distintos momentos especiales, <br />
            convirtiéndola en un obsequio único y significativo.
          </p>
        </div>

        {/* Imagen */}
        <div
          style={{
            width: "auto",
            height: "auto",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "180px",
              height: "auto",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img
              src={imagentres}
              alt="mano con planta"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuadritoElige;
