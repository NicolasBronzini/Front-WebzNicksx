import { useState } from "react";
import "./ProyectForm.css";

const ProyectForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

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
    console.log(formData);
    // Aquí puedes manejar el envío del formulario
  };

  return (
    <>
    <div className="contact-form-container">
      <h2 className="contact-form-heading">¡Cuéntanos sobre tu proyecto!</h2>
      <form onSubmit={handleSubmit} className="contact-form">
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
          <button type="submit" className="form-button">
            Enviar Proyecto
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default ProyectForm;
