import ContactForm from "../../components/ContactForm/contact-form"
import QueHacemos from "../../components/QueHacemos/QueHacemos"
import Footer from "../../components/base/footer/Footer"
import Header from "../../components/base/header/Header"
const Home = () => {
    return (
        <>
            <Header />
            <QueHacemos />
            {/* <Portafolio /> */}
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Home