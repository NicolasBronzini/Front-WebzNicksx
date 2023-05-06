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
                            <p>En esta etapa se plantea la necesidad o el problema que se busca resolver, se definen los objetivos y se elabora un plan de trabajo. Algunas actividades que se pueden mencionar en esta etapa son</p>
                            <ul>
                                <li><ImStatsDots className="IconParrafo" />Análisis de mercado y tendencias. </li>
                                <li> <HiUserGroup className="IconParrafo" />Identificación de oportunidades y necesidades del cliente.</li>
                                <li><MdOutlineEmojiObjects className="IconParrafo" />Definición de objetivos y metas. </li>
                                <li><BiTask className="IconParrafo" />Elaboración de un plan de trabajo y un cronograma. </li>
                            </ul>
                        </div>
                    </div>
                    <div className='Procesos'>
                        <div className="ContainerTextProceso">
                            <h3>Diseño</h3>
                            <p>En esta etapa se realiza la creación de la identidad visual del proyecto, se define la arquitectura de la información y se establece la estructura de navegación del sitio. Algunas actividades que se pueden mencionar en esta etapa son:</p>
                            <ul>
                                <li><BsPencilFill className="IconParrafo" />Creación de la identidad visual </li>
                                <li><CgWebsite className="IconParrafo" />Diseño de UI/UX </li>
                                <li><FaSitemap className="IconParrafo" />Definición de la arquitectura de la información </li>
                                <li><BsMenuButtonWideFill className="IconParrafo" />Establecimiento de la estructura de navegación </li>
                            </ul>
                        </div>
                    </div>
                    <div className='Procesos'>

                        <div className="ContainerTextProceso">
                            <h3>Desarrollo</h3>
                            <p>En esta etapa se lleva a cabo la construcción del sitio web o la aplicación móvil, utilizando lenguajes de programación, frameworks y herramientas de desarrollo. Algunas actividades que se pueden mencionar en esta etapa son:</p>
                            <ul>
                                <li><BsCodeSlash className="IconParrafo" />Desarrollo del front-end. </li>
                                <li><AiOutlineCloudServer className="IconParrafo" />Desarrollo del back-end.</li>
                                <li><GrTechnology className="IconParrafo" />Integración de las diferentes tecnologías y herramientas utilizadas. </li>
                                <li><MdOutlineError className="IconParrafo" />Pruebas de funcionalidad y corrección de errores.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QueHacemos