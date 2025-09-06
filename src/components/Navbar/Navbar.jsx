import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar-container">
      <button 
        className={`hamburger-btn ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Menú principal"
        aria-expanded={isOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      
      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>Inicio</Link>
        <Link to="/galeria" className="nav-link" onClick={closeMenu}>Galería</Link>
        <Link to="/sabermas" className="nav-link" onClick={closeMenu}>Saber Más</Link>
        <Link to="/acerca" className="nav-link" onClick={closeMenu}>Acerca de</Link>
        <Link to="/contacto" className="nav-link" onClick={closeMenu}>Contacto</Link>
      </nav>
      
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </div>
  );
};

export default Navbar; 