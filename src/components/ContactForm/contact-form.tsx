import { useState } from "react";
import './contact-form.css'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-heading">¿Tienes dudas? ¡Hablemos!</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        
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
          <button
            type="submit"
            className="form-button"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
