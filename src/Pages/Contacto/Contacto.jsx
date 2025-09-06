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
              <p>+33 (0)1 23 45 67 89</p>
              <p>+33 (0)1 98 76 54 32</p>
            </div>
          </div>

          <div className="contacto-item">
            <div className="contacto-icon">📍</div>
            <div>
              <h3>Dirección</h3>
              <p>Av. des Champs-Élysées 123</p>
              <p>75008 París, Francia</p>
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.99144060821!2d2.292292615674389!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1ses!2sfr!4v1633018226785!5m2!1ses!2sfr"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de nuestra empresa en París, Francia"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacto; 