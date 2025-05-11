import React from "react";
import imagenglobal from "../assets/imagendos.avif";

const CuadritoObjetivo = () => {
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          minWidth: "820px", // ancho fijo para evitar que se reduzca
        }}
      >
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
              marginTop: "10px",
              width: "100%",
              maxWidth: "200px",
              height: "auto",
            }}
          >
            <img
              src={imagenglobal}
              alt="iamgen del mundo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Texto */}
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          <p
            className="oliver1 h1"
            style={{
              paddingTop: "20px",
              paddingBottom: "10px",
              marginTop: "20px",
            }}
          >
            Objetivo
          </p>
          <p className="tu-texto-personalizado" style={{ color: "#404040" }}>
            Crear más productos que sean biodegradables y <br /> germinables,
            para reducir la contaminación, <br /> además, buscar beneficiar a
            las familias para <br /> crear su propio huerto desde casa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CuadritoObjetivo;
