import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h2 className="about-title">Sobre o Verbum</h2>
          <p><strong>Verbum</strong> é uma palavra em latim que significa <strong>"Palavra"</strong>.</p>
        <div className="about-content">
          <p>
            Verbum é uma plataforma dedicada à disseminação da Palavra de Deus, com o objetivo de levar a verdade do evangelho a todos os cantos do mundo. Nosso propósito é oferecer uma ferramenta que facilite o acesso aos ensinamentos bíblicos, promovendo a reflexão e o crescimento espiritual.
          </p>
          <p>
            Acreditamos que a Bíblia é a fonte de toda a sabedoria e a base para uma vida plena e com propósito. Por isso, o Verbum foi criado para ser um auxílio diário na sua jornada de fé, disponibilizando versículos e conteúdos que inspiram, consolam e fortalecem.
          </p>
          <p>
            Nossa missão é clara: conectar pessoas à Palavra de Deus. Queremos que cada usuário encontre no Verbum um espaço de paz e aprendizado, onde a mensagem de Cristo possa ser explorada e vivida intensamente. Junte-se a nós nesta jornada e permita que a Palavra transforme a sua vida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;