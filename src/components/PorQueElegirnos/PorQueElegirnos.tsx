import { motion } from 'framer-motion';
import { FaComments, FaCode, FaTags, FaLifeRing } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const reasons = [
  {
    icon: <FaComments />,
    title: 'Comunicación directa',
    description: 'Hablás siempre con quien desarrolla tu proyecto, sin intermediarios ni cadenas de soporte.',
  },
  {
    icon: <FaCode />,
    title: 'Código a medida',
    description: 'Construimos cada sitio desde cero, adaptado a tu negocio. Nada de plantillas genéricas.',
  },
  {
    icon: <FaTags />,
    title: 'Presupuestos claros',
    description: 'Sabés desde el primer contacto qué incluye tu proyecto y cuánto cuesta, sin sorpresas.',
  },
  {
    icon: <FaLifeRing />,
    title: 'Acompañamiento post-entrega',
    description: 'Te ayudamos con ajustes y dudas después de la entrega, no desaparecemos al cobrar.',
  },
];

const PorQueElegirnos = () => {
  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-dark pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-4">
            <MdVerified className="text-3xl text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Por qué <span className="text-primary">elegirnos</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Somos un equipo chico, así que cada proyecto recibe atención real de principio a fin.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="text-primary text-3xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PorQueElegirnos;
