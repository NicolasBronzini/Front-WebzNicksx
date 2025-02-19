import { useState } from "react";
import { motion } from "framer-motion"; // Importamos Framer Motion
import "./ProyectForm.css"; // Archivo de estilos

const ProyectForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    // Simulación de envío (reemplazar con lógica real)
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSending(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
        });
      }, 1500); // Desaparece el mensaje después de 1.5 segundos
    }, 2000); // Simula que el formulario se envía después de 2 segundos
  };

  return (
    <>
      <div className="contact-form-container">
        {isSubmitted ? (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            🎉 ¡Mensaje enviado correctamente!
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="contact-form"
          >
          <h2 className="contact-form-heading">¡Cuéntanos sobre tu proyecto!</h2>
            {/* Nombre */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            {/* Tipo de Proyecto */}
            <div className="form-group">
              <label htmlFor="projectType" className="form-label">
                Tipo de Proyecto
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="" disabled>
                  Seleccionar...
                </option>
                <option value="landing-page">Landing Page</option>
                <option value="ecommerce-basico">E-commerce Básico</option>
                <option value="ecommerce-avanzado">E-commerce Avanzado</option>
                <option value="pagina-corporativa">Página Corporativa</option>
                <option value="aplicacion-web">Aplicación Web</option>
                <option value="api-basica">API Básica</option>
                <option value="api-avanzada">API Avanzada</option>
                <option value="mantenimiento-mensual">
                  Mantenimiento Mensual
                </option>
              </select>
            </div>

            {/* Descripción del Proyecto */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Descripción del Proyecto
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input"
                rows={5}
                required
              ></textarea>
            </div>

            {/* Botón de Enviar */}
            <div className="form-group">
              <motion.button
                type="submit"
                className="form-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSending}
              >
                {isSending ? "Enviando..." : "Enviar Proyecto"}
              </motion.button>
            </div>
          </motion.form>
        )}
      </div>
    </>
  );
};

export default ProyectForm;
