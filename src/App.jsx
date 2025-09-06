import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Inicio from './Pages/inicio/inicio';
import Acerca from './Pages/Acerca/Acerca';
import Contacto from './Pages/Contacto/Contacto';
import SaberMas from './Pages/SaberMas/SaberMas';
import Galeriadeimagenes from './Pages/Galeriadeimagenes/Galeriadeimagenes';
import Chatbot from './components/Chatbot/Chatbot';
import Whatsappchat from './components/Whatsappchat/Whatsappchat';
import SocialFloat from './components/SocialFloat/SocialFloat';
import Loading from './components/Loading/Loading';
import FloatingParticles from './components/FloatingParticles/FloatingParticles'; // Importar partículas
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula el tiempo de carga de la aplicación
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 segundos

    return () => clearTimeout(timer);
  }, []);

  // Mostrar pantalla de carga mientras isLoading sea true
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="App">
        <FloatingParticles /> {/* Partículas flotantes en toda la app */}
        <Header />
        <Navbar />
        <SocialFloat />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sabermas" element={<SaberMas />} />
            <Route path="/galeria" element={<Galeriadeimagenes />} />
            {/* Ruta para páginas no encontradas */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
        <Whatsappchat />
      </div>
    </Router>
  );
}

// Componente Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Nuestra Empresa</h3>
          <p>Ofrecemos las mejores soluciones digitales para tu negocio.</p>
        </div>
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/galeria">Galería</Link></li>
            <li><Link to="/sabermas">Saber Más</Link></li>
            <li><Link to="/acerca">Acerca de</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>📧 info@empresa.com</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>💬 +1 (555) 123-WAPP</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Mi Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

// Componente para página no encontrada
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 - Página No Encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="home-link">Volver al Inicio</Link>
    </div>
  );
};

export default App; 