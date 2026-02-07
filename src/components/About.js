import React from 'react';
import { FaHandshake, FaExternalLinkAlt, FaUsers, FaChalkboardTeacher, FaBriefcase } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          
          {/* Left Column: Text */}
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F24E1E] to-[#F29D38] font-['Inter']">About</h1>
            <p className="text-[#a3a3a3] text-xl leading-[1.6]">
              Get ready for Bennett’s biggest hackathon. <strong>Hackaccino 4.0</strong>, the flagship 24-hour open-innovation event by CSI, is back on <span className="text-[#fafafa] font-medium [text-shadow:0_0_8px_rgba(255,255,255,0.5)]">April 11–12, 2026</span>. Following last year’s incredible turnout of 3,600 hackers, we’re scaling up to give you more tracks, better mentorship, and bigger rewards.
            </p>
            <p className="text-[#a3a3a3] text-xl leading-[1.6]">
              From AI/ML to Web3, this is the ultimate platform to build, break, and innovate. If you’re ready to turn a wild idea into a working prototype in just one night, <span className="text-[#fafafa] font-medium [text-shadow:0_0_8px_rgba(255,255,255,0.5)]">we’ll see you there</span>.
            </p>
          </div>

          {/* Right Column: Collaborate Card */}
          <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 h-fit transition-all duration-300">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg bg-[#F24E1E]/10 flex items-center justify-center">
                <FaHandshake size={24} className="text-[#F24E1E]" />
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F24E1E] to-[#F29D38] font-['Inter']">Collaborate With Us</h3>
              <p className="text-[#a3a3a3] text-lg">
                We're looking for sponsors, judges, mentors, and community partners to help make this event a massive success. Interested in being part of Hackaccino 4.0? Let's collaborate!
              </p>
              
              <div className="flex flex-col gap-4 mt-2">
                <a href="https://forms.hackaccino.in/sponsor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#F24E1E] no-underline text-lg hover:opacity-80 transition-opacity">
                  <div className="p-2 rounded-lg bg-[#F24E1E]/10">
                    <FaBriefcase size={20} />
                  </div>
                  <span>Sponsor Form</span>
                  <FaExternalLinkAlt size={16} className="opacity-70" />
                </a>

                <a href="https://forms.hackaccino.in/community-partner" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#F24E1E] no-underline text-lg hover:opacity-80 transition-opacity">
                  <div className="p-2 rounded-lg bg-[#F24E1E]/10">
                    <FaUsers size={20} />
                  </div>
                  <span>Community Partner Form</span>
                  <FaExternalLinkAlt size={16} className="opacity-70" />
                </a>
                
                <a href="https://forms.hackaccino.in/judge" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#F24E1E] no-underline text-lg hover:opacity-80 transition-opacity">
                  <div className="p-2 rounded-lg bg-[#F24E1E]/10">
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
