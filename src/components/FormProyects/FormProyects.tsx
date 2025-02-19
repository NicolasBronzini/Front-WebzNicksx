import { useState } from "react";
import { motion } from "framer-motion"; // Importamos Framer Motion
import "./FormProyects.css"; // Archivo de estilos

const FormProyectos = () => {
  const [formData, setFormData] = useState({ nombre: "", email: "", idea: "", category:"" });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsSending(true);

    // Simulación de envío (reemplazar con lógica real)
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSending(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ nombre: "", email: "", idea: "", category:"" });
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
          >
            🎉 ¡Mensaje enviado correctamente!
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="idea">Tu idea de proyecto:</label>
              <textarea
                id="idea"
                name="idea"
                value={formData.idea}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="btn_form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSending}
            >
              {isSending ? "Enviando..." : "Enviar"}
            </motion.button>
          </motion.form>
        )}
      </div>
      <div className="explicacion">
        <h2>¿Tienes una idea de proyecto?</h2>
        <p>¡Nos encantaría escucharla! Por favor, completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>
      </div>
    </div>
  );
};

export default FormProyectos;
