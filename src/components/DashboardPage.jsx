import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import DashboardHeader from './DashboardHeader';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`dashboard-layout ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div className="main-panel">
        <DashboardHeader />
        <main className="dashboard-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;