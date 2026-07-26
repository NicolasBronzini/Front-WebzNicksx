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
            step: "01",
            title: "Idea",
            description: "Definimos el problema, establecemos objetivos y creamos un plan de trabajo detallado adaptado a tu negocio.",
            items: [
                { icon: <ImStatsDots />, text: "Análisis de mercado y tendencias." },
                { icon: <HiUserGroup />, text: "Identificación de oportunidades." },
                { icon: <MdOutlineEmojiObjects />, text: "Definición de objetivos claros." },
                { icon: <BiTask />, text: "Creación de un plan de trabajo." },
            ]
        },
        {
            step: "02",
            title: "Diseño",
            description: "Le damos forma visual al proyecto trabajando en identidad visual, arquitectura de la información y navegación.",
            items: [
                { icon: <BsPencilFill />, text: "Creación de la identidad visual." },
                { icon: <CgWebsite />, text: "Diseño de interfaces (UI/UX)." },
                { icon: <FaSitemap />, text: "Arquitectura de la información." },
                { icon: <BsMenuButtonWideFill />, text: "Estructura de navegación." },
            ]
        },
        {
            step: "03",
            title: "Desarrollo",
            description: "Construimos el sitio usando las mejores tecnologías y frameworks, garantizando calidad y rendimiento.",
            items: [
                { icon: <BsCodeSlash />, text: "Desarrollo del front-end." },
                { icon: <AiOutlineCloudServer />, text: "Desarrollo del back-end." },
                { icon: <FaNetworkWired />, text: "Integración de tecnologías." },
                { icon: <MdOutlineError />, text: "Pruebas y corrección de errores." },
            ]
        }
    ];

    return (
        <section className="py-24 bg-dark text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-dark pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-4">
                        <TbLamp2 className="text-3xl text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Nuestro proceso de desarrollo</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Trabajamos con una metodología probada para garantizar resultados profesionales en cada etapa.</p>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting line (desktop) */}
                    <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 z-0" />

                    {processes.map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
                        >
                            {/* Step badge */}
                            <div className="absolute -top-4 left-8 bg-gradient-to-r from-primary to-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                Paso {process.step}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 mt-2 text-primary group-hover:text-white transition-colors">{process.title}</h3>
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
    );
};

export default QueHacemos;
