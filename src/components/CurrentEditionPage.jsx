import React from 'react';
import '../styles/CurrentEditionPage.css';
import coverImage from '/capinha.jpg'; // Import the cover image

// Mock data for the current edition
const currentEdition = {
  title: 'Verbum - Edição 2025',
  theme: 'Famílias imperfeitas, Graça perfeita',
  coverImage: coverImage,
  articles: [
    { id: 1, title: 'Inventário Pessoal', author: '03 de junho de 2025' },
    { id: 2, title: 'GPS da Fé: Quando Deus é o Guia', author: '10 de junho de 2025' },
    { id: 3, title: 'Jesus e a re-interpretação da Lei', author: '17 de junho de 2025' },
    { id: 4, title: 'Aguardando o título...', author: '...' },
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