import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import depayImg from '../../assets/img/project/Depay.png';
import hunterImg from '../../assets/img/project/Hunter.png';
import hunterPrideImg from '../../assets/img/project/HunterPride.png';
import logiaImg from '../../assets/img/project/LogiaCompanerosDelSilencio.png';
import marketingImg from '../../assets/img/project/Marketing.png';

const projects = [
  {
    title: 'Depay',
    description: 'Plataforma de pagos digitales con dashboard de administración y gestión de transacciones.',
    image: depayImg,
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    title: 'Hunter',
    description: 'Aplicación web para búsqueda y gestión de recursos con interfaz moderna y responsive.',
    image: hunterImg,
    tags: ['React', 'Tailwind CSS'],
  },
  {
    title: 'Hunter Pride',
    description: 'Plataforma comunitaria con sistema de usuarios, perfiles y contenido dinámico.',
    image: hunterPrideImg,
    tags: ['React', 'API REST'],
  },
  {
    title: 'Logia Compañeros del Silencio',
    description: 'Sitio institucional con identidad visual propia, galería y secciones informativas.',
    image: logiaImg,
    tags: ['React', 'SEO', 'Diseño Web'],
  },
  {
    title: 'Marketing Landing',
    description: 'Landing page de alto impacto para campaña de marketing digital con enfoque en conversión.',
    image: marketingImg,
    tags: ['Landing Page', 'Conversión', 'SEO'],
  },
];

const Portafolio = () => {
  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-slate-900/30 to-dark pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-primary">Proyectos</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Cada proyecto es una solución a medida. Mirá algunos de los trabajos que hemos realizado.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.15 }}
              viewport={{ once: true }}
              className="group bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <span className="text-white text-sm font-medium flex items-center gap-1.5 bg-primary/80 px-3 py-1.5 rounded-full">
                    <FaExternalLinkAlt className="text-xs" /> Ver proyecto
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
