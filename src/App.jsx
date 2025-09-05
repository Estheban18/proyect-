// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Inicio from './Pages/inicio/inicio';
import Acerca from './Pages/Acerca/Acerca';
import Contacto from './Pages/Contacto/Contacto';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/contacto" element={<Contacto />} />
            {/* Ruta para páginas no encontradas */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
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
            <li><Link to="/acerca">Acerca de</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>📧 info@empresa.com</p>
          <p>📞 +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Mi Empresa. Todos los derechos reservados.</p>
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