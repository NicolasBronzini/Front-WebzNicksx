import { ImStatsDots } from 'react-icons/im';
import { HiUserGroup } from 'react-icons/hi';
import { MdOutlineEmojiObjects, MdOutlineError } from 'react-icons/md';
import { BiTask } from 'react-icons/bi';
import { BsPencilFill, BsMenuButtonWideFill, BsCodeSlash } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { FaSitemap, FaNetworkWired } from 'react-icons/fa';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { TbLamp2 } from 'react-icons/tb';
import { motion } from 'framer-motion';

const QueHacemos = () => {
    const processes = [
        {
            title: "Idea",
            description: "En esta etapa se define el problema o la necesidad a resolver, se establecen los objetivos y se crea un plan de trabajo detallado.",
            items: [
                { icon: <ImStatsDots />, text: "Análisis de mercado y tendencias." },
                { icon: <HiUserGroup />, text: "Identificación de oportunidades." },
                { icon: <MdOutlineEmojiObjects />, text: "Definición de objetivos claros." },
                { icon: <BiTask />, text: "Creación de un plan de trabajo." },
            ]
        },
        {
            title: "Diseño",
            description: "Aquí se da forma visual al proyecto. Se trabaja en la identidad visual, la arquitectura de la información y la estructura de navegación.",
            items: [
                { icon: <BsPencilFill />, text: "Creación de la identidad visual." },
                { icon: <CgWebsite />, text: "Diseño de interfaces (UI/UX)." },
                { icon: <FaSitemap />, text: "Arquitectura de la información." },
                { icon: <BsMenuButtonWideFill />, text: "Estructura de navegación." },
            ]
        },
        {
            title: "Desarrollo",
            description: "En esta fase se construye el sitio web o la aplicación móvil utilizando las mejores tecnologías, frameworks y herramientas de desarrollo.",
            items: [
                { icon: <BsCodeSlash />, text: "Desarrollo del front-end." },
                { icon: <AiOutlineCloudServer />, text: "Desarrollo del back-end." },
                { icon: <FaNetworkWired />, text: "Integración de tecnologías." },
                { icon: <MdOutlineError />, text: "Pruebas y corrección de errores." },
            ]
        }
    ];

    return (
        <section className="py-20 bg-dark text-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-4">
                        <TbLamp2 className="text-3xl text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Nuestro proceso de desarrollo</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {processes.map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-white transition-colors">{process.title}</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{process.description}</p>
                            <ul className="space-y-3">
                                {process.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                                        <span className="text-secondary mr-3 text-lg">{item.icon}</span>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default QueHacemos