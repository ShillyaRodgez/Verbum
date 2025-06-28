import React, { useState, useEffect, useRef } from 'react';
import '../styles/TalkToLeaderPage.css';

const TalkToLeaderPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      authorName: 'Daniel',
      text: 'Oi Sheila! como posso ajudar?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSent: true,
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      authorName: 'Você',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSent: true,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setNewMessage('');

    // Simula a resposta do líder
    setTimeout(() => {
      const leaderResponse = {
        id: messages.length + 2,
        authorName: 'Daniel',
        text: 'Obrigado pela sua mensagem! Responderei em breve.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isSent: false,
      };
      setMessages((prevMessages) => [...prevMessages, leaderResponse]);
    }, 1500);
  };

  return (
    <div className="talk-to-leader-container">
      <h2 className="page-title">Falar com o Líder</h2>
      <div className="chat-window">
        <div className="messages-list">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.isSent ? 'sent' : 'received'}`}>
              <div className="message-bubble">
                <p className="message-author">{msg.authorName}</p>
                <p className="message-text">{msg.text}</p>
                <span className="message-timestamp">{msg.timestamp}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form className="message-form" onSubmit={handleSendMessage}>
          <input
            type="text"
            className="message-input"
            placeholder="Digite sua mensagem..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit" className="send-button">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default TalkToLeaderPage;