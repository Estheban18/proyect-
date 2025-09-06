// components/Login/Login.jsx
import React, { useState } from 'react';
import './Login.css';

const Login = ({ isOpen, onClose, initialModalType = 'login' }) => {
  const [modalType, setModalType] = useState(initialModalType);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación/registro
    console.log('Formulario enviado:', formData);
  };

  const switchModalType = (type) => {
    setModalType(type);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="modal-content">
          <div className="modal-header">
            <h2>{modalType === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}</h2>
            <p>{modalType === 'login' ? 'Accede a tu cuenta' : 'Únete a nuestra comunidad'}</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {modalType === 'register' && (
              <div className="form-group">
                <label htmlFor="name">Nombre completo</label>
                <div className="input-container">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre completo"
                    required
                  />
                  <i className="fas fa-user"></i>
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <div className="input-container">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tu.email@ejemplo.com"
                  required
                />
                <i className="fas fa-envelope"></i>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <div className="input-container">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Tu contraseña segura"
                  required
                />
                <i className="fas fa-lock"></i>
                <button type="button" className="password-toggle">
                  <i className="fas fa-eye"></i>
                </button>
              </div>
            </div>

            {modalType === 'register' && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <div className="input-container">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Repite tu contraseña"
                    required
                  />
                  <i className="fas fa-lock"></i>
                </div>
              </div>
            )}

            {modalType === 'login' && (
              <div className="login-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  Recordar sesión
                </label>
                <a href="#forgot" className="forgot-password">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            )}

            <button type="submit" className="login-btn">
              {modalType === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>

          <div className="separator">
            <span>o continúa con</span>
          </div>

          <div className="social-login">
            <button className="social-btn google">
              <i className="fab fa-google"></i>
            </button>
            <button className="social-btn facebook">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="social-btn twitter">
              <i className="fab fa-twitter"></i>
            </button>
          </div>

          <div className="login-extra">
            <p>
              {modalType === 'login' ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  switchModalType(modalType === 'login' ? 'register' : 'login');
                }}
              >
                {modalType === 'login' ? 'Regístrate ahora' : 'Inicia sesión'}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 