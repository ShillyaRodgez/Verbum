import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  const [dailyVerse, setDailyVerse] = useState({ text: '', reference: '' });

  // Array de versículos para rotação diária
  const verses = [
    {
      text: "Traze estas coisas à memória, ordenando-lhes diante do Senhor que não tenham contendas de palavras, que para nada aproveitam e são para perversão dos ouvintes.",
      reference: "2 Timóteo 2:14"
    },
    {
      text: "Toda Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção, para a educação na justiça.",
      reference: "2 Timóteo 3:16"
    },
    {
      text: "Lâmpada para os meus pés é a tua palavra e, luz para os meus caminhos.",
      reference: "Salmos 119:105"
    },
    {
      text: "Porque a palavra de Deus é viva, e eficaz, e mais cortante do que qualquer espada de dois gumes.",
      reference: "Hebreus 4:12"
    },
    {
      text: "Santifica-os na verdade; a tua palavra é a verdade.",
      reference: "João 17:17"
    },
    {
      text: "Para sempre, ó Senhor, a tua palavra permanece no céu.",
      reference: "Salmos 119:89"
    },
    {
      text: "A relva murcha, e cai a sua flor, mas a palavra de nosso Deus permanece eternamente.",
      reference: "Isaías 40:8"
    }
  ];

  useEffect(() => {
    // Calcula o índice baseado na data atual
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const verseIndex = dayOfYear % verses.length;
    
    setDailyVerse(verses[verseIndex]);
  }, []);
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">
          <img src="/Imagem3.png" alt="Verbum Logo" className="logo-image" />
        </div>
        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="contact-btn">Contato</button>
        </div>
      </header>

      <main className="main-content">
        <div className="content-container">
          <div className="left-content">
            <h1 className="welcome">Bem-vindo!</h1>
            
            <div className="verse-section">
              <h2>Versículo do dia:</h2>
              <blockquote className="verse">
                "{dailyVerse.text}"
              </blockquote>
              <p className="verse-reference">{dailyVerse.reference}</p>
            </div>
          </div>
          
          <div className="about-section">
            <h2>Sobre:</h2>
            <div className="about-content">
              <h3>Verbum</h3>
              <p><strong>•Significado:</strong> Latim para "palavra".</p>
              <p><strong>•Impacto:</strong> Representa a Palavra de Deus e sua centralidade no estudo e discipulado.</p>
              <p><strong>•Objetivo:</strong> É uma plataforma de contato e acesso aos conteúdos de todo o discipulado no qual você faz parte.</p>
              <p>Fique por dentro de todas as atualizações do seu grupo pelo seu facilitador e participe de todas as enquetes, reflexões e perguntas feitas com o tema do discipulado da semana, além de postar seus melhores momentos para todos que fazem parte.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
      </footer>
    </div>
  );
};

export default HomePage;