import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/acerca" className="nav-link">Acerca de</Link>
        <Link to="/contacto" className="nav-link">Contacto</Link>
      </nav>
    </div>
  );
};

export default Navbar;
 