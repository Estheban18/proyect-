import React from 'react';
import './FloatingParticles.css';

const FloatingParticles = () => {
  return (
    <div className="floating-particles space-theme">
      {/* Fondo estelar */}
      <div className="star-field"></div>
      
      {/* Planetas */}
      <div className="particle planet planet-1"></div>
      <div className="particle planet planet-2"></div>
      <div className="particle planet planet-3"></div>
      
      {/* Meteoritos */}
      <div className="particle meteor meteor-1"></div>
      <div className="particle meteor meteor-2"></div>
      <div className="particle meteor meteor-3"></div>
      <div className="particle meteor meteor-4"></div>
      
      {/* Estrellas */}
      <div className="particle star star-1"></div>
      <div className="particle star star-2"></div>
      <div className="particle star star-3"></div>
      <div className="particle star star-4"></div>
      <div className="particle star star-5"></div>
      <div className="particle star star-6"></div>
      
      {/* Cometas */}
      <div className="particle comet comet-1"></div>
      <div className="particle comet comet-2"></div>
      
      {/* Satélites */}
      <div className="particle satellite satellite-1"></div>
      <div className="particle satellite satellite-2"></div>
    </div>
  );
};

export default FloatingParticles; 