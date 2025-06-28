import React from 'react';
import '../styles/CalendarPage.css';

// Mock data for calendar events
const events = [
  {
    id: 1,
    date: '2024-08-10',
    time: '19:00',
    title: 'Reunião de Planejamento',
    description: 'Discussão sobre as metas do próximo trimestre.',
  },
  {
    id: 2,
    date: '2024-08-15',
    time: '18:00',
    title: 'Evento de Confraternização',
    description: 'Celebração das conquistas da equipe.',
  },
  {
    id: 3,
    date: '2024-08-22',
    time: '09:00',
    title: 'Workshop de Liderança',
    description: 'Treinamento focado em desenvolvimento de habilidades de liderança.',
  },
    {
    id: 4,
    date: '2024-09-01',
    time: '10:00',
    title: 'Início do Novo Ciclo',
    description: 'Apresentação do novo ciclo de estudos e atividades.',
  },
];

const CalendarPage = () => {
  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Calendário de Eventos</h2>
      <div className="events-list">
        {events.map(event => {
          const eventDate = new Date(event.date);
          const day = eventDate.getDate() + 1; // Adjust for timezone issues if any
          const month = eventDate.toLocaleString('default', { month: 'short' });

          return (
            <div key={event.id} className="event-item">
              <div className="event-date">
                <span className="event-day">{day}</span>
                <span className="event-month">{month}</span>
              </div>
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-time">Horário: {event.time}</p>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarPage;