import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import emailjs from '@emailjs/browser';

interface ProyectFormProps {
  initialProjectType?: string;
}

const ProyectForm = ({ initialProjectType }: ProyectFormProps) => {
  const [isSending, setIsSending] = useState(false);
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      project_type: formData.projectType,
      message: `
        Nombre: ${formData.name}
        Correo: ${formData.email}
        Tipo de Proyecto: ${formData.projectType}
        Presupuesto: ${formData.budget || 'No especificado'}
        Tiempo estimado: ${formData.timeline || 'No especificado'}
        Detalles: ${formData.message}
      `,
      to_email: 'nicolasbronzini7@gmail.com'
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          alert("¡Proyecto enviado con éxito! Nos pondremos en contacto pronto.");
          setFormData({ ...formData, message: "", name: "", email: "" }); // Keep project type maybe?
          setIsSending(false);
      }, (error) => {
          console.log(error.text);
          alert("Hubo un error al enviar el proyecto. Por favor intenta nuevamente.");
          setIsSending(false);
      });
  };

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-full h-full max-w-4xl bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">¡Cuéntanos sobre tu <span className="text-primary">proyecto</span>!</h2>
            <p className="text-gray-400">Completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-700 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
                    placeholder="tucorreo@ejemplo.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-sm font-medium text-gray-300 ml-1">Tipo de Proyecto</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white placeholder-gray-500 transition-all appearance-none"
                    required
                  >
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
                {/* Could add budget or timeline here if needed, keeping it simple for now matching original structure mostly */}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Descripción del Proyecto</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white placeholder-gray-500 transition-all resize-none"
                  rows={5}
                  placeholder="Cuéntanos los detalles..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Enviar Proyecto <FaRocket className="text-sm" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProyectForm;


