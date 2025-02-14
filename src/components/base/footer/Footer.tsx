import "./Footer.css";
import iconImage from '../../../assets/img/logos/logo.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
           <img src={iconImage} alt="Logo" className="footer-logo" />
          <h2 className="footer-title">WebzNick</h2>
          <p className="footer-text">Innovación y tecnología a tu servicio.</p>
        </div>

       

        <div className="footer-section">
          <h3 className="footer-subtitle">Síguenos</h3>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} WebzNick. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
