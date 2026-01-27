import React from 'react';
import { FaHandshake, FaExternalLinkAlt, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about" style={{backgroundColor: 'black', color: 'white', padding: '5rem 1.5rem'}}>
      <div className="about-content" style={{maxWidth: '72rem', margin: '0 auto'}}>
        <div className="about-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          
          {/* Left Column: Text */}
          <div className="about-text" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <h1 style={{color: '#D1C7FF', fontSize: '3rem', fontWeight: 'bold', fontFamily: 'sans-serif'}}>About</h1>
            <p style={{color: '#a3a3a3', fontSize: '1.25rem', lineHeight: '1.6'}}>
              We're organizing <strong>Hackaccino 4.0</strong>, the 24-hour open innovation flagship hackathon of Bennett University, on <span style={{color: '#fafafa', fontWeight: '500', textShadow: '0 0 8px rgba(255,255,255,0.5)'}}>April 5-6, 2026</span>. Join us for an exciting event featuring diverse tracks including AI/ML, Web3, IoT, and AR/VR.
            </p>
            <p style={{color: '#a3a3a3', fontSize: '1.25rem', lineHeight: '1.6'}}>
              Building on the success of Hackaccino 3.0, which drew over 1,800 participants, and with partners like HackQuest, OpenBuild, Rabbitt AI, and PW (India's largest edtech company) already on board, <span style={{color: '#fafafa', fontWeight: '500', textShadow: '0 0 8px rgba(255,255,255,0.5)'}}>this year promises to be even bigger</span>.
            </p>
          </div>

          {/* Right Column: Collaborate Card */}
          <div className="collaborate-card" style={{
            padding: '1.5rem', 
            borderRadius: '0.75rem', 
            backdropFilter: 'blur(12px)', 
            backgroundColor: 'rgba(255,255,255,0.05)', 
            border: '1px solid rgba(255,255,255,0.1)',
            height: 'fit-content',
            transition: 'all 0.3s'
          }}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <div style={{width: '3rem', height: '3rem', borderRadius: '0.5rem', backgroundColor: 'rgba(209, 199, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <FaHandshake size={24} style={{color: '#D1C7FF'}} />
              </div>
              <h3 style={{color: '#D1C7FF', fontSize: '1.5rem', fontWeight: '600'}}>Collaborate With Us</h3>
              <p style={{color: '#a3a3a3', fontSize: '1.125rem'}}>
                We're looking for sponsors, judges, mentors, and community partners to help make this event a massive success. Interested in being part of Hackaccino 4.0? Let's collaborate!
              </p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem'}}>
                <a href="https://form.hackaccino.tech/form/eu7zdbPA" target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#D1C7FF', textDecoration: 'none', fontSize: '1.125rem'}}>
                  <div style={{padding: '0.5rem', borderRadius: '0.5rem', backgroundColor: 'rgba(209, 199, 255, 0.1)'}}>
                    <FaUsers size={20} />
                  </div>
                  <span>Community Partner Form</span>
                  <FaExternalLinkAlt size={16} style={{opacity: 0.7}} />
                </a>
                
                <a href="https://form.hackaccino.tech/form/IlOpHrTV" target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#D1C7FF', textDecoration: 'none', fontSize: '1.125rem'}}>
                  <div style={{padding: '0.5rem', borderRadius: '0.5rem', backgroundColor: 'rgba(209, 199, 255, 0.1)'}}>
                    <FaChalkboardTeacher size={20} />
                  </div>
                  <span>Judges & Mentors Form</span>
                  <FaExternalLinkAlt size={16} style={{opacity: 0.7}} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
