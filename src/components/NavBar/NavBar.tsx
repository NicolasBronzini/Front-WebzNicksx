import './navbar.css'


function Navbar() {

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <div className='ImgLogo'></div>
            </div>

            <ul className="navbar__links">
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
