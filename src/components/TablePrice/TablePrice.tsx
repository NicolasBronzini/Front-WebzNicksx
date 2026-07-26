import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

interface TablePriceProps {
  onSelectProject?: (projectType: string) => void;
}

const TablePrice = ({ onSelectProject }: TablePriceProps) => {
  const projects = [
    {
      type: 'Landing Page',
      description: 'Página simple con una o dos secciones, formulario de contacto, optimizada para SEO básico.',
      price: '$75 - $125',
      time: '1 - 2 semanas',
      popular: false,
      features: ['1-2 Secciones', 'Formulario de Contacto', 'SEO Básico', 'Diseño Responsive']
    },
    {
      type: 'E-commerce Básico',
      description: 'Tienda online con carrito de compras, integración con pasarelas de pago y catálogo de productos.',
      price: '$210 - $330',
      time: '3 - 5 semanas',
      popular: true,
      features: ['Hasta 50 productos', 'Pasarela de Pagos', 'Carrito de Compras', 'Panel de Administración']
    },
    {
      type: 'E-commerce Avanzado',
      description: 'Funcionalidades adicionales como filtros avanzados, múltiples métodos de pago e integración con ERP.',
      price: '$375 - $665',
      time: '6 - 10 semanas',
      popular: false,
      features: ['Filtros Avanzados', 'Múltiples Pagos', 'Integración ERP', 'Panel Personalizado']
    },
    {
      type: 'Página Corporativa',
      description: 'Sitio web profesional para empresas con múltiples páginas, blog y secciones informativas.',
      price: '$375 - $665',
      time: '2 - 4 semanas',
      popular: false,
      features: ['Múltiples Páginas', 'Blog / Noticias', 'Integración Redes Sociales', 'Optimización SEO']
    },
    {
      type: 'Aplicación Web',
      description: 'Sistema a medida (CRM, ERP, Dashboard) con funcionalidades específicas y base de datos propia.',
      price: '$500 - $1.000',
      time: '8 - 16 semanas',
      popular: false,
      features: ['Base de Datos', 'Autenticación Usuarios', 'Dashboard Admin', 'Lógica Compleja']
    },
    {
      type: 'API Básica',
      description: 'API REST para integrar datos entre sistemas. Incluye CRUD completo y autenticación básica.',
      price: '$150 - $300',
      time: '2 - 4 semanas',
      popular: false,
      features: ['CRUD Completo', 'Autenticación Básica', 'Documentación', 'Integración DB']
    },
    {
      type: 'API Avanzada',
      description: 'API con funcionalidades complejas como OAuth 2.0, pagos en línea o comunicación en tiempo real.',
      price: '$400 - $800',
      time: '4 - 8 semanas',
      popular: false,
      features: ['OAuth 2.0', 'Websockets', 'Pagos Online', 'Alta Escalabilidad']
    },
    {
      type: 'Mantenimiento',
      description: 'Actualizaciones de seguridad, pequeños cambios de contenido y soporte técnico mensual.',
      price: '$12 - $29',
      time: 'Mensual',
      popular: false,
      features: ['Actualizaciones', 'Soporte Técnico', 'Backups', 'Monitoreo']
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-primary">Precios</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transparencia y calidad en cada proyecto. Elegí el plan que mejor se adapte a tus necesidades.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-6 border flex flex-col transition-all duration-300 hover:shadow-xl ${
                project.popular
                  ? 'bg-primary/10 border-primary shadow-lg shadow-primary/20 hover:shadow-primary/30'
                  : 'bg-slate-800/50 border-slate-700 hover:border-primary/50 hover:shadow-primary/10'
              }`}
            >
              {project.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gradient-to-r from-primary to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                  <FaStar className="text-yellow-300" /> Más Popular
                </div>
              )}

              <div className="mb-4 mt-2">
                <h3 className="text-lg font-bold text-white mb-2">{project.type}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
              </div>

              <div className="mb-5 pb-5 border-b border-slate-700">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold text-primary">{project.price}</span>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">USD</span>
                </div>
                <span className="text-xs text-gray-500 block mt-1">Tiempo: {project.time}</span>
              </div>

              <ul className="space-y-2 mb-6 flex-grow">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <FaCheckCircle className="text-secondary mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onSelectProject && onSelectProject(project.type)}
                className={`w-full py-2.5 px-4 rounded-xl transition-all font-medium text-sm ${
                  project.popular
                    ? 'bg-primary hover:bg-blue-600 text-white shadow-md'
                    : 'bg-slate-700 hover:bg-primary text-white'
                }`}
              >
                Solicitar Presupuesto
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TablePrice;
