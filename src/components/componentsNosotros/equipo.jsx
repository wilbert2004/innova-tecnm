import React from "react";
// Importamos las imágenes de cada colaborador
import dise from "../../assets/dise.jpg";
import marke from "../../assets/marke.jpg";
import creativo from "../../assets/creativo.jpg";
// Importamos los íconos de react-icons
import { FaFacebook, FaInstagram } from "react-icons/fa";
//importamos el imagen del desarrollar
import desarrollador from "../../assets/desarrollador.jpg";
import Logistica from "../../assets/logistica.jpg";
function Equipo() {
  const miembros = [
    {
      titulo: "DISEÑADOR",
      subtitulo: "Nombre: Johana Pascual Matacapan",
      imagen: dise,
    },
    {
      titulo: "MARKETING",
      subtitulo: "Nombre: Jazmin Guadalupe Estrella Poot",
      imagen: marke,
    },
    {
      titulo: "CREATIVO",
      subtitulo: "Nombre:Leidy Guadalupe Cetzal Noh",
      imagen: creativo,
    },
    {
      titulo: "LOGÍSTICA",
      subtitulo: "Nombre:Rene Augusto Lara Martinez",
      imagen: Logistica,
    },
    {
      titulo: "DESARROLLO",
      subtitulo: "Nombre:Wilbert Oliver Chan UC",
      imagen: desarrollador,
    },
  ];

  return (
    <div className="contenedor-equipo-2-2-1">
      {miembros.map((miembro, index) => (
        <div
          key={index}
          className={`tarjeta-equipo ${index === 4 ? "centrada" : ""}`}
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#FFF8F1",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Imagen del miembro */}
          <img
            src={miembro.imagen}
            alt={miembro.titulo}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%", // Hace la imagen circular
              border: "3px solid #E0BE9A", // Borde alrededor de la imagen
              marginBottom: "10px",
              objectFit: "cover",
            }}
          />
          <h2 style={{ color: "#824f12", fontWeight: "bold" }}>
            {miembro.titulo}
          </h2>
          <p>{miembro.subtitulo}</p>
          {/* Íconos de redes sociales */}
          <div style={{ marginTop: "10px" }}>
            <FaFacebook
              style={{
                fontSize: "20px",
                color: "#3b5998",
                margin: "0 10px",
                cursor: "pointer",
              }}
            />
            <FaInstagram
              style={{
                fontSize: "20px",
                color: "#E4405F",
                margin: "0 10px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Equipo;
