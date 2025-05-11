import React from "react";
import { Link } from "react-router-dom";
import imagennosotros2 from "../../assets/imagennosotros.avif"; // Importa la imagen de la caja de regalo

export const Quienessomos = () => {
  return (
    <div
      className="border"
      style={{
        border: "1px solid black",
        width: "100%",
        height: "400px",
        backgroundColor: "#e1c4a0",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden", // Evita el scroll horizontal
      }}
    >
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col">
            {/* Imagen como fondo */}
            <div
              style={{
                border: "4px solid white",
                backgroundImage: `url(${imagennosotros2})`,
                backgroundSize: "cover", // La imagen ocupa todo el contenedor
                backgroundPosition: "center", // Centra la imagen
                backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                width: "100%", // Ajusta el ancho al 100% del contenedor
                height: "220px", // Altura del contenedor
                margin: "0 auto", // Centra el contenedor horizontalmente
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)", // Fondo blanco con opacidad
                  padding: "20px",
                  textAlign: "center", // Centra el texto dentro del div
                }}
              >
                <p className="h4">¿Quiénes somos?</p>
                <p>
                  ¿Quiénes somos? Semillarte es un micronegocio, cuyo enfoque es
                  ofrecer una alternativa ecológica mediante la creación de
                  cajas biodegradables y germinables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quienessomos;
