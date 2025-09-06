import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-screen">
      {/* Partículas flotantes */}
      <div className="floating-particles">
        <div className="particle particle-1">🚀</div>
        <div className="particle particle-2">💡</div>
        <div className="particle particle-3">⚡</div>
        <div className="particle particle-4">🌐</div>
        <div className="particle particle-5">🔍</div>
        <div className="particle particle-6">📊</div>
      </div>
      
      {/* Contenido principal */}
      <div className="loading-content">
        <div className="logo-container">
          <div className="logo-spinner">
            <div className="logo-inner">
              <span className="logo-icon">T</span>
            </div>
          </div>
        </div>
        
        <h1 className="loading-title">Welcome to My App</h1>
        <p className="loading-subtitle">Transformando tu negocio digital</p>
        
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <span className="progress-text">Cargando recursos...</span>
        </div>
      </div>
      
      {/* Efectos de fondo */}
      <div className="background-effects">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>
    </div>
  );
};

export default Loading; 