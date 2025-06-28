import React from 'react';
import '../styles/MyClassPage.css';

const MyClassPage = () => {
  const leaders = [
    { name: 'Líder 1', photo: 'https://i.pravatar.cc/100?img=1' },
    { name: 'Líder 2', photo: 'https://i.pravatar.cc/100?img=2' },
  ];

  const members = Array.from({ length: 10 }, (_, i) => ({
    name: `Membro ${i + 1}`,
    photo: `https://i.pravatar.cc/100?img=${i + 3}`,
  }));

  return (
    <div className="my-class-container">
      <h2 className="class-title">Minha Turma</h2>
      
      <h3 className="category-title">Líderes</h3>
      <div className="members-grid">
        {leaders.map((leader, index) => (
          <div key={index} className="member-card">
            <img src={leader.photo} alt={leader.name} className="member-photo" />
            <p className="member-name">{leader.name}</p>
          </div>
        ))}
      </div>

      <h3 className="category-title">Membros</h3>
      <div className="members-grid">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <img src={member.photo} alt={member.name} className="member-photo" />
            <p className="member-name">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClassPage;