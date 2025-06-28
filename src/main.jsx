import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import MyDataPage from './components/MyDataPage';
import MyClassPage from './components/MyClassPage';
import TalkToLeaderPage from './components/TalkToLeaderPage';
import GalleryPage from './components/GalleryPage';
import LeaderMessagesPage from './components/LeaderMessagesPage';
import CalendarPage from './components/CalendarPage';
import CurrentEditionPage from './components/CurrentEditionPage';
import Layout from './components/Layout';
import './style.css';

const router = createHashRouter([
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
          { index: true, element: <HomePage /> },
          { path: 'inicio', element: <HomePage /> },
          { path: 'meus-dados', element: <MyDataPage /> },
          { path: 'minha-turma', element: <MyClassPage /> },
          { path: 'falar-com-lider', element: <TalkToLeaderPage /> },
          { path: 'galeria', element: <GalleryPage /> },
          { path: 'recados', element: <LeaderMessagesPage /> },
          { path: 'calendario', element: <CalendarPage /> },
          { path: 'edicao-atual', element: <CurrentEditionPage /> },
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
