// @ts-ignore
import ImgNotFound from '../../assets/img/NotFound.png'
import './notfound.css'
import { useHref } from 'react-router-dom';
const NotFound = () => {
    const homeUrl = useHref('/');
    return (
        <>
            <div>
                <div className="ContainerNotFound">
                    <div className="ContainerImgNotFound">
                        <img src={ImgNotFound} alt="" />
                    </div>
                    <div className='CotainerBTN'>
                        <p>¡Oh no! Parece que el enlace que estás buscando está tan perdido como una aguja en un pajar. Mejor vuelve a la página de inicio y comienza de nuevo tu búsqueda. ¡No te preocupes, no te juzgaremos por perderte en nuestro sitio web! ;)</p>
                        <button onClick={() => window.location.href = homeUrl}>Volver..</button>.
                    </div>
                </div>
            </div>
        </>
    )
}
export default NotFound