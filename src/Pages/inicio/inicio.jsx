// Pages/Inicio/Inicio.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Login from '../../components/Login/Login';
import './Inicio.css';

const Inicio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('login');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide para testimonios
  const testimonials = [
    {
      text: "Esta plataforma transformó completamente nuestro negocio. Increíble soporte y resultados.",
      author: "María González",
      role: "CEO, TechCorp"
    },
    {
      text: "La mejor inversión que hemos hecho. ROI del 300% en los primeros 6 meses.",
      author: "Carlos Rodríguez",
      role: "Director, StartupXYZ"
    },
    {
      text: "Interfaz intuitiva y potente. Nuestro equipo se adaptó en días, no semanas.",
      author: "Ana López",
      role: "Product Manager"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const openModal = (type = 'login') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="inicio-container">
      {/* Hero Section Enhanced */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-particles"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            🚀 Más de 10,000 empresas confían en nosotros
          </div>
          <h1 className="hero-title">
            Transforma tu <span className="highlight">Negocio Digital</span>
          </h1>
          <p className="hero-subtitle">
            Soluciones innovadoras impulsadas por IA que revolucionarán tu forma de trabajar. 
            Aumenta tu productividad hasta un 300% y mantente siempre un paso adelante.
          </p>
          <div className="hero-buttons">
            <button onClick={() => openModal('register')} className="btn-primary">
              Comenzar Gratis
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link to="/galeria" className="btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Explora nuestra galería de imágenes
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Empresas</span>
            </div>
            <div className="stat">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Soporte</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">¿Por qué elegir nuestra plataforma?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Velocidad Ultrarrápida</h3>
              <p>Procesa miles de operaciones por segundo con nuestra infraestructura optimizada.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22S2 16 2 10A10 10 0 0 1 22 10C22 16 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Seguridad Empresarial</h3>
              <p>Cifrado de extremo a extremo y cumplimiento con estándares internacionales.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12L3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Integración Perfecta</h3>
              <p>Conecta con más de 100 herramientas populares sin esfuerzo adicional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="gallery-preview-section">
        <div className="container">
          <h2 className="section-title">Explora nuestra galería de imágenes</h2>
          <p className="section-subtitle">Descubre el poder visual de nuestra plataforma</p>
          <div className="gallery-preview-grid">
            <div className="gallery-preview-item">
              <div className="preview-image">
                <img src="https://picsum.photos/300/200?random=1" alt="Galería muestra 1" />
                <div className="preview-overlay">
                  <span>Ver más</span>
                </div>
              </div>
              <h3>Diseños Creativos</h3>
            </div>
            <div className="gallery-preview-item">
              <div className="preview-image">
                <img src="https://picsum.photos/300/200?random=2" alt="Galería muestra 2" />
                <div className="preview-overlay">
                  <span>Ver más</span>
                </div>
              </div>
              <h3>Proyectos Realizados</h3>
            </div>
            <div className="gallery-preview-item">
              <div className="preview-image">
                <img src="https://picsum.photos/300/200?random=3" alt="Galería muestra 3" />
                <div className="preview-overlay">
                  <span>Ver más</span>
                </div>
              </div>
              <h3>Clientes Satisfechos</h3>
            </div>
          </div>
          <div className="gallery-preview-cta">
            <Link to="/galeria" className="btn-primary">
              Ver galería completa
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <div className="testimonials-slider">
            <div className="testimonial-card active">
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{testimonials[currentSlide].text}</p>
                <div className="testimonial-author">
                  <strong>{testimonials[currentSlide].author}</strong>
                  <span>{testimonials[currentSlide].role}</span>
                </div>
              </div>
            </div>
            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Enhanced */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Listo para transformar tu negocio?</h2>
          <p>Únete a más de 10,000 empresas que ya están creciendo con nuestra plataforma</p>
          <div className="cta-buttons">
            <button onClick={() => openModal('register')} className="btn-primary">
              Prueba Gratuita de 14 Días
            </button>
            <Link to="/galeria" className="btn-outline">
              Ver Galería
            </Link>
          </div>
          <p className="cta-note">Sin tarjeta de crédito • Cancelación en cualquier momento</p>
        </div>
      </section>

      {/* Usar el componente Login importado */}
      <Login 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        initialModalType={modalType}
      />
    </div>
  );
};

export default Inicio; 