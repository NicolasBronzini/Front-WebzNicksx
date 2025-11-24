import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/base/footer/Footer';
import ContactForm from '../../components/ContactForm/contact-form';
import SEO from '../../components/SEO/SEO';
import { useI18n } from '../../i18n';

const Contact = () => {
    const { language } = useI18n();
    
    const seoTitle = language === 'es'
        ? 'Contacto | WebzNick - Desarrollo Web Profesional'
        : 'Contact | WebzNick - Professional Web Development';
    
    const seoDescription = language === 'es'
        ? 'Contáctanos para tu proyecto web. Respuesta en 24h. WhatsApp, email o formulario. Consultoría inicial gratuita.'
        : 'Contact us for your web project. Response in 24h. WhatsApp, email or form. Free initial consultation.';
    return (
        <div className="bg-dark min-h-screen flex flex-col">
            <SEO 
                title={seoTitle}
                description={seoDescription}
                canonicalUrl="https://webznick.com/contact"
            />
            <NavBar />
            <main className="flex-grow pt-20">
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
