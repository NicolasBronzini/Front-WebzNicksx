import "./QueHacemos.css";
import { ImStatsDots } from 'react-icons/im';
import { HiUserGroup } from 'react-icons/hi';
import { MdOutlineEmojiObjects, MdOutlineError } from 'react-icons/md';
import { BiTask } from 'react-icons/bi';
import { BsPencilFill, BsMenuButtonWideFill, BsCodeSlash } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { FaSitemap } from 'react-icons/fa';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { GrTechnology } from 'react-icons/gr';
import { TbLamp2 } from 'react-icons/tb';

const QueHacemos = () => {
    return (
        <>
            <div className="Difuminado"></div>
            <div className='ContainerProceso'>
                <div className='TitleProceso'>
                    <TbLamp2 id="LampIcon" />
                    <h2>Nuestro proceso de desarrollo</h2>
                </div>
                <div className='ContainerTiposProcesos'>
                    <div className='Procesos'>
                        <div className="ContainerTextProceso">
                            <h3>Idea</h3>
                            <p>En esta etapa se define el problema o la necesidad a resolver, se establecen los objetivos y se crea un plan de trabajo detallado. Algunas de las actividades clave incluyen:</p>
                            <ul>
                                <li><ImStatsDots className="IconParrafo" />Análisis de mercado y tendencias.</li>
                                <li><HiUserGroup className="IconParrafo" />Identificación de oportunidades y necesidades del cliente.</li>
                                <li><MdOutlineEmojiObjects className="IconParrafo" />Definición de objetivos y metas claras.</li>
                                <li><BiTask className="IconParrafo" />Creación de un plan de trabajo y cronograma.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='Procesos'>
                        <div className="ContainerTextProceso">
                            <h3>Diseño</h3>
                            <p>Aquí se da forma visual al proyecto. Se trabaja en la identidad visual, la arquitectura de la información y la estructura de navegación para asegurar una experiencia de usuario excepcional. Las principales actividades en esta fase son:</p>
                            <ul>
                                <li><BsPencilFill className="IconParrafo" />Creación de la identidad visual.</li>
                                <li><CgWebsite className="IconParrafo" />Diseño de interfaces (UI) y experiencia de usuario (UX).</li>
                                <li><FaSitemap className="IconParrafo" />Definición de la arquitectura de la información.</li>
                                <li><BsMenuButtonWideFill className="IconParrafo" />Establecimiento de la estructura de navegación.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='Procesos'>
                        <div className="ContainerTextProceso">
                            <h3>Desarrollo</h3>
                            <p>En esta fase se construye el sitio web o la aplicación móvil utilizando las mejores tecnologías, frameworks y herramientas de desarrollo. Las actividades incluyen:</p>
                            <ul>
                                <li><BsCodeSlash className="IconParrafo" />Desarrollo del front-end (interfaz de usuario).</li>
                                <li><AiOutlineCloudServer className="IconParrafo" />Desarrollo del back-end (funcionalidad y servidores).</li>
                                <li><GrTechnology className="IconParrafo" />Integración de las diferentes tecnologías y herramientas.</li>
                                <li><MdOutlineError className="IconParrafo" />Pruebas exhaustivas de funcionalidad y corrección de errores.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QueHacemos;
