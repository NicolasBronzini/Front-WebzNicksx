import './PresPeticion.css';
// @ts-ignore
import ImgEquipo from '../../assets/img/trabajo-en-equipo.jpg';
import { IoMdMegaphone } from 'react-icons/io';
import { HiUserGroup } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
const PresPeticion = () => {
    return (
        <>
            <div className="container" id='Proyectos'>
                <div className="left-section">
                    <h1>Presenta tu proyecto</h1>
                    <p>¿Tienes una idea para un proyecto web? Cuéntanos sobre él y nosotros te ayudaremos a hacerlo realidad. Somos expertos en desarrollo web y podemos ofrecerte soluciones personalizadas para tus necesidades.
                        <br /><br />
                        En WebzNicks, nos aseguramos de estar contigo en cada paso del camino. Desde el diseño inicial hasta la implementación final, te guiaremos a través de todo el proceso y te mantendremos informado en cada etapa del proyecto. Tu satisfacción es nuestra máxima prioridad y estamos comprometidos a asegurarnos de que tu proyecto web sea un éxito.
                    </p>
                    <div>
                        <div className='ContainerCartMini'>
                            <span><IoMdMegaphone className="IconCartMini" /></span>
                            <h5>Comunicación efectiva</h5>
                            <p> Mantenemos una comunicación clara y constante para asegurar que estés informado y satisfecho con el progreso del proyecto.</p>
                        </div>
                        <div className='ContainerCartMini'>
                            <span><BsFillGearFill className="IconCartMini" /></span>
                            <h5>Compromiso con la calidad</h5>
                            <p>Ofrecemos soluciones personalizadas de alta calidad para garantizar la satisfacción del cliente y el éxito del proyecto.</p>
                        </div>
                        <div className='ContainerCartMini'>
                            <span><HiUserGroup className="IconCartMini" /></span>
                            <h5>Seriedad y profesionalismo</h5>
                            <p>Nos comprometemos a cumplir con los plazos acordados y garantizar la confidencialidad y seguridad de la información proporcionada por nuestros clientes</p>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <div className="image-wrapper">
                        <div className='ContainerImg'>
                            <img src={ImgEquipo} alt="Trabajo en equipo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PresPeticion