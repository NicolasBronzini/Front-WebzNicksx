import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" aria-label="Barra de navegación principal">
      <div className="navbar__logo">
        <div className="ImgLogo" role="img" aria-label="Logo de la empresa"></div>
      </div>

      {/* Ícono de menú hamburguesa */}
      <button
        className={`navbar__toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menú de navegación"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <span className="navbar__toggle-line"></span>
        <span className="navbar__toggle-line"></span>
        <span className="navbar__toggle-line"></span>
      </button>

      <ul className={`navbar__links ${isOpen ? "active" : ""}`} role="navigation">
        <li>
          <a href="/" aria-label="Ir a la página principal">Inicio</a>
        </li>
        <li>
          <a href="/presenta-tu-proyecto" aria-label="Presenta tu proyecto">Presenta tu proyecto <span>*</span></a>
        </li>
        {/* <li>
          <a href="/trabaja-con-nosotros" aria-label="Trabaja con nosotros">Trabaja con nosotros <span>*</span></a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
