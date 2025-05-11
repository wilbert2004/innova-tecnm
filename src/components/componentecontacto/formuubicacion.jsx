import React from "react";

const Formuubicacion = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "30px",
        paddingBottom: "30px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "500px",
          backgroundColor: "#FFF8F1",
          boxSizing: "border-box",
          display: "flex",
          padding: "30px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Formulario */}
        <div style={{ flex: 1, paddingRight: "30px" }}>
          <form
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Nombre</label>
                <input type="text" style={inputStyle} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Apellido</label>
                <input type="text" style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Email *</label>
              <input type="email" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Mensaje</label>
              <textarea
                rows="3"
                style={{ ...inputStyle, resize: "none" }}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#4d3a2d",
                color: "white",
                border: "none",
                padding: "10px 20px",
                fontWeight: "bold",
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Mapa */}
        <div style={{ flex: 1 }}>
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.928207512423!2d-89.53703068459047!3d21.16190898592444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5670f8c8f8c8f7%3A0x8f8c8f8c8f8c8f8c!2sValladolid%2C%20Yucat%C3%A1n!5e0!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const labelStyle = {
  display: "block",
  marginBottom: "5px",
  fontFamily: "sans-serif",
  fontSize: "15px",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "20px",
  border: "none",
  borderBottom: "1px solid black",
  backgroundColor: "transparent",
  fontFamily: "sans-serif",
  fontSize: "14px",
};

export default Formuubicacion;
