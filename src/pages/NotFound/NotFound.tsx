import ImgNotFound from '../../assets/img/NotFound.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    //TEst de codigo
    return (
        <div className="min-h-screen bg-dark flex items-center justify-center p-4">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex justify-center"
                >
                    <img src={ImgNotFound} alt="404 Not Found" className="max-w-full h-auto max-h-[400px] object-contain drop-shadow-2xl" />
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                        ¡Oh no! Parece que el enlace que estás buscando está tan perdido como una aguja en un pajar. 
                        Mejor vuelve a la página de inicio y comienza de nuevo tu búsqueda. 
                        ¡No te preocupes, no te juzgaremos por perderte en nuestro sitio web! ;)
                    </p>
                    <Link 
                        to="/" 
                        className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-blue-600 transition-colors shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1"
                    >
                        Volver al Inicio
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default NotFound