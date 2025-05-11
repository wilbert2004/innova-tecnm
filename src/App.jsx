import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Ofrecemos from "./pages/Ofrecemos";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import ContactoRedes from "./components/ContactoRedes";
import Catalogo from "./pages/Catalogo";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//importamos el componoente de bootstrap
import "../src/index.css";
import Grupos from "./components/componenteofrecemos/Grupos";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/ofrecemos" element={<Ofrecemos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/grupos/:filtro" element={<Grupos />} />
      </Routes>
      {/* importamos ContactoRedes */}
      <ContactoRedes />
    </Router>
  );
}

export default App;
