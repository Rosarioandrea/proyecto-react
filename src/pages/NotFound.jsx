import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de que estás utilizando react-router

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h1>404 Not Found</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
        Volver a la página principal
      </Link>
    </div>
  );
};

export default NotFound; // Exportación por defecto