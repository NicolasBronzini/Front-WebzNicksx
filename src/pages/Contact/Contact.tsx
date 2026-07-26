import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/base/footer/Footer';
import ContactForm from '../../components/ContactForm/contact-form';
import Seo from '../../components/Seo';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    value: 'webznick@gmail.com',
    href: 'mailto:webznick@gmail.com',
  },
  {
    icon: <FaWhatsapp />,
    title: 'WhatsApp',
    value: 'Disponible para consultas',
    href: 'https://wa.me',
  },
  {
    icon: <FaClock />,
    title: 'Disponibilidad',
    value: 'Lunes a Viernes, 9:00 – 18:00',
    href: null,
  },
];

const Contact = () => {
    return (
        <div className="bg-dark min-h-screen flex flex-col">
            <Seo
                title="Contacto"
                description="¿Tenés un proyecto en mente? Escribinos y te ayudamos a hacerlo realidad. Respuesta rápida y presupuestos a medida."
            />
            <NavBar />

            {/* Hero */}
            <div className="pt-32 pb-12 px-4 bg-gradient-to-b from-slate-900 to-dark">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Hablemos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">proyecto</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto">
                            Estamos listos para ayudarte. Escribinos y te respondemos a la brevedad.
                        </p>
                    </motion.div>

                    {/* Contact info cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5 text-center hover:border-primary/50 transition-all"
                            >
                                <div className="text-primary text-2xl mb-3 flex justify-center">{item.icon}</div>
                                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 text-xs hover:text-primary transition-colors break-all"
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <span className="text-gray-400 text-xs">{item.value}</span>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <main className="flex-grow">
                <ContactForm />
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
