import React, { useState } from 'react';
import './Galeriadeimagenes.css';

const Galeriadeimagenes = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [imagenActual, setImagenActual] = useState(null);
  const [tituloActual, setTituloActual] = useState('');

  // Datos de ejemplo para las imágenes
  const imagenes = [
    { id: 1, src: 'https://picsum.photos/300/200?random=1', titulo: 'Paisaje Natural' },
    { id: 2, src: 'https://picsum.photos/300/200?random=2', titulo: 'Ciudad Nocturna' },
    { id: 3, src: 'https://picsum.photos/300/200?random=3', titulo: 'Atardecer' },
    { id: 4, src: 'https://picsum.photos/300/200?random=4', titulo: 'Montañas' },
    { id: 5, src: 'https://picsum.photos/300/200?random=5', titulo: 'Playa' },
    { id: 6, src: 'https://picsum.photos/300/200?random=6', titulo: 'Arquitectura' },
    { id: 7, src: 'https://picsum.photos/300/200?random=7', titulo: 'Flores' },
    { id: 8, src: 'https://picsum.photos/300/200?random=8', titulo: 'Animales' },
  ];

  const abrirModal = (imagen, titulo) => {
    setImagenActual(imagen);
    setTituloActual(titulo);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  return (
    <div className="galeria-container">
      <h1>Galería de Imágenes</h1>
      <div className="galeria-grid">
        {imagenes.map((imagen) => (
          <div 
            key={imagen.id} 
            className="caja-imagen"
            onClick={() => abrirModal(imagen.src, imagen.titulo)}
          >
            <img src={imagen.src} alt={imagen.titulo} />
            <div className="overlay">
              <p>{imagen.titulo}</p>
            </div>
          </div>
        ))}
      </div>

      {modalAbierto && (
        <div className="modal" onClick={cerrarModal}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <span className="cerrar" onClick={cerrarModal}>&times;</span>
            <img src={imagenActual} alt="Imagen en modal" />
            <h2>{tituloActual}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeriadeimagenes; 