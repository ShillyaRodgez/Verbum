import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; {new Date().getFullYear()} Verbum. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;