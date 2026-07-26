import { Link } from 'react-router-dom';
import iconImage from '../../../assets/img/logos/logo.png';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo & Brand */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img src={iconImage} alt="WebzNick Logo" className="h-14 w-auto mb-5 object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Creamos páginas web, e-commerce, APIs e integraciones a medida para hacer crecer tu negocio con tecnología de punta.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/company/webznick"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-all duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Navegación</h3>
            <ul className="space-y-3">
              {[
                { name: "Inicio", path: "/" },
                { name: "Presenta tu proyecto", path: "/presenta-tu-proyecto" },
                { name: "Trabaja con nosotros", path: "/trabaja-con-nosotros" },
                { name: "Contacto", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MdEmail className="text-primary text-lg mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:webznick@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  webznick@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <FaWhatsapp className="text-secondary text-lg mt-0.5 flex-shrink-0" />
                <span>Disponible para consultas</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-500 text-sm">
          <span>&copy; {currentYear} WebzNick. Todos los derechos reservados.</span>
          <span className="text-gray-600">Hecho con dedicación y tecnología moderna.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
