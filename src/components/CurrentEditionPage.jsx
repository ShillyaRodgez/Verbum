import React from 'react';
import '../styles/CurrentEditionPage.css';
import coverImage from '/capinha.jpg'; // Import the cover image

// Mock data for the current edition
const currentEdition = {
  title: 'Verbum - Edição de Verão 2024',
  theme: 'Renovação e Esperança',
  coverImage: coverImage,
  articles: [
    { id: 1, title: 'O Despertar da Liderança Jovem', author: 'Carlos Silva' },
    { id: 2, title: 'Fé em Tempos de Incerteza', author: 'Maria Fernandes' },
    { id: 3, title: 'A Comunidade como Força Motriz', author: 'João Pereira' },
    { id: 4, title: 'Testemunhos de Transformação', author: 'Ana Costa' },
  ],
};

const CurrentEditionPage = () => {
  return (
    <div className="current-edition-container">
      <h2 className="edition-main-title">Edição Atual</h2>
      <div className="edition-content">
        <div className="edition-cover">
          <img src={currentEdition.coverImage} alt={currentEdition.title} />
        </div>
        <div className="edition-details">
          <h3 className="edition-title">{currentEdition.title}</h3>
          <p className="edition-theme">Tema: {currentEdition.theme}</p>
          <h4 className="articles-title">Artigos desta Edição:</h4>
          <ul className="articles-list">
            {currentEdition.articles.map(article => (
              <li key={article.id} className="article-item">
                <span className="article-title">{article.title}</span>
                <span className="article-author"> - {article.author}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CurrentEditionPage;