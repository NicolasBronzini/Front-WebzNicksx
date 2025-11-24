import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/img/logos/logo.png";
import { useI18n } from "../../i18n";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useI18n();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.presentProject, path: "/presenta-tu-proyecto" },
    { name: t.nav.workWithUs, path: "/trabaja-con-nosotros" },
  ];

  return (
    <nav
      className={`fixed w-full z-[9999] transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="WebZnick Logo" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                scrolled 
                  ? (location.pathname === link.path ? "text-primary" : "text-dark")
                  : (location.pathname === link.path ? "text-primary" : "text-white")
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            {t.nav.contact}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className={`md:hidden text-2xl focus:outline-none ${scrolled ? "text-dark" : "text-white"}`}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    location.pathname === link.path ? "text-primary" : "text-dark"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-primary text-white rounded-full font-medium text-center hover:bg-blue-600 transition-all"
              >
                {t.nav.contact}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;


