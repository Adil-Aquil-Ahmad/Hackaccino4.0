import React from 'react';
import './Baristas.css';
import { FaLinkedin, FaInstagram, FaGithub, FaGlobe } from 'react-icons/fa';
import AdilImage from '../assets/Adil.jpeg';

const BaristaCard = ({ name, role, image }) => {
  return (
    <div className="barista-card">
      <div className="barista-card-content">
        <div className="image-container">
          <img src={image} alt={name} className="barista-image" />
        </div>
        <h3 className="barista-name">{name}</h3>
        <p className="barista-role">{role}</p>
        
        <div className="social-overlay">
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Portfolio"><FaGlobe /></a>
            <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="social-icon" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, description, members }) => (
  <div className="barista-section">
    <h2 className="section-title">{title}</h2>
    {description && <p className="section-description">{description}</p>}
    <div className="baristas-grid">
      {members.map((member, index) => (
        <BaristaCard key={index} {...member} />
      ))}
    </div>
  </div>
);

const Baristas = () => {
  const dummyMember = {
    name: "Adil Aquil Ahmad",
    image: AdilImage,
    role: "Member" 
  };

  const leadOrganisers = Array(6).fill({ ...dummyMember, role: "Lead Organiser" });
  const departmentHeads = Array(10).fill({ ...dummyMember, role: "Department Head" });
  const subHeads = Array(10).fill({ ...dummyMember, role: "Sub Head" });
  const teamMembers = Array(30).fill({ ...dummyMember, role: "Team Member" });
  const organizingTeam = Array(20).fill({ ...dummyMember, role: "Organizing Team" });

  return (
    <section className="baristas-page">
      <div className="baristas-container">
        <h1 className="main-title">Our Baristas</h1>
        <h3 className="subtitle">Meet the amazing team behind the scenes making it all happen.</h3>
        
        <Section 
          title="Lead Organisers" 
          description="The captains of our ship, leading the entire event."
          members={leadOrganisers} 
        />
        <Section 
          title="Department Heads" 
          description="Leaders who oversee critical aspects of the event."
          members={departmentHeads} 
        />
        <Section 
          title="Sub Heads" 
          description="Supporting our department heads with specialized expertise."
          members={subHeads} 
        />
        <Section 
          title="Team Members" 
          description="Our valued contributors working behind the scenes."
          members={teamMembers} 
        />
        <Section 
          title="Organizing Team" 
          description="The dedicated team making the magic happen."
          members={organizingTeam} 
        />
      </div>
    </section>
  );
};

export default Baristas;
