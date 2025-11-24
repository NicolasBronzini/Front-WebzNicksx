import { useState, useRef } from 'react';
import Footer from '../../components/base/footer/Footer'
import Navbar from '../../components/NavBar/NavBar'
import PresPeticion from '../../components/PresPeticion/PresPeticion'
import ProyectForm from '../../components/ProyectForm/ProyectForm'
import TablePrice from '../../components/TablePrice/TablePrice'
import SEO from '../../components/SEO/SEO'
import { useI18n } from '../../i18n'

const Peticiones = () => {
    const { language } = useI18n();
    const [selectedProject, setSelectedProject] = useState("");
    const formRef = useRef<HTMLDivElement>(null);

    const handleProjectSelect = (projectType: string) => {
        setSelectedProject(projectType);
        // Scroll to form
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const seoTitle = language === 'es'
        ? 'Presenta tu Proyecto Web | Cotización Gratis en 24h - WebzNick'
        : 'Present Your Web Project | Free Quote in 24h - WebzNick';
    
    const seoDescription = language === 'es'
        ? '¿Tienes una idea? Te ayudamos a hacerla realidad. Landing pages desde $75, E-commerce desde $210. Cotización gratuita en 24 horas.'
        : 'Have an idea? We help you make it real. Landing pages from $75, E-commerce from $210. Free quote in 24 hours.';

    return (
        <>
            <SEO 
                title={seoTitle}
                description={seoDescription}
                canonicalUrl="https://webznick.com/presenta-tu-proyecto"
            />
            <Navbar/>
            <PresPeticion />
            <TablePrice onSelectProject={handleProjectSelect} />
            <div ref={formRef}>
                <ProyectForm initialProjectType={selectedProject} />
            </div>
            <Footer/>
        </>
    )
}

export default Peticiones