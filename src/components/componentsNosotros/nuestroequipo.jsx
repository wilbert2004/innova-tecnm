import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Equipo from "./equipo";
const nuestroequipo = () => {
  return (
    <div
      className="border"
      style={{
        border: "1px solid black",
        width: "100%",
        height: "auto",
        backgroundColor: "#5B4D43",
        boxSizing: "border-box",
        padding: "20px",
      }}
    >
      <div className="container text-center">
        {/* Título */}
        <div className="row mb-4">
          <div className="col">
            <p
              className="h1 palatino"
              style={{ color: "#FFF8F1", paddingTop: "20px" }}
            >
              Nuestro Equipo
            </p>
            <br />
            <p className="palatino h5 text-white">
              Conoce al equipo detrás de <strong>Semillarte</strong>, un grupo
              de 5 estudiantes del Tecnológico Superior de Valladolid
              apasionados por los regalos y la creatividad.
            </p>
          </div>
        </div>

        {/* Tarjetas del equipo */}
        <div>
          {/* importamos el equipo */}
          <Equipo />
        </div>
      </div>
    </div>
  );
};

export default nuestroequipo;
