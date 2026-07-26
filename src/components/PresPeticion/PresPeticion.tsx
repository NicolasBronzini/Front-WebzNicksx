import { IoMdMegaphone } from 'react-icons/io';
import { HiUserGroup } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { FaCheckCircle, FaRocket, FaCode, FaMobileAlt, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PresPeticion = () => {
    const features = [
        {
            icon: <IoMdMegaphone />,
            title: "Comunicación efectiva",
            description: "Comunicación clara y constante en cada etapa del proyecto."
        },
        {
            icon: <BsFillGearFill />,
            title: "Compromiso con la calidad",
            description: "Soluciones personalizadas de alta calidad para garantizar tu satisfacción."
        },
        {
            icon: <HiUserGroup />,
            title: "Seriedad y profesionalismo",
            description: "Cumplimos plazos y garantizamos la confidencialidad de tu información."
        }
    ];

    const projectTypes = [
        { icon: <FaCode />,         label: 'Web App',     color: 'text-blue-400' },
        { icon: <FaShoppingCart />, label: 'E-commerce',  color: 'text-emerald-400' },
        { icon: <FaMobileAlt />,    label: 'Landing',     color: 'text-purple-400' },
        { icon: <FaRocket />,       label: 'API / SaaS',  color: 'text-orange-400' },
    ];

    const steps = [
        'Recibimos tu idea',
        'Analizamos requerimientos',
        'Presentamos propuesta',
        'Comenzamos a construir',
    ];

    return (
        <section className="py-20 bg-dark text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left — texto */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Presenta tu <span className="text-primary">proyecto</span>
                        </h1>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            ¿Tenés una idea? Contanos sobre ella y la hacemos realidad. Somos expertos en desarrollo web y te acompañamos en cada paso del camino.
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

                    {/* Right — visual card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 shadow-2xl">

                            {/* Header */}
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-3 h-3 rounded-full bg-red-500" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                                <span className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-3 text-xs text-gray-500 font-mono">nuevo-proyecto.md</span>
                            </div>

                            {/* Project types */}
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-semibold">Tipo de proyecto</p>
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {projectTypes.map((pt, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-slate-900/60 rounded-xl px-4 py-3 border border-slate-700">
                                        <span className={`text-lg ${pt.color}`}>{pt.icon}</span>
                                        <span className="text-sm text-gray-300 font-medium">{pt.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Steps */}
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-semibold">Nuestro flujo</p>
                            <ul className="space-y-2.5">
                                {steps.map((step, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-3 text-sm text-gray-300"
                                    >
                                        <FaCheckCircle className="text-secondary flex-shrink-0" />
                                        {step}
                                    </motion.li>
                                ))}
                            </ul>

                            {/* CTA mini */}
                            <div className="mt-6 pt-6 border-t border-slate-700 flex items-center justify-between">
                                <span className="text-xs text-gray-500">¿Listo para empezar?</span>
                                <span className="text-xs font-semibold text-primary flex items-center gap-1">
                                    <FaRocket className="text-xs" /> Completá el formulario abajo
                                </span>
                            </div>

                            {/* Decorative blob */}
                            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10" />
                            <div className="absolute -top-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default PresPeticion;
