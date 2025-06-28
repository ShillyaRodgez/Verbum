import React from 'react';
import '../styles/MyClassPage.css';

const MyClassPage = () => {
  const leaders = [
    { name: 'Daniel Mertz', photo: 'https://i.pravatar.cc/100?img=50' },
    { name: 'Valéria Evangelista', photo: 'https://i.pravatar.cc/100?img=45' },
  ];

  const members = [
    { name: 'Amanda', photo: 'https://i.pravatar.cc/100?img=31' },
    { name: 'Júlia', photo: 'https://i.pravatar.cc/100?img=32' },
    { name: 'Gustavo Melotto', photo: 'https://i.pravatar.cc/100?img=33' },
    { name: 'Gustavo', photo: 'https://i.pravatar.cc/100?img=70' },
    { name: 'Ieda', photo: 'https://i.pravatar.cc/100?img=35' },
    { name: 'Jéssica', photo: 'https://i.pravatar.cc/100?img=36' },
    { name: 'Rafaela', photo: 'https://i.pravatar.cc/100?img=37' },
    { name: 'Michely', photo: 'https://i.pravatar.cc/100?img=38' },
    { name: 'André', photo: 'https://i.pravatar.cc/100?img=60' },
    { name: 'Alessandro', photo: 'https://i.pravatar.cc/100?img=59' },
    { name: 'Sheila', photo: 'https://i.pravatar.cc/100?img=41' },
    { name: 'Edilaine', photo: 'https://i.pravatar.cc/100?img=42' },
  ];

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