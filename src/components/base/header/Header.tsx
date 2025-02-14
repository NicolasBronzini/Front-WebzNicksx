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
                        <h1>Impulsa tu negocio con una <span className="text-blue-500">web profesional</span> 🚀</h1>
                        <p className="text-lg text-gray-300 mb-6">
                            En <span className="font-semibold text-white">WebzNick</span>, creamos 
                            <span className="text-blue-400"> páginas web, Ecommerce, integraciones con APIs y servicios </span> 
                            diseñadas a la medida de tu negocio para que vendas más y crezcas rápido.
                        </p>

                        {/* Lista de Beneficios */}
                        <ul className="ListaBeneficios">
                            <li>✅ <span className="text-white font-semibold">Diseño moderno y funcional</span></li>
                            <li>✅ <span className="text-white font-semibold">Optimizado para crecer tu negocio</span></li>
                            <li>✅ <span className="text-white font-semibold">Ajustado a tu presupuesto y necesidades</span></li>
                        </ul>

                        <button className="BtnContact" > Hablemos Ahora <FaRegPaperPlane /></button>
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