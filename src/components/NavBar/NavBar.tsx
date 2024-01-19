import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <div className='ImgLogo'></div>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/"  className="link">Inicio</Link>
        </li>
        <li>
          <Link to="/presenta-tu-proyecto"  className="link">Presenta tu proyecto <span>*</span></Link>
        </li>
        <li>
          <Link to="/trabaja-con-nosotros"  className="link">Trabaja con nosotros <span>*</span></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
