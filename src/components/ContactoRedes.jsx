import React from "react";
import logo from "../assets/logosemillarte.jpg"; // Importa el logo
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importa los íconos de react-icons

const ContactoRedes = () => {
  return (
    <div
      className="border"
      style={{
        border: "1px solid #ddd",
        width: "100%",
        height: "330px", // Ajusté la altura para que sea consistente
        backgroundColor: "#f9f9f9", // Color de fondo más suave
        boxSizing: "border-box",
        padding: "20px", // Padding más pequeño para mantenerlo consistente
        borderRadius: "10px", // Bordes redondeados para suavizar la apariencia
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra suave para el contenedor
        transition: "all 0.3s ease-in-out", // Suaviza el cambio de estilos
      }}
    >
      <div
        className="row align-items-center"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        {/* Logo y nombre */}
        <div
          className="col text-center"
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={logo}
            alt="Semillarte Logo"
            style={{
              width: "80px", // Tamaño del logo ajustado
              height: "80px", // Tamaño del logo ajustado
              objectFit: "contain",
              marginBottom: "10px",
              borderRadius: "50%",
              border: "3px solid #E0BE9A", // Borde dorado alrededor del logo
              transition: "all 0.3s ease-in-out",
            }}
          />
          <p
            style={{
              color: "#E0BE9A",
              fontFamily: '"Lulo Clean", sans-serif',
              fontSize: "22px", // Tamaño ajustado para el texto
              fontWeight: "bold",
              letterSpacing: "1px",
              textTransform: "uppercase",
              margin: 0,
              transition: "color 0.3s ease",
            }}
          >
            SEMILLARTE
          </p>
        </div>

        {/* Redes sociales */}
        <div
          className="col text-center"
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontFamily: '"Helvetica", sans-serif',
              fontSize: "18px", // Tamaño ajustado para el texto
              fontWeight: "bold",
              color: "#404040",
              marginBottom: "10px",
              textTransform: "uppercase",
            }}
          >
            SÍGUENOS EN REDES SOCIALES!
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FaFacebook
              style={{
                fontSize: "30px", // Tamaño ajustado para los íconos
                color: "#3b5998",
                margin: "0 15px",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
            />
            <FaTwitter
              style={{
                fontSize: "30px", // Tamaño ajustado para los íconos
                color: "#1DA1F2",
                margin: "0 15px",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
            />
            <FaLinkedin
              style={{
                fontSize: "30px", // Tamaño ajustado para los íconos
                color: "#0077B5",
                margin: "0 15px",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
            />
          </div>
        </div>

        {/* Contacto */}
        <div
          className="col text-center"
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontFamily: '"Helvetica", sans-serif',
              fontSize: "18px", // Tamaño ajustado para el texto
              fontWeight: "bold",
              color: "#404040",
              marginBottom: "10px",
              textTransform: "uppercase",
            }}
          >
            CONTÁCTANOS!
          </p>
          <p
            style={{
              fontFamily: '"Helvetica", sans-serif',
              fontSize: "14px", // Tamaño ajustado para el texto
              color: "#404040",
              margin: 0,
              transition: "color 0.3s ease",
            }}
          >
            Teléfono: 9841130236
          </p>
          <p
            style={{
              fontFamily: '"Helvetica", sans-serif',
              fontSize: "14px", // Tamaño ajustado para el texto
              color: "#404040",
              margin: 0,
              transition: "color 0.3s ease",
            }}
          >
            Email: Johanapahe140@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactoRedes;
