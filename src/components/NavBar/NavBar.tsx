import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id:any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="navbar__logo">
        <div className='ImgLogo'></div>
      </div>

      <div className="navbar__menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/" className="link">Inicio</Link>
        </li>
        <li>
          <Link to="/" onClick={() => scrollToSection('Proyectos')} className="link">Presenta tu proyecto <span>*</span></Link>
        </li>
        <li>
          <Link to="/" onClick={() => scrollToSection('Contacto')} className="link">Contacto <span>*</span></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
