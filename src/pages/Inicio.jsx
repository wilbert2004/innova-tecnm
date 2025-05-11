import React from "react";
// Importa React y los estilos necesarios
import "../index.css"; // Importa los estilos CSS para la página de inicio
import cajaregalooli from "../assets/cajaregalooli.avif";
import imagenglobal from "../assets/imagendos.avif"; // Importa la imagen de la caja de regalo
//importamos el la ruta de nosotros por que nos va servir para el boton de about us
import { Link } from "react-router-dom"; // Importa el componente Link de react-router-dom

const Inicio = () => {
  return (
    <div
      style={{
        maxWidth: "100%", // Limita el ancho máximo del contenedor
        overflow: "hidden", // Evita que el contenido se salga del contenedor
        padding: "0px", // Agrega espacio interno
      }}
    >
      <div className="grid text-center">
        <div className="g-col-6">
          {/* Primer cuadrito para el formato color chocolate del div */}
          <div
            className="border"
            style={{
              border: "1px solid black",
              width: "100%",
              height: "300px",
              backgroundColor: "#e1c4a0",
              boxSizing: "border-box", // Asegura que el padding y el borde no aumenten el tamaño total
            }}
          >
            {/* Datos del primer cuadrito */}
            <div
              className="row align-items-center"
              style={{
                width: "100%",
                maxWidth: "100%", // Limita el ancho máximo
                margin: "0 auto", // Centra el contenido
              }}
            >
              {/* este divide el primer apartad o*/}
              <div
                className="col"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
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
                  Para producirlo no se sacrifica ningún <br /> árbol, no se
                  generan residuos y sobre <br /> todo se genera una planta.
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
                      textDecoration: "none", // Elimina el subrayado del enlace
                      color: "inherit", // Hereda el color del botón
                    }}
                  >
                    About us
                  </Link>
                </button>
              </div>
              {/* segundo apartado que divide */}
              <div
                className="col"
                style={{
                  width: "auto",
                  height: "auto",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    marginTop: "40px",
                    border: "5px solid white", // Aumenta el grosor del borde
                    width: "100%",
                    maxWidth: "400px", // Aumenta el tamaño máximo de la imagen
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
          {/* segundo cuadrito para nuestro objetivo */}
          <div
            className="border"
            style={{
              border: "1px solid black",
              width: "100%",
              height: "300px",
              backgroundColor: "#dcdcdc",
              boxSizing: "border-box", // Asegura que el padding y el borde no aumenten el tamaño total
              display: "flex", // Flexbox para centrar contenido
              alignItems: "center", // Centra verticalmente
              justifyContent: "center", // Centra horizontalmente
              gap: "20px", // Espaciado entre texto e imagen
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
                  maxWidth: "200px", // Aumenta el tamaño máximo de la imagen
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
                textAlign: "center", // Centra el texto
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
              <p
                className="tu-texto-personalizado"
                style={{ color: "#404040" }}
              >
                Crear más productos que sean biodegradables y <br />{" "}
                germinables, para reducir la contaminación, <br /> además,
                buscar beneficiar a las familias para <br /> crear su propio
                huerto desde casa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
