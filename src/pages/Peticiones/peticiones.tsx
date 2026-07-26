import { useState, useRef } from 'react';
import Footer from '../../components/base/footer/Footer'
import Navbar from '../../components/NavBar/NavBar'
import PresPeticion from '../../components/PresPeticion/PresPeticion'
import ProyectForm from '../../components/ProyectForm/ProyectForm'
import TablePrice from '../../components/TablePrice/TablePrice'
import Seo from '../../components/Seo'


const Peticiones = () => {
    const [selectedProject, setSelectedProject] = useState("");
    const formRef = useRef<HTMLDivElement>(null);

    const handleProjectSelect = (projectType: string) => {
        setSelectedProject(projectType);
        // Scroll to form
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Seo
                title="Presentá tu Proyecto"
                description="Contanos sobre tu proyecto web, elegí el plan que se ajusta a tu presupuesto y recibí una propuesta a medida de WebzNick."
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