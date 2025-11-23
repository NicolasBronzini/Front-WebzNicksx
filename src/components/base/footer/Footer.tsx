import iconImage from '../../../assets/img/logos/logo.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Brand */}
          <div className="text-center md:text-left">
            <img src={iconImage} alt="WebzNick Logo" className="h-12 w-auto mx-auto md:mx-0 mb-4 object-contain" />
            <h2 className="text-xl font-bold mb-2">WebzNick</h2>
            <p className="text-gray-400 text-sm">Innovación y tecnología a tu servicio.</p>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex justify-center md:justify-end gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-xl">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-xl">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-xl">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} WebzNick. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

