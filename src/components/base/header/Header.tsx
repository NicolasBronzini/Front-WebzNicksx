import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import { FaRegPaperPlane } from 'react-icons/fa';
import iconPC from "../../../assets/img/pc.svg";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <div className="relative min-h-screen bg-dark overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-dark via-slate-900 to-slate-800 z-0"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10"></div>

            {/* NavBar outside the z-10 container to ensure it stays on top */}
            <NavBar />

            <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
                >
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
                        Impulsa tu negocio con una <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">web profesional</span> 🚀
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                        En <span className="font-semibold text-white">WebzNick</span>, creamos 
                        <span className="text-primary font-medium"> páginas web, Ecommerce, integraciones con APIs y servicios </span> 
                        diseñadas a la medida de tu negocio para que vendas más y crezcas rápido.
                    </p>

                    {/* Lista de Beneficios */}
                    <ul className="space-y-4 mb-10 text-left inline-block">
                        <li className="flex items-center text-gray-300">
                            <span className="mr-3 text-secondary text-xl">✅</span> 
                            <span className="font-medium">Diseño moderno y funcional</span>
                        </li>
                        <li className="flex items-center text-gray-300">
                            <span className="mr-3 text-secondary text-xl">✅</span> 
                            <span className="font-medium">Optimizado para crecer tu negocio</span>
                        </li>
                        <li className="flex items-center text-gray-300">
                            <span className="mr-3 text-secondary text-xl">✅</span> 
                            <span className="font-medium">Ajustado a tu presupuesto y necesidades</span>
                        </li>
                    </ul>

                    <div>
                        <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300">
                            Hablemos Ahora <FaRegPaperPlane className="ml-2" />
                        </Link>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:w-1/2 flex justify-center"
                >
                    <img src={iconPC} alt="Developer Tools" className="w-full max-w-lg drop-shadow-2xl animate-float" />
                </motion.div>
            </div>
        </div>
    )
}

export default Header