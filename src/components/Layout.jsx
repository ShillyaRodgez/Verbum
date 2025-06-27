import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import '../styles/HomePage.css';

const Layout = () => {
  return (
    <div>
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
      <main style={{ paddingBottom: '3rem' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;