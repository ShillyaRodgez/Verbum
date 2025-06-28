import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/DashboardHeader.css';

const DashboardHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you would clear user session here
    // For example: localStorage.removeItem('userToken');
    console.log('Usuário deslogado');
    navigate('/login');
  };

  return (
    <header className="dashboard-header">
      <div className="dashboard-header-content">
        <img src="/Imagem3.png" alt="Verbum Logo" className="dashboard-logo" />
        <nav className="dashboard-nav">
          <Link to="/" className="dashboard-nav-item">Início</Link>
          <button onClick={handleLogout} className="dashboard-nav-item logout-btn">Sair</button>
        </nav>
      </div>
    </header>
  );
};

export default DashboardHeader;