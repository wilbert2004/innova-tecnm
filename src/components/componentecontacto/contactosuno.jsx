import React from "react";
import fondoquienes from "../../assets/fondoquienes.avif";

export const Contactosuno = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "30px",
        paddingBottom: "30px",
        backgroundColor: "#f0f0f0", // solo para distinguir el fondo exterior
      }}
    >
      <div
        style={{
          width: "80%",
          height: "330px",
          backgroundImage: `url(${fondoquienes})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#F8EDE3",
            padding: "20px 40px",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#D4A373",
              fontSize: "70px",
              fontWeight: "bold",
              margin: "0",
            }}
          >
            CONTÁC
            <br />
            TANOS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contactosuno;
