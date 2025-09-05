import React from 'react';
import './Inicio.css';

const Inicio = () => {
  return (
    <div className="inicio-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenido a Nuestra Plataforma</h1>
          <p className="hero-subtitle">
            Descubre soluciones innovadoras que transformarán tu experiencia digital
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Comenzar Ahora</button>
            <button className="btn-secondary">Saber Más</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">
            🚀
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>¿Por Qué Elegirnos?</h2>
          <p>Ofrecemos las mejores soluciones del mercado</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Rápido y Eficiente</h3>
            <p>Nuestra tecnología garantiza tiempos de carga ultrarrápidos y máximo rendimiento.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Seguro y Confiable</h3>
            <p>Protegemos tus datos con los más altos estándares de seguridad del sector.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Diseño Moderno</h3>
            <p>Interfaces intuitivas y atractivas que mejoran la experiencia de usuario.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Totalmente Responsivo</h3>
            <p>Funciona perfectamente en todos los dispositivos y navegadores.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">10,000+</span>
            <span className="stat-label">Usuarios Satisfechos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Tiempo Activo</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Soporte Técnico</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">Años de Experiencia</span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>Lo Que Dicen Nuestros Clientes</h2>
          <p>Testimonios reales de usuarios satisfechos</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-text">
              "Increíble servicio. La plataforma superó todas mis expectativas y el soporte fue excepcional."
            </div>
            <div className="testimonial-author">
              <span className="author-name">María González</span>
              <span className="author-role">CEO, TechSolutions</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-text">
              "La implementación fue sencilla y los resultados fueron inmediatos. ¡Altamente recomendado!"
            </div>
            <div className="testimonial-author">
              <span className="author-name">Carlos Rodríguez</span>
              <span className="author-role">Director de Marketing</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Listo para Comenzar?</h2>
          <p>Únete a miles de usuarios que ya están transformando su experiencia digital</p>
          <button className="btn-primary">Crear Cuenta Gratuita</button>
        </div>
      </section>
    </div>
  );
};

export default Inicio; 