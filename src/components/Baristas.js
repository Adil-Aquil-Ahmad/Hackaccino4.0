import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaGlobe } from 'react-icons/fa';
import AdilImage from '../assets/Adil.jpeg';

const BaristaCard = ({ name, role, image }) => {
  return (
    <div className="barista-card group">
      <div className="barista-card-content">
        <div className="w-[140px] h-[140px] rounded-full p-1 bg-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.3)] mb-6 relative z-10">
          <img src={image} alt={name} className="w-full h-full rounded-full object-cover border border-white/20" />
        </div>
        <h3 className="text-[1.4rem] font-bold mb-2 text-white tracking-[0.5px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{name}</h3>
        <p className="text-white/70 text-[0.95rem] font-medium uppercase tracking-widest mb-0">{role}</p>
        
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[8px] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-[10px] group-hover:translate-y-0 z-20">
          <div className="flex gap-6">
            <a href="#" className="text-white text-[1.8rem] transition-all duration-300 opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 hover:text-[#D1C7FF] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(209,199,255,0.6)] delay-100" aria-label="Portfolio"><FaGlobe /></a>
            <a href="#" className="text-white text-[1.8rem] transition-all duration-300 opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 hover:text-[#D1C7FF] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(209,199,255,0.6)] delay-200" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" className="text-white text-[1.8rem] transition-all duration-300 opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 hover:text-[#D1C7FF] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(209,199,255,0.6)] delay-300" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="text-white text-[1.8rem] transition-all duration-300 opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 hover:text-[#D1C7FF] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(209,199,255,0.6)] delay-400" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, description, members }) => (
  <div className="mb-24">
    <h2 className="text-[2rem] mb-2 text-white flex justify-center items-center gap-4 text-center">{title}</h2>
    {description && <p className="text-gray-400 text-base mb-10 max-w-[800px] mx-auto text-center">{description}</p>}
    <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-10 md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
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
    <section 
      className="bg-transparent text-white py-24 px-4 min-h-screen font-['Space_Grotesk'] relative z-10"
    >
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-center text-[3.5rem] mb-4 font-bold uppercase tracking-tighter bg-gradient-to-r from-[#D1C7FF] to-[#9B8BFF] bg-clip-text text-transparent md:text-[2.5rem]">Our Baristas</h1>
        <h3 className="text-center text-gray-400 mb-4 max-w-[600px] mx-auto text-lg leading-relaxed">Meet the amazing team behind the scenes making it all happen.</h3>
        
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