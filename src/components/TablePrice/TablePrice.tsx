import React from 'react';
import './TablePrice.css';

const TablePrice = () => {
  const projects = [
    {
      type: 'Landing Page',
      description: 'Página simple con una o dos secciones, formulario de contacto, optimizada para SEO básico. Ideal para promocionar un producto o evento.',
      price: '$75 - $125',
      time: '1 - 2 semanas',
    },
    {
      type: 'E-commerce Básico',
      description: 'Tienda online con carrito de compras, integración con pasarelas de pago y catálogo simple (hasta 50 productos).',
      price: '$210 - $330',
      time: '3 - 5 semanas',
    },
    {
      type: 'E-commerce Avanzado',
      description: 'Funcionalidades adicionales como filtros avanzados, múltiples métodos de pago, integración con ERP, y panel de administración personalizado.',
      price: '$375 - $665',
      time: '6 - 10 semanas',
    },
    {
      type: 'Página Corporativa',
      description: 'Funcionalidades adicionales como filtros avanzados, múltiples métodos de pago, integración con ERP, y panel de administración personalizado.',
      price: '$375 - $665',
      time: '2 - 4 semanas',
    },
    {
      type: 'Aplicación Web',
      description: 'Sistema a medida (ej. CRM, ERP, Dashboard de administración) con funcionalidades específicas y base de datos.',
      price: '$500 - $1.000',
      time: '8 - 16 semanas',
    },
    {
      type: 'API Básica',
      description: 'API REST simple para integrar datos entre sistemas. Incluye CRUD (Create, Read, Update, Delete) y autenticación básica. Ideal para proyectos que requieren conexión con bases de datos o apps móviles/web.',
      price: '$150 - $300',
      time: '2 - 4 semanas',
    },
    {
      type: 'API Avanzada',
      description: 'API con funcionalidades complejas como autenticación OAuth, integración con servicios de terceros, manejo de pagos, o procesamiento de datos en tiempo real.',
      price: '$400 - $800',
      time: '4 - 8 semanas',
    },
    {
      type: 'Mantenimiento Mensual',
      description: 'Incluye actualizaciones de seguridad, pequeños cambios de contenido y soporte técnico.',
      price: '$12 - $29',
      time: '-',
    },
  ];

  return (
    <div className="table-container">
      <table className="table-price">
        <thead>
          <tr>
            <th>Tipo de Proyecto</th>
            <th>Descripción</th>
            <th>Precio Estimado (USD)</th>
            <th>Tiempo Estimado</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td data-label="Tipo de Proyecto" className="bold">{project.type}</td>
              <td data-label="Descripción">{project.description}</td>
              <td data-label="Precio Estimado (USD)" className="center">{project.price}</td>
              <td data-label="Tiempo Estimado" className="center">{project.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePrice;
