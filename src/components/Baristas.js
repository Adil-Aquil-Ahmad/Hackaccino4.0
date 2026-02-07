import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';
import GlitchText from './GlitchText';
import baristasData from '../data/baristas.json';

const Baristas = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {baristasData.map((section, index) => (
        <div key={index} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-['Array-Bold'] text-white mb-4 tracking-wider">
              {section.title}
            </h2>
            <p className="text-lg text-gray-400 font-['Space_Grotesk'] max-w-2xl mx-auto">
              {section.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {section.members.map((member, memberIndex) => (
              <div 
                key={memberIndex} 
                className="group relative w-full max-w-[300px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=300`;
                    }}
                  />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-4 flex justify-center gap-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E1306C] transition-colors bg-black/50 p-2 rounded-full backdrop-blur-md">
                        <FaInstagram size={20} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0077B5] transition-colors bg-black/50 p-2 rounded-full backdrop-blur-md">
                        <FaLinkedin size={20} />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1DA1F2] transition-colors bg-black/50 p-2 rounded-full backdrop-blur-md">
                        <FaTwitter size={20} />
                      </a>
                    )}
                    {member.portfolio && (
                      <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors bg-black/50 p-2 rounded-full backdrop-blur-md">
                        <FaGlobe size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-5 text-center relative z-20 bg-[#1a1a1a]">
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] mb-1 group-hover:text-[#F29D38] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400 font-['Poppins'] uppercase tracking-wider">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Baristas;
