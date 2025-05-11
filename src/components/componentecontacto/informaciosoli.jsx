import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importa los íconos de react-icons

const Informaciosoli = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // centra horizontalmente
        paddingTop: "30px", // espacio arriba
        paddingBottom: "20px", // espacio abajo
        backgroundColor: "#f0f0f0", // opcional: fondo claro para distinguir
      }}
    >
      <div
        className="border"
        style={{
          border: "1px solid black",
          width: "80%",
          height: "340px",
          backgroundColor: "#FFF8F1",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "auto",
        }}
      >
        <div
          className="container "
          style={{
            marginTop: "20px",
            marginLeft: "50px",
          }}
        >
          <div className="row">
            <div className="col-9">
              {" "}
              <p
                className="palatino h4"
                style={{
                  color: "#A2672D",
                  marginTop: "20px",
                }}
              >
                Solicita más información
              </p>
              <br />
            </div>
            <br />
            <div className="col-9">
              <p className="palatino ">
                Puedes contactarnos a través de nuestros distintos canales de
                comunicación como: Teléfono, redes sociales o bien llenar el
                formulario de abajo y enviarnos un correo electrónico
                instantáneo.
              </p>
            </div>
            <br />
            <br />
            <br />
            <div className="col-6">
              <p
                className="palatino h4"
                style={{
                  color: "#A2672D",
                }}
              >
                Información de contacto
              </p>
              <p className="palatino">+52-984-113-02-36</p>
              <p className="palatino">semillarte.com</p>
              <p>
                {/* agregamo el icono de  */}
                <FaFacebook style={{ marginRight: "10px" }} />
                <FaTwitter style={{ marginRight: "10px" }} />
                <FaLinkedin style={{ marginRight: "10px" }} />
              </p>
            </div>
            <br />
            <br />
            <br />
            <div className="col-6">
              <p
                className="palatino h4"
                style={{
                  color: "#A2672D",
                }}
              >
                Nuestros horarios de atención
              </p>
              <p className="palatino">
                Lunes a Viernes: <br />
                8:00 am - 5:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informaciosoli;
