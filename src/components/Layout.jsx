import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import '../styles/HomePage.css';

const Layout = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  useEffect(() => {
    if (isDashboard) {
      document.body.classList.add('dashboard-view');
    } else {
      document.body.classList.remove('dashboard-view');
    }

    return () => {
      document.body.classList.remove('dashboard-view');
    };
  }, [isDashboard]);

  if (isDashboard) {
    return <Outlet />;
  }

  return (
    <div className="site-container">
      <header className="header">
        <div className="logo">
          <img src="/Imagem3.png" alt="Verbum Logo" className="logo-image" />
        </div>
        <nav className="menu-bar">
          <Link to="/" className="menu-item">Início</Link>
          <Link to="/about" className="menu-item">Sobre</Link>
          <Link to="/contact" className="menu-item">Contato</Link>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        </nav>
      </header>
      <main className="site-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;