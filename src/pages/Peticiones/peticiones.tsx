
import Footer from '../../components/base/footer/Footer'
import Navbar from '../../components/NavBar/NavBar'
import PresPeticion from '../../components/PresPeticion/PresPeticion'
import ProyectForm from '../../components/ProyectForm/ProyectForm'
import TablePrice from '../../components/TablePrice/TablePrice'


const Peticiones = () => {
    return (
        <>
            <Navbar/>
            <PresPeticion />
            <TablePrice/>
            <ProyectForm/>
            <Footer/>
        </>
    )
}

export default Peticiones