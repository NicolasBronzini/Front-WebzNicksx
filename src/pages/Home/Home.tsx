import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCode, FaUsers, FaProjectDiagram, FaStar } from 'react-icons/fa';
import ContactForm from "../../components/ContactForm/contact-form";
import QueHacemos from "../../components/QueHacemos/QueHacemos";
import Tecnologias from "../../components/Tecnologias/Tecnologias";
import PorQueElegirnos from "../../components/PorQueElegirnos/PorQueElegirnos";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/base/footer/Footer";
import Header from "../../components/base/header/Header";
import Seo from "../../components/Seo";

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'WebzNick',
  url: 'https://www.webznick.app',
  description: 'Desarrollo de páginas web, e-commerce, APIs e integraciones a medida.',
  email: 'webznick@gmail.com',
  knowsAbout: ['React', 'TypeScript', 'Node.js', 'Desarrollo web', 'E-commerce'],
};

const stats = [
  { icon: <FaProjectDiagram />, value: "20+",  label: "Proyectos entregados" },
  { icon: <FaUsers />,          value: "15+",  label: "Clientes satisfechos" },
  { icon: <FaCode />,           value: "5+",   label: "Años de experiencia" },
  { icon: <FaStar />,           value: "100%", label: "Compromiso con el cliente" },
];

const Home = () => {
    return (
        <>
            <Seo
                title="Desarrollo Web Profesional"
                description="En WebzNick creamos páginas web, e-commerce, APIs e integraciones a medida para hacer crecer tu negocio. Diseño moderno, rápido y optimizado para SEO."
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
            </Helmet>

            <Header />

            {/* Stats Section */}
            <section className="py-16 bg-slate-900 border-y border-slate-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-primary text-2xl mb-3 flex justify-center">{stat.icon}</div>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <QueHacemos />
            <Tecnologias />
            <PorQueElegirnos />
            <FAQ />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Home;
