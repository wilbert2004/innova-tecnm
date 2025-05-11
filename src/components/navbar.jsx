import { Link } from "react-router-dom";
import logo from "../assets/logosemillarte.jpg";
//importamos las letras que agregamos a a nuestro index.css
import "../index.css";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: "#e6ebc5",
        padding: "25px 20px",
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src={logo}
            alt="Semillarte"
            width="100"
            //agregaamos un padding para que no se vea pegado al texto

            style={{
              verticalAlign: "middle",
              borderRadius: "50%", // Borde redondeado
              marginRight: "10px", // Espacio entre la imagen y el texto
              marginLeft: "100px", // Espacio entre la imagen y el texto
            }}
          />
          <h3
            style={{
              fontFamily: "Lobster,cursive",
              margin: 0,
              fontSize: "2.2rem", // Ajustamos el tamaño del texto
              color: "#824f12",
            }}
          >
            Semillarte
          </h3>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item border border-white bg-danger text-white fw-bold p-1">
              <Link
                className="nav-link fw-bold text-white btn btn-danger btn-sm mx-1"
                to="/"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item border border-white bg-danger text-white fw-bold p-1">
              <Link
                className="nav-link fw-bold text-white btn btn-danger btn-sm mx-1"
                to="/nosotros"
              >
                Nosotros
              </Link>
            </li>
            <li className="nav-item border border-white bg-danger text-white fw-bold p-1">
              <Link
                className="nav-link fw-bold text-white btn btn-danger btn-sm mx-1"
                to="/ofrecemos"
              >
                ¿Qué ofrecemos?
              </Link>
            </li>
            <li className="nav-item border border-white bg-danger text-white fw-bold p-1">
              <Link
                className="nav-link fw-bold text-white btn btn-danger btn-sm mx-1"
                to="/contacto"
              >
                Contacto
              </Link>
            </li>
            <li className="nav-item border border-white bg-danger text-white fw-bold p-1">
              <Link
                className="nav-link fw-bold text-white btn btn-danger btn-sm mx-1"
                to="/catalogo"
              >
                Catálogo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
