import { Helmet } from "react-helmet-async";
import Footer from "../../components/base/footer/Footer";
import Navbar from "../../components/NavBar/NavBar";
import PresPeticion from "../../components/PresPeticion/PresPeticion";
import ProyectForm from "../../components/ProyectForm/ProyectForm";
import TablePrice from "../../components/TablePrice/TablePrice";

const Peticiones = () => {
  return (
    <>
      {/* SEO con react-helmet-async */}
      <Helmet>
        <title>Peticiones - WebzNicks</title>
        <meta name="description" content="Solicita una cotización para tu página web, e-commerce o aplicación con WebzNicks. ¡Transformamos tu idea en realidad!" />
        <meta name="keywords" content="desarrollo web, software factory, páginas web, ecommerce, aplicaciones, presupuestos" />
        <meta name="author" content="WebzNicks" />
        <meta property="og:title" content="Peticiones - WebzNicks" />
        <meta property="og:description" content="Cotiza tu página web, ecommerce o aplicación con WebzNicks. Presupuesto rápido y sin compromiso." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tudominio.com/peticiones" />
        <meta property="og:image" content="https://tudominio.com/assets/preview-image.jpg" />
      </Helmet>

      {/* Contenido de la página */}
      <Navbar />
      <PresPeticion />
      <TablePrice />
      <ProyectForm />
      <Footer />
    </>
  );
};

export default Peticiones;
