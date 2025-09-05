import React from 'react';
import './Acerca.css';

const Acerca = () => {
  return (
    <div className="acerca-container">
      <section className="acerca-hero">
        <h1>Acerca de Nosotros</h1>
        <p className="acerca-subtitle">Conoce más sobre nuestra historia y valores</p>
      </section>

      <section className="acerca-content">
        <div className="acerca-historia">
          <h2>Nuestra Historia</h2>
          <p>
            Fundada en 2015, nuestra empresa nació con la visión de revolucionar el sector 
            tecnológico mediante soluciones innovadoras y personalizadas. Desde nuestros 
            humildes comienzos en un pequeño garaje, hemos crecido hasta convertirnos en 
            un referente del sector, sirviendo a clientes en más de 20 países.
          </p>
          <p>
            Cada día, trabajamos con pasión para superar las expectativas de nuestros clientes 
            y contribuir positivamente a la comunidad tecnológica global.
          </p>
        </div>

        <div className="acerca-valores">
          <h2>Nuestros Valores</h2>
          <div className="valores-grid">
            <div className="valor-card">
              <h3>Innovación</h3>
              <p>Buscamos constantemente nuevas formas de resolver problemas complejos.</p>
            </div>
            <div className="valor-card">
              <h3>Calidad</h3>
              <p>Nos comprometemos con los más altos estándares en todo lo que hacemos.</p>
            </div>
            <div className="valor-card">
              <h3>Transparencia</h3>
              <p>Mantenemos una comunicación clara y honesta con nuestros clientes.</p>
            </div>
            <div className="valor-card">
              <h3>Sostenibilidad</h3>
              <p>Trabajamos de manera responsable con el medio ambiente y la sociedad.</p>
            </div>
          </div>
        </div>

        <div className="acerca-equipo">
          <h2>Nuestro Equipo</h2>
          <p>
            Contamos con un equipo multidisciplinario de más de 50 profesionales altamente 
            cualificados, incluyendo ingenieros, diseñadores, analistas y expertos en 
            experiencia de usuario. La diversidad de talentos nos permite abordar proyectos 
            complejos desde múltiples perspectivas.
          </p>
        </div>

        <div className="acerca-logros">
          <h2>Logros Destacados</h2>
          <div className="logros-grid">
            <div className="logro-item">
              <span className="logro-number">500+</span>
              <span className="logro-text">Proyectos Completados</span>
            </div>
            <div className="logro-item">
              <span className="logro-number">98%</span>
              <span className="logro-text">Clientes Satisfechos</span>
            </div>
            <div className="logro-item">
              <span className="logro-number">20+</span>
              <span className="logro-text">Países</span>
            </div>
            <div className="logro-item">
              <span className="logro-number">5</span>
              <span className="logro-text">Premios Internacionales</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Acerca; 