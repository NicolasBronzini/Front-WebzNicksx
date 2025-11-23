import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/base/footer/Footer';
import ContactForm from '../../components/ContactForm/contact-form';

const Contact = () => {
    return (
        <div className="bg-dark min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow pt-20">
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
