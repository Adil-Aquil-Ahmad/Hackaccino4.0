import React from 'react';
import { FaHandshake, FaExternalLinkAlt, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          
          {/* Left Column: Text */}
          <div className="flex flex-col gap-6">
            <h1 className="text-[#D1C7FF] text-5xl font-bold font-sans">About</h1>
            <p className="text-[#a3a3a3] text-xl leading-[1.6]">
              We're organizing <strong>Hackaccino 4.0</strong>, the 24-hour open innovation flagship hackathon of Bennett University, on <span className="text-[#fafafa] font-medium [text-shadow:0_0_8px_rgba(255,255,255,0.5)]">April 5-6, 2026</span>. Join us for an exciting event featuring diverse tracks including AI/ML, Web3, IoT, and AR/VR.
            </p>
            <p className="text-[#a3a3a3] text-xl leading-[1.6]">
              Building on the success of Hackaccino 3.0, which drew over 1,800 participants, and with partners like HackQuest, OpenBuild, Rabbitt AI, and PW (India's largest edtech company) already on board, <span className="text-[#fafafa] font-medium [text-shadow:0_0_8px_rgba(255,255,255,0.5)]">this year promises to be even bigger</span>.
            </p>
          </div>

          {/* Right Column: Collaborate Card */}
          <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 h-fit transition-all duration-300">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg bg-[#D1C7FF]/10 flex items-center justify-center">
                <FaHandshake size={24} className="text-[#D1C7FF]" />
              </div>
              <h3 className="text-[#D1C7FF] text-2xl font-semibold">Collaborate With Us</h3>
              <p className="text-[#a3a3a3] text-lg">
                We're looking for sponsors, judges, mentors, and community partners to help make this event a massive success. Interested in being part of Hackaccino 4.0? Let's collaborate!
              </p>
              
              <div className="flex flex-col gap-4 mt-2">
                <a href="https://form.hackaccino.tech/form/eu7zdbPA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#D1C7FF] no-underline text-lg hover:opacity-80 transition-opacity">
                  <div className="p-2 rounded-lg bg-[#D1C7FF]/10">
                    <FaUsers size={20} />
                  </div>
                  <span>Community Partner Form</span>
                  <FaExternalLinkAlt size={16} className="opacity-70" />
                </a>
                
                <a href="https://form.hackaccino.tech/form/IlOpHrTV" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#D1C7FF] no-underline text-lg hover:opacity-80 transition-opacity">
                  <div className="p-2 rounded-lg bg-[#D1C7FF]/10">
                    <FaChalkboardTeacher size={20} />
                  </div>
                  <span>Judges & Mentors Form</span>
                  <FaExternalLinkAlt size={16} className="opacity-70" />
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
