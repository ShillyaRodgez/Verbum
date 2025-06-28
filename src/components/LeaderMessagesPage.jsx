import React from 'react';
import '../styles/LeaderMessagesPage.css';

// Mock data for leader's messages
const messages = [
  {
    id: 1,
    title: 'Reunião Semanal',
    date: '25 de Julho, 2024',
    content: 'Lembrete: nossa reunião semanal será nesta sexta-feira às 19h. Por favor, confirmem a presença e tragam suas anotações sobre o último encontro.',
  },
  {
    id: 2,
    title: 'Evento de Confraternização',
    date: '22 de Julho, 2024',
    content: 'Estamos organizando um evento de confraternização para o próximo mês! Mais detalhes serão compartilhados em breve, mas reservem a data: 15 de agosto.',
  },
  {
    id: 3,
    title: 'Novo Material de Estudo',
    date: '20 de Julho, 2024',
    content: 'Um novo material de estudo sobre liderança foi adicionado à nossa pasta compartilhada. Recomendo a leitura para todos.',
  },
];

const LeaderMessagesPage = () => {
  return (
    <div className="leader-messages-container">
      <h2 className="messages-title">Recados do Líder</h2>
      <div className="messages-list">
        {messages.map(message => (
          <div key={message.id} className="message-card">
            <h3 className="message-card-title">{message.title}</h3>
            <p className="message-card-date">{message.date}</p>
            <p className="message-card-content">{message.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderMessagesPage;