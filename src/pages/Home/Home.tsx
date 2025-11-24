import ContactForm from "../../components/ContactForm/contact-form"
import QueHacemos from "../../components/QueHacemos/QueHacemos"
import Footer from "../../components/base/footer/Footer"
import Header from "../../components/base/header/Header"
import SEO from "../../components/SEO/SEO"
import { useI18n } from "../../i18n"
import Testimonials from "../../components/Testimonials/Testimonials"
import TechStack from "../../components/TechStack/TechStack"
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs"

const Home = () => {
    const { language } = useI18n();
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "WebzNick",
        "url": "https://webznick.com",
        "logo": "https://webznick.com/logo.png",
        "description": language === 'es' 
            ? "Desarrollo web profesional, e-commerce y aplicaciones a medida"
            : "Professional web development, e-commerce and custom applications",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "AR"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "nicolasbronzini7@gmail.com"
        },
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "75",
            "highPrice": "1000",
            "offerCount": "8"
        }
    };
    
    return (
        <>
            <SEO 
                structuredData={structuredData}
                canonicalUrl="https://webznick.com/"
            />
            <Header />
            <QueHacemos />
            <Testimonials />
            <WhyChooseUs />
            <TechStack />
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Home