import QueHacemos from "../components/QueHacemos/QueHacemos"
import Header from "../components/base/header/Header"
import Portafolio from "../components/portafolio/portafolio"
import Peticiones from "./Peticiones/peticiones"
const Home = () => {
    return (
        <>
            <Header />
            <QueHacemos />
            <Peticiones/>
            <Portafolio />
        </>
    )
}

export default Home