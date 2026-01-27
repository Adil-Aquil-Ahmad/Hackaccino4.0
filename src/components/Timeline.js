import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const schedule = [
    {
      day: "5th April — Day 1",
      events: [
        { time: "9:00 AM - 10:30 AM", description: "Registrations" },
        { time: "10:30 AM - 12:00 PM", description: "Orientation" },
        { time: "12:00 Onwards", description: "Hackathon Begins", highlight: true },
        { time: "3:00 PM - 5:00 PM", description: "Idea Pitching Round" },
        { time: "5:00 PM Onwards", description: "Snacks (Provided by us)" }
      ]
    },
    {
      day: "6th April — Day 2",
      events: [
        { time: "8:00 AM Onwards", description: "Breakfast (Provided by us)" },
        { time: "12:00 PM (Sharp)", description: "Hackathon Ends", highlight: true },
        { time: "12:00 PM - 2:30 PM", description: "Evaluation Round" },
        { time: "2:30 PM Onwards", description: "Closing Ceremony & Prize Distribution" }
      ]
    }
  ];

  return (
    <section id="timeline" className="section timeline" style={{backgroundColor: 'black', color: 'white', padding: '5rem 1.5rem'}}>
      <div className="section-content" style={{maxWidth: '72rem', margin: '0 auto'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem'}}>
          <h2 className="section-title" style={{fontSize: '3rem', fontWeight: 'bold', color: '#D1C7FF', fontFamily: 'sans-serif'}}>Timeline</h2>
          <p className="timeline-subtitle" style={{color: '#a3a3a3', fontSize: '1.25rem'}}>
            Follow the schedule to make the most out of your 24 hours.
          </p>
        </div>

        <div className="timeline-container" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          {schedule.map((day, index) => (
            <div key={index} className="timeline-day" style={{
              backgroundColor: 'rgba(255,255,255,0.05)', 
              backdropFilter: 'blur(12px)',
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '1.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
               {/* Decorative background elements matching the reference site style */}
               <div style={{position: 'absolute', top: '20%', left: '-20px', width: '100px', height: '200px', background: 'linear-gradient(to right, #D1C7FF, transparent)', opacity: 0.1, transform: 'rotate(15deg)', filter: 'blur(20px)', pointerEvents: 'none'}}></div>

              <div className="day-header" style={{marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem'}}>
                <h3 style={{color: '#D1C7FF', fontSize: '1.5rem', fontWeight: '600'}}>{day.day}</h3>
              </div>
              <div className="events-list" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                {day.events.map((event, idx) => (
                  <div key={idx} className="event-item" style={{display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>
                    <span className="event-time" style={{color: event.highlight ? '#D1C7FF' : '#a3a3a3', fontSize: '0.875rem', fontWeight: event.highlight ? 'bold' : 'normal'}}>{event.time}</span>
                    <span className="event-description" style={{color: event.highlight ? 'white' : '#e5e5e5', fontSize: '1.125rem', fontWeight: event.highlight ? '600' : 'normal'}}>{event.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
