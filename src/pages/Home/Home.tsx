import { Helmet } from "react-helmet-async";
import ContactForm from "../../components/ContactForm/contact-form";
import QueHacemos from "../../components/QueHacemos/QueHacemos";
import Footer from "../../components/base/footer/Footer";
import Header from "../../components/base/header/Header";

const Home = () => {
  return (
    <>
      {/* SEO con Helmet */}
      <Helmet>
        <title>WebzNicks | Desarrollo Web, E-commerce y Software a Medida</title>
        <meta 
          name="description" 
          content="Creamos soluciones digitales a medida: Landing Pages, E-commerce y Aplicaciones Web. 🚀 Impulsa tu negocio con WebzNicks." 
        />
        <meta 
          name="keywords" 
          content="desarrollo web, software factory, landing page, e-commerce, aplicaciones web, diseño web, programadores" 
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (para Facebook, LinkedIn) */}
        <meta property="og:title" content="WebzNicks | Software Factory 🚀" />
        <meta 
          property="og:description" 
          content="Expertos en desarrollo web, e-commerce y software a medida. ¡Lleva tu negocio al siguiente nivel!" 
        />
        <meta property="og:image" content="https://tu-dominio.com/imagen-seo.jpg" />
        <meta property="og:url" content="https://tu-dominio.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card (para Twitter/X) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WebzNicks | Software Factory" />
        <meta 
          name="twitter:description" 
          content="Desarrollo de sitios web, e-commerce y aplicaciones web personalizadas." 
        />
        <meta name="twitter:image" content="https://tu-dominio.com/imagen-seo.jpg" />
      </Helmet>

      <Header />
      
      <main>
        <section>
          <QueHacemos />
        </section>

        <section>
          <ContactForm />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
