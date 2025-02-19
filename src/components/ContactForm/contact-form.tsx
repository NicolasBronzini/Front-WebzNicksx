import { useState } from "react";
import { motion } from "framer-motion"; // Importar Framer Motion
import "./contact-form.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true); // Mostrar animación de carga

    const response = await fetch("https://formspree.io/f/movjykkl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true); // Activar mensaje de éxito
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 1500); // Animación de reinicio
    } else {
      alert("Error al enviar el mensaje");
    }

    setIsSending(false); // Finalizar animación
  };

  return (
    <div id="formulario" className="contact-form-container">

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
          className="contact-form"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
            <h2 className="contact-form-heading">¿Tienes dudas? ¡Hablemos!</h2>
          {/* Nombre */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">Nombre</label>
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
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
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

          {/* Mensaje */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">Mensaje</label>
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
              {isSending ? "Enviando..." : "Enviar Mensaje"}
            </motion.button>
          </div>
        </motion.form>
      )}
    </div>
  );
};

export default ContactForm;
