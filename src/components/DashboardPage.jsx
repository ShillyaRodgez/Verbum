import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;