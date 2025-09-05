import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
  };

  return (
    <div className="contacto-container">
      <div className="contacto-hero">
        <h1>Contacto</h1>
        <p>Estamos aquí para ayudarte. ¡Escríbenos!</p>
      </div>

      <div className="contacto-content">
        <div className="contacto-info">
          <h2>Información de Contacto</h2>
          
          <div className="contacto-item">
            <div className="contacto-icon">📧</div>
            <div>
              <h3>Email</h3>
              <p>contacto@empresa.com</p>
              <p>soporte@empresa.com</p>
            </div>
          </div>

          <div className="contacto-item">
            <div className="contacto-icon">📞</div>
            <div>
              <h3>Teléfono</h3>
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 987-6543</p>
            </div>
          </div>

          <div className="contacto-item">
            <div className="contacto-icon">📍</div>
            <div>
              <h3>Dirección</h3>
              <p>Av. Principal #123</p>
              <p>Ciudad, País 12345</p>
            </div>
          </div>

          <div className="contacto-item">
            <div className="contacto-icon">🕒</div>
            <div>
              <h3>Horario de Atención</h3>
              <p>Lunes a Viernes: 9:00 - 18:00</p>
              <p>Sábados: 10:00 - 14:00</p>
            </div>
          </div>
        </div>

        <div className="contacto-form-container">
          <h2>Envíanos un Mensaje</h2>
          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu.email@ejemplo.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="asunto">Asunto *</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
                placeholder="Asunto del mensaje"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Enviar Mensaje
            </button>

            {enviado && (
              <div className="mensaje-exito">
                ✅ ¡Mensaje enviado correctamente! Te contactaremos pronto.
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="contacto-mapa">
        <h2>¿Dónde Estamos?</h2>
        <div className="mapa-container">
          <div className="mapa-placeholder">
            <h3>📍 Nuestra Ubicación</h3>
            <p>Av. Principal #123, Ciudad, País</p>
            <div className="mapa-imagen">
              {/* Aquí iría un mapa real con Google Maps o similar */}
              <span>🌍 Mapa interactivo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto; 