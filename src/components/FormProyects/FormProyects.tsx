import { useState } from 'react';
import './FormProyects.css'; // Archivo de estilos
// import iconWebs from '../../assets/img/Icons/webicons.png'
const FormProyectos = () => {
  // Estados para almacenar los valores de los campos del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Aquí puedes enviar los datos a tu backend o hacer lo que necesites con ellos
    console.log('Datos enviados:', { nombre, email, idea });
    // Puedes añadir aquí la lógica para enviar los datos a tu servidor
  };

  return (
    <div className="formulario-container">
   
    <div className="formulario">
      <h2>Envíanos tu idea de proyecto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="idea">Tu idea de proyecto:</label>
          <textarea
            id="idea"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className='btn_form'>Enviar</button>
      </form>
    </div>
    <div className="explicacion">
      <h2>¿Tienes una idea de proyecto?</h2>
     
      <p>¡Nos encantaría escucharla! Por favor, completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible para discutir cómo podemos ayudarte a convertir tu idea en realidad.</p>
    </div>
  </div>
  );
};

export default FormProyectos;
