import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import Layout from './components/Layout';
import './style.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
        children: [
          { path: 'meus-dados', element: <div>Meus Dados</div> },
          { path: 'minha-turma', element: <div>Minha Turma</div> },
          { path: 'falar-com-lider', element: <div>Falar com o Líder</div> },
          { path: 'galeria', element: <div>Nossa Galeria</div> },
          { path: 'recados', element: <div>Recados do Líder</div> },
          { path: 'calendario', element: <div>Calendário</div> },
          { path: 'edicao-atual', element: <div>Edição Atual</div> },
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
