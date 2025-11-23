import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

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
      features: ['1-2 Secciones', 'Formulario de Contacto', 'SEO Básico', 'Diseño Responsive']
    },
    {
      type: 'E-commerce Básico',
      description: 'Tienda online con carrito de compras, integración con pasarelas de pago y catálogo simple.',
      price: '$210 - $330',
      time: '3 - 5 semanas',
      features: ['Hasta 50 productos', 'Pasarela de Pagos', 'Carrito de Compras', 'Panel de Administración']
    },
    {
      type: 'E-commerce Avanzado',
      description: 'Funcionalidades adicionales como filtros avanzados, múltiples métodos de pago, integración con ERP.',
      price: '$375 - $665',
      time: '6 - 10 semanas',
      features: ['Filtros Avanzados', 'Múltiples Pagos', 'Integración ERP', 'Panel Personalizado']
    },
    {
      type: 'Página Corporativa',
      description: 'Sitio web profesional para empresas, con múltiples páginas y secciones informativas.',
      price: '$375 - $665',
      time: '2 - 4 semanas',
      features: ['Múltiples Páginas', 'Blog / Noticias', 'Integración Redes Sociales', 'Optimización SEO']
    },
    {
      type: 'Aplicación Web',
      description: 'Sistema a medida (ej. CRM, ERP, Dashboard) con funcionalidades específicas y base de datos.',
      price: '$500 - $1.000',
      time: '8 - 16 semanas',
      features: ['Base de Datos', 'Autenticación Usuarios', 'Dashboard Admin', 'Lógica Compleja']
    },
    {
      type: 'API Básica',
      description: 'API REST simple para integrar datos entre sistemas. Incluye CRUD y autenticación básica.',
      price: '$150 - $300',
      time: '2 - 4 semanas',
      features: ['CRUD Completo', 'Autenticación Básica', 'Documentación', 'Integración DB']
    },
    {
      type: 'API Avanzada',
      description: 'API con funcionalidades complejas como OAuth, pagos, o tiempo real.',
      price: '$400 - $800',
      time: '4 - 8 semanas',
      features: ['OAuth 2.0', 'Websockets', 'Pagos Online', 'Alta Escalabilidad']
    },
    {
      type: 'Mantenimiento',
      description: 'Incluye actualizaciones de seguridad, pequeños cambios de contenido y soporte técnico.',
      price: '$12 - $29',
      time: 'Mensual',
      features: ['Actualizaciones', 'Soporte Técnico', 'Backups', 'Monitoreo']
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nuestros <span className="text-primary">Precios</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Transparencia y calidad en cada proyecto. Elige el plan que mejor se adapte a tus necesidades.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 flex flex-col"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">{project.type}</h3>
                <p className="text-sm text-gray-400 h-20 overflow-hidden">{project.description}</p>
              </div>
              
              <div className="mb-6">
                <span className="text-2xl font-bold text-primary">{project.price}</span>
                <span className="text-xs text-gray-500 block mt-1">Tiempo estimado: {project.time}</span>
              </div>

              <ul className="space-y-2 mb-6 flex-grow">
                {project.features && project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <FaCheckCircle className="text-secondary mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onSelectProject && onSelectProject(project.type)}
                className="w-full py-2 px-4 bg-slate-700 hover:bg-primary text-white rounded-lg transition-colors font-medium text-sm"
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

