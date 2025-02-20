import "./Footer.css";
import iconImage from "../../../assets/img/logos/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección principal del footer */}
        <div className="footer-section">
          <img src={iconImage} alt="WebzNick Logo - Innovación y Tecnología" className="footer-logo" />
          <h2 className="footer-title">WebzNick</h2>
          <p className="footer-text">Impulsando tu negocio con innovación y tecnología.</p>
        </div>

        {/* Sección de redes sociales (si se activan en el futuro) */}
        <nav className="footer-section" aria-label="Redes Sociales">
          {/* 
          <h3 className="footer-subtitle">Síguenos</h3>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="Facebook WebzNick">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="Twitter WebzNick">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="LinkedIn WebzNick">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="Instagram WebzNick">
              <i className="fab fa-instagram"></i>
            </a>
          </div> 
          */}
        </nav>
      </div>

      {/* Pie de página con derechos de autor */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} WebzNick. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
