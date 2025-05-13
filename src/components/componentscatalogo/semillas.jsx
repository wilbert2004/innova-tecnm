import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Semillas = () => {
  const initialSemillas = [
    {
      id: 1,
      nombre: "Tomate Cherry",
      imagen: "/img/tomate-cherry.jpg",
      tipo: "hortalizas",
      beneficios: "Rico en vitamina C, antioxidantes y bajo en calorías.",
      requerimiento: "Requiere suelos bien drenados y sol pleno.",
    },
    {
      id: 2,
      nombre: "Albahaca",
      imagen: "/img/albahaca.jpg",
      tipo: "aromaticas",
      beneficios: "Mejora la digestión y posee propiedades antiinflamatorias.",
      requerimiento: "Prefiere climas cálidos y suelo bien abonado.",
    },
    {
      id: 3,
      nombre: "Zanahoria",
      imagen: "/img/zanahoria.jpg",
      tipo: "hortalizas",
      beneficios: "Ayuda a mejorar la vista y es buena para la piel.",
      requerimiento: "Requiere suelos sueltos y con buen drenaje.",
    },
  ];

  const [semillas, setSemillas] = useState(() => {
    const semillasGuardadas = localStorage.getItem("semillas");
    return semillasGuardadas ? JSON.parse(semillasGuardadas) : initialSemillas;
  });

  const [nuevaSemilla, setNuevaSemilla] = useState({
    nombre: "",
    imagen: "",
    tipo: "hortalizas",
    beneficios: "",
    requerimiento: "",
  });

  const [modalAbierto, setModalAbierto] = useState(false);
  const [semillaActivaId, setSemillaActivaId] = useState(null);
  const [filtroTipo, setFiltroTipo] = useState("todas");

  useEffect(() => {
    localStorage.setItem("semillas", JSON.stringify(semillas));
  }, [semillas]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNuevaSemilla({ ...nuevaSemilla, imagen: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const abrirModalAgregar = () => {
    setNuevaSemilla({
      nombre: "",
      imagen: "",
      tipo: "hortalizas",
      beneficios: "",
      requerimiento: "",
    });
    setSemillaActivaId(null);
    setModalAbierto(true);
  };

  const abrirModalEditar = (semilla) => {
    setNuevaSemilla(semilla);
    setSemillaActivaId(semilla.id);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevaSemilla.nombre.trim()) return;

    if (semillaActivaId) {
      setSemillas(
        semillas.map((s) => (s.id === semillaActivaId ? nuevaSemilla : s))
      );
    } else {
      const semillaCompleta = {
        ...nuevaSemilla,
        id: Date.now(),
      };
      setSemillas([...semillas, semillaCompleta]);
    }

    cerrarModal();
  };

  const handleEliminar = (id) => {
    if (window.confirm("¿Eliminar esta semilla del catálogo?")) {
      setSemillas(semillas.filter((s) => s.id !== id));
    }
  };

  const filtrarSemillas = () => {
    if (filtroTipo === "todas") {
      return semillas;
    }
    return semillas.filter((semilla) => semilla.tipo === filtroTipo);
  };

  return (
    <div className="container py-5">
      <div className="mb-5">
        <h1
          className="fw-bold"
          style={{
            fontFamily: "'Inknut Antiqua', serif",
            fontSize: "36px",
            color: "#000000",
            textTransform: "uppercase",
          }}
        >
          CATÁLOGO DE SEMILLAS
        </h1>
        <p className="text-muted">Una selección de nuestras mejores semillas</p>
      </div>

      <button
        className="btn mb-4"
        style={{
          backgroundColor: "#4a6f28",
          color: "white",
          fontWeight: "bold",
        }}
        onClick={abrirModalAgregar}
      >
        + Agregar semilla
      </button>

      <div className="mb-4">
        <div className="btn-group">
          <Link
            to="#"
            className="btn btn-outline-success"
            onClick={() => setFiltroTipo("todas")}
          >
            Todas
          </Link>
          <Link
            to="#"
            className="btn btn-outline-success"
            onClick={() => setFiltroTipo("hortalizas")}
          >
            Hortalizas
          </Link>
          <Link
            to="#"
            className="btn btn-outline-success"
            onClick={() => setFiltroTipo("aromaticas")}
          >
            Aromáticas
          </Link>
          <Link
            to="#"
            className="btn btn-outline-success"
            onClick={() => setFiltroTipo("frutales")}
          >
            Frutales
          </Link>
        </div>
      </div>

      <div className="row">
        {filtrarSemillas().length > 0 ? (
          filtrarSemillas().map((semilla) => (
            <div key={semilla.id} className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm position-relative overflow-hidden">
                <div style={{ height: "250px", overflow: "hidden" }}>
                  <img
                    src={semilla.imagen || "/img/default.jpg"}
                    className="card-img-top w-100 h-100"
                    alt={semilla.nombre}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5
                    className="card-title fw-bold"
                    style={{ color: "#4a6f28" }}
                  >
                    {semilla.nombre}
                  </h5>
                  <span className="badge bg-success">{semilla.tipo}</span>
                </div>
                <div className="card-overlay">
                  <div className="overlay-content p-3">
                    <p>
                      <strong>Beneficios:</strong> {semilla.beneficios}
                    </p>
                    <p>
                      <strong>Requerimiento:</strong> {semilla.requerimiento}
                    </p>
                    <div className="d-flex justify-content-between mt-3">
                      <button
                        className="btn btn-sm btn-outline-light"
                        onClick={(e) => {
                          e.stopPropagation();
                          abrirModalEditar(semilla);
                        }}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-sm btn-outline-light"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEliminar(semilla.id);
                        }}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p>No hay semillas disponibles.</p>
          </div>
        )}
      </div>

      {modalAbierto && (
        <div
          className="modal show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <form className="modal-content" onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">
                  {semillaActivaId ? "Editar semilla" : "Agregar nueva semilla"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={cerrarModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Nombre de la semilla</label>
                  <input
                    type="text"
                    className="form-control"
                    value={nuevaSemilla.nombre}
                    onChange={(e) =>
                      setNuevaSemilla({
                        ...nuevaSemilla,
                        nombre: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Tipo</label>
                  <select
                    className="form-select"
                    value={nuevaSemilla.tipo}
                    onChange={(e) =>
                      setNuevaSemilla({ ...nuevaSemilla, tipo: e.target.value })
                    }
                  >
                    <option value="hortalizas">Hortalizas</option>
                    <option value="aromaticas">Aromáticas</option>
                    <option value="frutales">Frutales</option>
                    <option value="flores">Flores</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Beneficios</label>
                  <textarea
                    className="form-control"
                    value={nuevaSemilla.beneficios}
                    onChange={(e) =>
                      setNuevaSemilla({
                        ...nuevaSemilla,
                        beneficios: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Requerimiento</label>
                  <textarea
                    className="form-control"
                    value={nuevaSemilla.requerimiento}
                    onChange={(e) =>
                      setNuevaSemilla({
                        ...nuevaSemilla,
                        requerimiento: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Imagen</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {nuevaSemilla.imagen && (
                    <img
                      src={nuevaSemilla.imagen}
                      alt="Vista previa"
                      className="img-thumbnail mt-2"
                      style={{ maxHeight: "150px" }}
                    />
                  )}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={cerrarModal}
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-success">
                  {semillaActivaId ? "Guardar cambios" : "Agregar semilla"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Semillas;
