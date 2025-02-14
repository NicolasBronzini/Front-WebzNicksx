import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <div className="ImgLogo"></div>
      </div>

      {/* Ícono de menú hamburguesa */}
      <div className={`navbar__toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar__links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/presenta-tu-proyecto">Presenta tu proyecto <span>*</span></a>
        </li>
        <li>
          <a href="/trabaja-con-nosotros">Trabaja con nosotros <span>*</span></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
