import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/base/footer/Footer';
import Seo from '../../components/Seo';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUserAstronaut, FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

type Status = 'idle' | 'sending' | 'success' | 'error';

const Newdevs = () => {
    const [status, setStatus] = useState<Status>('idle');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        linkedin: "",
        portfolio: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            linkedin: formData.linkedin,
            portfolio: formData.portfolio,
            message: `Nombre: ${formData.name}\nCorreo: ${formData.email}\nLinkedIn: ${formData.linkedin}\nPortafolio: ${formData.portfolio}\nMensaje: ${formData.message}`,
            to_email: 'webznick@gmail.com',
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(() => {
                setStatus('success');
                setFormData({ name: "", email: "", linkedin: "", portfolio: "", message: "" });
            })
            .catch(() => {
                setStatus('error');
            });
    };

    const benefits = [
        {
            icon: <FaCode />,
            title: "Tecnología de Punta",
            description: "Trabajamos con las últimas tecnologías y frameworks del mercado."
        },
        {
            icon: <FaLaptopCode />,
            title: "Proyectos Desafiantes",
            description: "Participa en proyectos innovadores que pondrán a prueba tus habilidades."
        },
        {
            icon: <FaUserAstronaut />,
            title: "Crecimiento Profesional",
            description: "Ambiente colaborativo donde el aprendizaje continuo es nuestra prioridad."
        }
    ];

    const inputClass = "w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white placeholder-gray-500 transition-all";

    return (
        <div className="bg-dark min-h-screen flex flex-col">
            <Seo
                title="Trabajá con Nosotros"
                description="Sumate al equipo de WebzNick. Buscamos desarrolladores apasionados por la tecnología para trabajar en proyectos web desafiantes."
            />
            <NavBar />

            <main className="flex-grow pt-32 pb-20 px-4">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Trabaja con <span className="text-primary">Nosotros</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Estamos buscando talento apasionado por la tecnología y el desarrollo web.
                            Si te gusta innovar y crear soluciones impactantes, ¡te queremos en nuestro equipo!
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 text-center"
                            >
                                <div className="text-4xl text-primary mb-6 flex justify-center">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                                <p className="text-gray-400">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-white/10"
                    >
                        <h2 className="text-3xl font-bold text-white mb-3 text-center">¿Listo para el siguiente nivel?</h2>
                        <p className="text-gray-300 mb-8 text-center">
                            Completá el formulario y te contactaremos a la brevedad.{' '}
                            <span className="text-primary font-bold">¡No olvides adjuntar tu CV!</span>
                        </p>

                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center py-10 text-center"
                                >
                                    <FaCheckCircle className="text-secondary text-5xl mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">¡Postulación enviada!</h3>
                                    <p className="text-gray-400 mb-6">Te contactaremos pronto para pedirte tu CV. ¡Gracias!</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm"
                                    >
                                        Enviar otra postulación
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Nombre</label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Tu nombre" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Correo</label>
                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="tucorreo@ejemplo.com" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="linkedin" className="text-sm font-medium text-gray-300 ml-1">LinkedIn</label>
                                            <input type="url" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} className={inputClass} placeholder="URL de tu perfil" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="portfolio" className="text-sm font-medium text-gray-300 ml-1">Portafolio</label>
                                            <input type="url" id="portfolio" name="portfolio" value={formData.portfolio} onChange={handleChange} className={inputClass} placeholder="URL de tu portafolio" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">¿Por qué querés unirte?</label>
                                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className={`${inputClass} resize-none`} placeholder="Contanos sobre vos y tus motivaciones..." />
                                    </div>

                                    {status === 'error' && (
                                        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                                            <FaTimesCircle className="flex-shrink-0" />
                                            Hubo un error al enviar la postulación. Por favor intentá nuevamente.
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full py-4 bg-white text-dark font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-white/20 transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                <ImSpinner2 className="animate-spin" /> Enviando...
                                            </>
                                        ) : (
                                            <>
                                                Enviar Postulación <FaPaperPlane />
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Newdevs;
