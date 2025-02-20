import { useState } from "react";
import { motion } from "framer-motion"; // Importar Framer Motion
import "./FormProyects.css"; // Archivo de estilos

const FormProyectos = () => {
  const [formData, setFormData] = useState({ nombre: "", email: "", idea: "", category: "" });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSending(true);

    // Simulación de envío (reemplazar con lógica real)
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSending(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ nombre: "", email: "", idea: "", category: "" });
      }, 1500);
    }, 2000);
  };

  return (
    <div className="formulario-container">
      <div className="formulario">
        <h2>Envíanos tu idea de proyecto</h2>
        
        {isSubmitted ? (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            aria-live="polite" // Accesibilidad para notificar a los lectores de pantalla
          >
            🎉 ¡Mensaje enviado correctamente!
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Nombre */}
            <div className="form-group">
              <label htmlFor="nombre" className="form-label">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="form-input"
                aria-label="Tu nombre completo"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                aria-label="Tu correo electrónico"
              />
            </div>

            {/* Idea */}
            <div className="form-group">
              <label htmlFor="idea" className="form-label">Tu idea de proyecto:</label>
              <textarea
                id="idea"
                name="idea"
                value={formData.idea}
                onChange={handleChange}
                required
                className="form-input"
                rows={5}
                aria-label="Describe tu idea de proyecto"
              ></textarea>
            </div>

            {/* Botón de Enviar */}
            <motion.button
              type="submit"
              className="btn_form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSending}
              aria-label={isSending ? "Enviando..." : "Enviar mensaje"}
            >
              {isSending ? "Enviando..." : "Enviar"}
            </motion.button>
          </motion.form>
        )}
      </div>

      {/* Sección de Explicación */}
      <div className="explicacion">
        <h2>¿Tienes una idea de proyecto?</h2>
        <p>¡Nos encantaría escucharla! Por favor, completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>
      </div>
    </div>
  );
};

export default FormProyectos;
