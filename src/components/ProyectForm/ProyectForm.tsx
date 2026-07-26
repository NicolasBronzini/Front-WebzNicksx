import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRocket, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import emailjs from '@emailjs/browser';

interface ProyectFormProps {
  initialProjectType?: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const ProyectForm = ({ initialProjectType }: ProyectFormProps) => {
  const [status, setStatus] = useState<Status>('idle');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      project_type: formData.projectType,
      message: `Nombre: ${formData.name}\nCorreo: ${formData.email}\nTipo de Proyecto: ${formData.projectType}\nPresupuesto: ${formData.budget || 'No especificado'}\nPlazo: ${formData.timeline || 'No especificado'}\nDetalles: ${formData.message}`,
      to_email: 'nicolasbronzini7@gmail.com',
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ name: "", email: "", projectType: "", budget: "", timeline: "", message: "" });
      })
      .catch(() => {
        setStatus('error');
      });
  };

  const inputClass = "w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white placeholder-gray-500 transition-all";

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-full max-w-4xl bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              ¡Cuéntanos sobre tu <span className="text-primary">proyecto</span>!
            </h2>
            <p className="text-gray-400">Completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-700 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <FaCheckCircle className="text-secondary text-5xl mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">¡Proyecto enviado!</h3>
                  <p className="text-gray-400 mb-6">Nos pondremos en contacto contigo muy pronto. ¡Gracias!</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm"
                  >
                    Enviar otro proyecto
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Nombre</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="Tu nombre" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Correo Electrónico</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="tucorreo@ejemplo.com" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-sm font-medium text-gray-300 ml-1">Tipo de Proyecto</label>
                      <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className={`${inputClass} appearance-none`} required>
                        <option value="" disabled className="bg-slate-800 text-gray-500">Seleccionar...</option>
                        <option value="Landing Page" className="bg-slate-800">Landing Page</option>
                        <option value="E-commerce Básico" className="bg-slate-800">E-commerce Básico</option>
                        <option value="E-commerce Avanzado" className="bg-slate-800">E-commerce Avanzado</option>
                        <option value="Página Corporativa" className="bg-slate-800">Página Corporativa</option>
                        <option value="Aplicación Web" className="bg-slate-800">Aplicación Web</option>
                        <option value="API Básica" className="bg-slate-800">API Básica</option>
                        <option value="API Avanzada" className="bg-slate-800">API Avanzada</option>
                        <option value="Mantenimiento" className="bg-slate-800">Mantenimiento Mensual</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium text-gray-300 ml-1">Presupuesto estimado</label>
                      <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={`${inputClass} appearance-none`}>
                        <option value="" className="bg-slate-800 text-gray-500">No especificado</option>
                        <option value="Menos de $200" className="bg-slate-800">Menos de $200</option>
                        <option value="$200 - $500" className="bg-slate-800">$200 – $500</option>
                        <option value="$500 - $1000" className="bg-slate-800">$500 – $1.000</option>
                        <option value="Más de $1000" className="bg-slate-800">Más de $1.000</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="timeline" className="text-sm font-medium text-gray-300 ml-1">Plazo deseado</label>
                      <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className={`${inputClass} appearance-none`}>
                        <option value="" className="bg-slate-800 text-gray-500">No especificado</option>
                        <option value="Menos de 2 semanas" className="bg-slate-800">Menos de 2 semanas</option>
                        <option value="2 - 4 semanas" className="bg-slate-800">2 – 4 semanas</option>
                        <option value="1 - 3 meses" className="bg-slate-800">1 – 3 meses</option>
                        <option value="Más de 3 meses" className="bg-slate-800">Más de 3 meses</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Descripción del Proyecto</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} rows={5} placeholder="Cuéntanos los detalles de tu proyecto..." required />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                      <FaTimesCircle className="flex-shrink-0" />
                      Hubo un error al enviar el proyecto. Por favor intentá nuevamente.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {status === 'sending' ? (
                      <>
                        <ImSpinner2 className="animate-spin" /> Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Proyecto <FaRocket className="text-sm" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProyectForm;
