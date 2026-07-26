import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaRegQuestionCircle } from 'react-icons/fa';

const faqs = [
  {
    question: '¿Cuánto tiempo tarda en desarrollarse mi sitio web?',
    answer: 'Depende del alcance del proyecto. Una landing page suele estar lista en 1-2 semanas, mientras que un sitio con funcionalidades a medida o e-commerce puede tomar varias semanas más. Te damos un tiempo estimado apenas definimos el alcance.',
  },
  {
    question: '¿Qué incluye el servicio de desarrollo?',
    answer: 'Diseño de la interfaz, desarrollo del front-end y back-end necesarios, integración de las herramientas que tu negocio requiera, y pruebas antes de la entrega. El detalle exacto se ajusta a cada presupuesto.',
  },
  {
    question: '¿Ofrecen soporte después de la entrega?',
    answer: 'Sí, te acompañamos con ajustes y dudas una vez entregado el proyecto. Las condiciones puntuales de soporte se conversan al cerrar cada proyecto.',
  },
  {
    question: '¿Puedo pedir cambios durante el desarrollo?',
    answer: 'Sí, trabajamos por etapas y te mostramos avances en el camino para poder ajustar el rumbo antes de la entrega final.',
  },
  {
    question: '¿Trabajan con e-commerce o integraciones de pago?',
    answer: 'Sí, desarrollamos tiendas online e integramos pasarelas de pago, APIs y servicios externos según lo que tu negocio necesite.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-slate-900 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-4">
            <FaRegQuestionCircle className="text-3xl text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Preguntas <span className="text-primary">frecuentes</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Si tenés otra duda que no está acá, escribinos y te respondemos directamente.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <FaChevronDown
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
