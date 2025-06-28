import React, { useState, useEffect, useRef } from 'react';
import '../styles/TalkToLeaderPage.css';

// Mock user data (in a real app, this would come from auth context)
const currentUser = { id: 1, name: 'Membro Exemplo', role: 'member' };
const leader = { id: 100, name: 'Daniel', role: 'leader' };

// Mock database of messages for a specific conversation
const initialMessages = [
  {
    id: 1,
    authorId: leader.id,
    authorName: leader.name,
    text: 'Oi Sheila! como posso ajudar?',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),,
  },
];

// Mock API call to fetch messages
const fetchMessages = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return initialMessages;
};

const TalkToLeaderPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    fetchMessages().then(data => {
      setMessages(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const messageData = {
      id: Math.random(),
      authorId: currentUser.id,
      authorName: 'Você',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prevMessages => [...prevMessages, messageData]);
    setNewMessage('');

    // Simulate leader's response after a delay
    setTimeout(() => {
      const leaderResponse = {
        id: Math.random(),
        authorId: leader.id,
        authorName: leader.name,
        text: 'Obrigado por avisar!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prevMessages => [...prevMessages, leaderResponse]);
    }, 1500);
  };

  if (isLoading) {
    return <div className="loading-container">Carregando mensagens...</div>;
  }

  return (
    <div className="talk-to-leader-container">
      <h2 className="page-title">Falar com o Líder</h2>
      <div className="chat-window">
        <div className="messages-list">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.authorId === currentUser.id ? 'sent' : 'received'}`}>
              <div className="message-bubble">
                {msg.authorId !== currentUser.id && <p className="message-author">{msg.authorName}</p>}
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