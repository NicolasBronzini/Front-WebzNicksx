import NavBar from "../../NavBar/NavBar";
import './header.css';
// @ts-ignore
import iconPC from "../../../assets/img/pc.svg"
// @ts-ignore
import IconAvion from "../../../assets/img/AvionPapel.svg"
import { FaRegPaperPlane } from 'react-icons/fa';

const Header = () => {
    return (
        <>
            <div className="ContainerHeader">
                <NavBar />
                <div className="containerHome">
                    <div className="ContainerTextHome">
                        <h1>Impulsa tu negocio al siguiente nivel</h1>
                        <p>En <span>WebzNick</span> nos dedicamos a crear soluciones digitales personalizadas que impulsan tu negocio en línea. Ya sea que necesites una página web, una tienda en línea o una aplicación móvil, nuestro equipo de expertos trabajará contigo para entender tus necesidades y crear una solución a medida que se adapte a tus objetivos y presupuesto. ¡Contáctanos para saber cómo podemos ayudarte a crecer en línea!</p>
                        <button className="BtnContact" >Contactanos <FaRegPaperPlane /></button>
                    </div>
                    <div className="ContainerImgHome">
                        <img src={iconPC} alt="Developer Tools" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header