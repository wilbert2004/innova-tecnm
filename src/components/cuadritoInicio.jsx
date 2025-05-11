import React from "react";
import { Link } from "react-router-dom";
import cajaregalooli from "../assets/cajaregalooli.avif";
import "../index.css"; // Importa los estilos CSS para la página de inicio

const CuadritoInicio = () => {
  return (
    <div
      className="border"
      style={{
        border: "1px solid black",
        width: "100%",
        height: "330px",
        backgroundColor: "#e1c4a0",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "auto", // permite scroll si se reduce
      }}
    >
      <div
        className="row align-items-center"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "nowrap",
          minWidth: "820px", // ancho mínimo para que no se reduzca el diseño
        }}
      >
        <div
          className="col"
          style={{
            textAlign: "center",
            margin: "0 20px",
            flex: "0 0 50%",
          }}
        >
          <p
            className="palatino h1"
            style={{
              color: "#FFF8F1",
              paddingTop: "20px",
              paddingBottom: "10px",
              marginTop: "20px",
            }}
          >
            ¡Caja de regalo!
          </p>
          <p className="palatino h4" style={{ color: "#000000" }}>
            Para producirlo no se sacrifica ningún <br /> árbol, no se generan
            residuos y sobre <br /> todo se genera una planta.
          </p>
          <br />
          <button
            style={{
              backgroundColor: "#5B4D43",
              color: "#ffffff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
          >
            <Link
              to="/nosotros"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              About us
            </Link>
          </button>
        </div>
        <div
          className="col"
          style={{
            width: "auto",
            height: "auto",
            margin: "0 20px",
            flex: "0 0 50%",
          }}
        >
          <div
            style={{
              marginTop: "40px",
              border: "5px solid white",
              width: "100%",
              maxWidth: "400px",
              height: "auto",
            }}
          >
            <img
              src={cajaregalooli}
              alt="Caja de regalo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuadritoInicio;
