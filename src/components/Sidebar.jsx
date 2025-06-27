import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/dashboard/meus-dados">Meus Dados</Link></li>
          <li><Link to="/dashboard/minha-turma">Minha Turma</Link></li>
          <li><Link to="/dashboard/falar-com-lider">Falar com o Líder</Link></li>
          <li><Link to="/dashboard/galeria">Nossa Galeria</Link></li>
          <li><Link to="/dashboard/recados">Recados do Líder</Link></li>
          <li><Link to="/dashboard/calendario">Calendário</Link></li>
          <li><Link to="/dashboard/edicao-atual">Edição Atual</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;