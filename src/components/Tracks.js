import React from 'react';
import './Tracks.css';
import { FaRobot, FaCloud, FaVrCardboard, FaLightbulb, FaLink } from 'react-icons/fa';

const Tracks = () => {
  const tracks = [
    {
      title: "AI/ML",
      description: "Explore the frontiers of artificial intelligence and machine learning to create innovative solutions.",
      icon: <FaRobot size={24} color="#D1C7FF" />
    },
    {
      title: "Cloud",
      description: "Build scalable and resilient applications using modern cloud technologies and services.",
      icon: <FaCloud size={24} color="#D1C7FF" />
    },
    {
      title: "AR/VR",
      description: "Create immersive experiences and push the boundaries of augmented and virtual reality.",
      icon: <FaVrCardboard size={24} color="#D1C7FF" />
    },
    {
      title: "Educhain",
      description: "Revolutionize education with blockchain by ensuring security and transparency.",
      icon: <FaLink size={24} color="#D1C7FF" />
    },
    {
      title: "Open Innovation",
      description: "Bring your own innovative idea and build something amazing that solves real problems.",
      icon: <FaLightbulb size={24} color="#D1C7FF" />
    }
  ];

  return (
    <section id="tracks" className="section tracks" style={{backgroundColor: 'black', color: 'white', padding: '5rem 1.5rem'}}>
      <div className="section-content" style={{maxWidth: '72rem', margin: '0 auto'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem'}}>
          <h2 className="section-title" style={{fontSize: '3rem', fontWeight: 'bold', color: '#D1C7FF', fontFamily: 'sans-serif'}}>Tracks</h2>
          <p className="tracks-subtitle" style={{color: '#a3a3a3', fontSize: '1.25rem'}}>
            Choose from our carefully curated tracks designed to inspire innovation and creativity in different domains of technology and problem-solving.
          </p>
        </div>
        
        <div className="tracks-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>
          {tracks.map((track, index) => (
            <div key={index} className="track-card" style={{
              padding: '1.5rem', 
              borderRadius: '0.75rem', 
              backdropFilter: 'blur(12px)', 
              backgroundColor: 'rgba(255,255,255,0.05)', 
              border: '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div style={{width: '3rem', height: '3rem', borderRadius: '0.5rem', backgroundColor: 'rgba(209, 199, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  {track.icon}
                </div>
                <h3 style={{color: '#D1C7FF', fontSize: '1.25rem', fontWeight: '600'}}>{track.title}</h3>
                <p style={{color: '#a3a3a3', fontSize: '0.875rem', lineHeight: '1.6'}}>{track.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
