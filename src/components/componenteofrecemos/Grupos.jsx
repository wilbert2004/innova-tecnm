import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ContactoRedes from "../ContactoRedes";
const Grupos = () => {
  const { filtro } = useParams();

  const initialGrupoState = {
    nombre: "",
    imagen: "",
    miembros: 1,
    tipo: "sugeridos",
    publico: true,
  };

  const [grupos, setGrupos] = useState(() => {
    const gruposGuardados = localStorage.getItem("grupos");
    return gruposGuardados
      ? JSON.parse(gruposGuardados)
      : [
          {
            id: 1,
            nombre: "Caja de regalo germinable (30x30cm)",
            imagen: "/img/caja1.jpg",
            publico: true,
            miembros: 2,
            tipo: "mis-grupos",
          },
          {
            id: 2,
            nombre: "Cajas de regalo germinable (20x20 cm)",
            imagen: "/img/caja2.jpg",
            publico: true,
            miembros: 1,
            tipo: "sugeridos",
          },
          {
            id: 3,
            nombre: "Caja de regalo germinable (7.8 X 5.4 X 2.5 Cm)",
            imagen: "/img/caja3.jpg",
            publico: true,
            miembros: 1,
            tipo: "sugeridos",
          },
        ];
  });

  const [nuevoGrupo, setNuevoGrupo] = useState(initialGrupoState);
  const [grupoActivoId, setGrupoActivoId] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);

  // Guardar los datos en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("grupos", JSON.stringify(grupos));
  }, [grupos]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result; // Imagen en formato Base64
        setNuevoGrupo((prev) => ({ ...prev, imagen: base64String }));
      };
      reader.readAsDataURL(file); // Leer el archivo como una URL en Base64
    }
  };

  const abrirModalAgregar = () => {
    setNuevoGrupo(initialGrupoState);
    setGrupoActivoId(null);
    setModalAbierto(true);
  };

  const abrirModalEditar = (grupo) => {
    setNuevoGrupo(grupo);
    setGrupoActivoId(grupo.id);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setNuevoGrupo(initialGrupoState);
    setGrupoActivoId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevoGrupo.nombre.trim()) return;

    if (grupoActivoId) {
      const nuevosGrupos = grupos.map((g) =>
        g.id === grupoActivoId ? { ...g, ...nuevoGrupo } : g
      );
      setGrupos(nuevosGrupos);
    } else {
      const nuevoGrupoCompleto = {
        ...nuevoGrupo,
        id: Date.now(),
      };
      setGrupos((prev) => [...prev, nuevoGrupoCompleto]);
    }

    cerrarModal();
  };

  const handleEliminarGrupo = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este grupo?")) {
      setGrupos((prev) => prev.filter((g) => g.id !== id));
    }
  };

  const gruposFiltrados = grupos.filter((g) => {
    if (filtro === "todos") return true;
    if (filtro === "mis-grupos") return g.tipo === "mis-grupos";
    if (filtro === "sugeridos") return g.tipo === "sugeridos";
    return true;
  });

  return (
    <div className="container py-5">
      {/* Título principal */}
      <h1
        className="fw-bold mb-4"
        style={{ color: "#E0BE9A", fontSize: "36px" }}
      >
        Grupos
      </h1>

      {/* Botón para agregar */}
      <button
        className="btn mb-3"
        style={{
          backgroundColor: "#E0BE9A",
          color: "white",
          fontWeight: "bold",
        }}
        onClick={abrirModalAgregar}
      >
        + Agregar grupo
      </button>

      {/* Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <Link
            to="/grupos/todos"
            className={`nav-link ${
              filtro === "todos" ? "active fw-semibold" : ""
            }`}
            style={{ color: "#E0BE9A" }}
          >
            Todos ({grupos.length})
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/grupos/mis-grupos"
            className={`nav-link ${
              filtro === "mis-grupos" ? "active fw-semibold" : ""
            }`}
            style={{ color: "#E0BE9A" }}
          >
            Mis grupos ({grupos.filter((g) => g.tipo === "mis-grupos").length})
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/grupos/sugeridos"
            className={`nav-link ${
              filtro === "sugeridos" ? "active fw-semibold" : ""
            }`}
            style={{ color: "#E0BE9A" }}
          >
            Grupos sugeridos (
            {grupos.filter((g) => g.tipo === "sugeridos").length})
          </Link>
        </li>
      </ul>

      {/* Tarjetas de grupos */}
      <div className="row">
        {gruposFiltrados.map((grupo) => (
          <div key={grupo.id} className="col-md-4 mb-4">
            <div className="card h-100 border-light shadow-sm">
              {grupo.imagen && (
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={grupo.imagen}
                    className="card-img-top w-100 h-100"
                    alt={grupo.nombre}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              )}
              <div className="card-body bg-light">
                {/* Título del producto */}
                <h5
                  className="card-title fw-bold"
                  style={{
                    color: "#E0BE9A",
                    fontSize: "20px",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                >
                  {grupo.nombre}
                </h5>
                <p className="card-text text-muted">
                  {grupo.publico ? "Público" : "Privado"} · {grupo.miembros}{" "}
                  miembro{grupo.miembros !== 1 && "s"}
                </p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn w-100"
                    style={{
                      backgroundColor: "#E0BE9A",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    onClick={() => abrirModalEditar(grupo)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn ms-2"
                    style={{
                      backgroundColor: "#E0BE9A",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    onClick={() => handleEliminarGrupo(grupo.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalAbierto && (
        <div
          className="modal show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <form className="modal-content" onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">
                  {grupoActivoId ? "Editar grupo" : "Agregar nuevo grupo"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={cerrarModal}
                  aria-label="Cerrar"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Nombre del grupo</label>
                  <input
                    type="text"
                    className="form-control"
                    value={nuevoGrupo.nombre}
                    onChange={(e) =>
                      setNuevoGrupo({ ...nuevoGrupo, nombre: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Imagen del grupo</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {nuevoGrupo.imagen && (
                    <div
                      style={{
                        height: "200px",
                        overflow: "hidden",
                        marginTop: "10px",
                      }}
                    >
                      <img
                        src={nuevoGrupo.imagen}
                        alt="Vista previa"
                        className="w-100 h-100"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Cantidad de miembros</label>
                  <input
                    type="number"
                    className="form-control"
                    value={nuevoGrupo.miembros}
                    onChange={(e) =>
                      setNuevoGrupo({
                        ...nuevoGrupo,
                        miembros: parseInt(e.target.value) || 1,
                      })
                    }
                    min="1"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Tipo de grupo</label>
                  <select
                    className="form-select"
                    value={nuevoGrupo.tipo}
                    onChange={(e) =>
                      setNuevoGrupo({ ...nuevoGrupo, tipo: e.target.value })
                    }
                  >
                    <option value="mis-grupos">Mis grupos</option>
                    <option value="sugeridos">Sugeridos</option>
                  </select>
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
                <button type="submit" className="btn btn-warning">
                  {grupoActivoId ? "Guardar cambios" : "Agregar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grupos;
