// Pages/SaberMas/SaberMas.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../../components/Login/Login'; // Importar desde la carpeta components
import './SaberMas.css';

const SaberMas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('login');

  const openModal = (type = 'login') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="sabermas-container">
      {/* Hero Section */}
      <section className="sabermas-hero">
        <div className="container">
          <h1 className="sabermas-title">Descubre todo lo que podemos hacer por tu negocio</h1>
          <p className="sabermas-subtitle">
            Explora nuestras funciones principales y cómo pueden transformar tu operación diaria
          </p>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="features-detail-section">
        <div className="container">
          <div className="feature-detail">
            <div className="feature-detail-content">
              <h2>Gestión Inteligente de Proyectos</h2>
              <p>
                Nuestra plataforma utiliza algoritmos de IA para optimizar la asignación de recursos,
                prever posibles cuellos de botella y sugerir ajustes en tiempo real. Mantén todos tus
                proyectos en marcha con el máximo rendimiento.
              </p>
              <ul className="feature-benefits">
                <li>Asignación automática de tareas según habilidades y disponibilidad</li>
                <li>Predicción de tiempos de entrega con 95% de precisión</li>
                <li>Alertas proactivas sobre posibles retrasos</li>
                <li>Reportes detallados de productividad por equipo</li>
              </ul>
            </div>
            <div className="feature-detail-image">
              <div className="placeholder-image">
                <svg width="300" height="250" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 16L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="feature-detail reverse">
            <div className="feature-detail-image">
              <div className="placeholder-image">
                <svg width="300" height="250" viewBox="0 0 24 24" fill="none">
                  <path d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M21 12L3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="feature-detail-content">
              <h2>Análisis Predictivo Avanzado</h2>
              <p>
                Nuestro motor de analítica procesa millones de puntos de datos para ofrecerte
                insights accionables. Anticipa tendencias del mercado y toma decisiones basadas
                en datos concretos.
              </p>
              <ul className="feature-benefits">
                <li>Dashboard interactivo en tiempo real</li>
                <li>Pronósticos de ventas con machine learning</li>
                <li>Detección de patrones de comportamiento de clientes</li>
                <li>Recomendaciones personalizadas para optimización</li>
              </ul>
            </div>
          </div>

          <div className="feature-detail">
            <div className="feature-detail-content">
              <h2>Automatización de Procesos</h2>
              <p>
                Elimina tareas repetitivas y reduce errores humanos con nuestra suite de
                automatización. Desde envío de emails hasta generación de reportes, todo
                funciona de manera automática.
              </p>
              <ul className="feature-benefits">
                <li>Flujos de trabajo personalizables</li>
                <li>Integración con más de 100 aplicaciones</li>
                <li>Automatización de campañas de marketing</li>
                <li>Notificaciones inteligentes y programables</li>
              </ul>
            </div>
            <div className="feature-detail-image">
              <div className="placeholder-image">
                <svg width="300" height="250" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">Planes a tu medida</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Básico</h3>
              <div className="price">$29<span>/mes</span></div>
              <p>Perfecto para pequeñas empresas y emprendedores</p>
              <ul className="pricing-features">
                <li>Hasta 5 usuarios</li>
                <li>10GB de almacenamiento</li>
                <li>Soporte por email</li>
                <li>Funciones básicas de IA</li>
              </ul>
              <button onClick={() => openModal('register')} className="btn-primary">Comenzar ahora</button>
            </div>

            <div className="pricing-card featured">
              <div className="popular-badge">Más popular</div>
              <h3>Profesional</h3>
              <div className="price">$79<span>/mes</span></div>
              <p>Ideal para empresas en crecimiento</p>
              <ul className="pricing-features">
                <li>Hasta 20 usuarios</li>
                <li>50GB de almacenamiento</li>
                <li>Soporte prioritario 24/7</li>
                <li>Funciones avanzadas de IA</li>
                <li>Integraciones premium</li>
              </ul>
              <button onClick={() => openModal('register')} className="btn-primary">Comenzar ahora</button>
            </div>

            <div className="pricing-card">
              <h3>Empresarial</h3>
              <div className="price">$199<span>/mes</span></div>
              <p>Para grandes organizaciones</p>
              <ul className="pricing-features">
                <li>Usuarios ilimitados</li>
                <li>Almacenamiento ilimitado</li>
                <li>Soporte dedicado</li>
                <li>Funciones enterprise de IA</li>
                <li>Personalización avanzada</li>
                <li>API completa</li>
              </ul>
              <button onClick={() => openModal('register')} className="btn-primary">Comenzar ahora</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Preguntas frecuentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>¿Cómo funciona el periodo de prueba?</h3>
              <p>
                Ofrecemos 14 días completamente gratis sin requerir tarjeta de crédito.
                Puedes cancelar en cualquier momento durante el periodo de prueba.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Qué métodos de pago aceptan?</h3>
              <p>
                Aceptamos todas las tarjetas de crédito principales, transferencias bancarias
                y PayPal. Todas las transacciones están cifradas y son seguras.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Puedo cambiar de plan después?</h3>
              <p>
                Sí, puedes cambiar entre planes en cualquier momento. El cambio se reflejará
                inmediatamente en tu próxima facturación.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Ofrecen soporte técnico?</h3>
              <p>
                Sí, todos los planes incluyen soporte. Los planes Profesional y Empresarial
                incluyen soporte prioritario 24/7 con tiempo de respuesta garantizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <h2>¿Listo para comenzar?</h2>
          <p>Únete a miles de empresas que ya están transformando su negocio</p>
          <div className="cta-buttons">
            <button onClick={() => openModal('register')} className="btn-primary">
              Comenzar prueba gratuita
            </button>
            <Link to="/contacto" className="btn-outline">
              Contactar ventas
            </Link>
          </div>
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
 
export default SaberMas; 