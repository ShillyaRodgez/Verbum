import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaUsers, FaComment, FaImages, FaBullhorn, FaCalendarAlt, FaBook, FaBars } from 'react-icons/fa';
import styles from '../styles/Sidebar.module.css';
import profilePic from '../assets/images/paraperfil.jpg'; // Assumindo o caminho da imagem

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      <nav className={styles.sidebarNav}>
        <ul>
          <li><button className={styles.toggleBtn} onClick={toggleSidebar}><FaBars /></button></li>
          <li className={styles.profileSection}>
            <div className={styles.profilePic}>
              <img src={profilePic} alt="Foto de Perfil" />
            </div>
          </li>
          <li><NavLink to="/dashboard/inicio" className={({ isActive }) => (isActive ? styles.active : '')}><FaHome /> <span>Início</span></NavLink></li>
          <li><NavLink to="/dashboard/meus-dados" className={({ isActive }) => (isActive ? styles.active : '')}><FaUser /> <span>Meus Dados</span></NavLink></li>
          <li><NavLink to="/dashboard/minha-turma" className={({ isActive }) => (isActive ? styles.active : '')}><FaUsers /> <span>Minha Turma</span></NavLink></li>
          <li><NavLink to="/dashboard/falar-com-lider" className={({ isActive }) => (isActive ? styles.active : '')}><FaComment /> <span>Falar com o Líder</span></NavLink></li>
          <li><NavLink to="/dashboard/galeria" className={({ isActive }) => (isActive ? styles.active : '')}><FaImages /> <span>Nossa Galeria</span></NavLink></li>
          <li><NavLink to="/dashboard/recados" className={({ isActive }) => (isActive ? styles.active : '')}><FaBullhorn /> <span>Recados do Líder</span></NavLink></li>
          <li><NavLink to="/dashboard/calendario" className={({ isActive }) => (isActive ? styles.active : '')}><FaCalendarAlt /> <span>Calendário</span></NavLink></li>
          <li><NavLink to="/dashboard/edicao-atual" className={({ isActive }) => (isActive ? styles.active : '')}><FaBook /> <span>Edição Atual</span></NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;