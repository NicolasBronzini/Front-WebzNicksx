import ImgEquipo from '../../assets/img/trabajo-en-equipo.jpg';
import { IoMdMegaphone } from 'react-icons/io';
import { HiUserGroup } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const PresPeticion = () => {
    const features = [
        {
            icon: <IoMdMegaphone />,
            title: "Comunicación efectiva",
            description: "Mantenemos una comunicación clara y constante para asegurar que estés informado y satisfecho con el progreso del proyecto."
        },
        {
            icon: <BsFillGearFill />,
            title: "Compromiso con la calidad",
            description: "Ofrecemos soluciones personalizadas de alta calidad para garantizar la satisfacción del cliente y el éxito del proyecto."
        },
        {
            icon: <HiUserGroup />,
            title: "Seriedad y profesionalismo",
            description: "Nos comprometemos a cumplir con los plazos acordados y garantizar la confidencialidad y seguridad de la información."
        }
    ];

    return (
        <section className="py-20 bg-dark text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Presenta tu <span className="text-primary">proyecto</span></h1>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            ¿Tienes una idea para un proyecto web? Cuéntanos sobre él y nosotros te ayudaremos a hacerlo realidad. Somos expertos en desarrollo web y podemos ofrecerte soluciones personalizadas para tus necesidades.
                            <br /><br />
                            En WebzNicks, nos aseguramos de estar contigo en cada paso del camino. Desde el diseño inicial hasta la implementación final, te guiaremos a través de todo el proceso.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                                >
                                    <div className="text-3xl text-primary mb-4 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg">
                                        {feature.icon}
                                    </div>
                                    <h5 className="text-lg font-bold mb-2 text-white">{feature.title}</h5>
                                    <p className="text-sm text-gray-400">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group">
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                            <img src={ImgEquipo} alt="Trabajo en equipo" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default PresPeticion