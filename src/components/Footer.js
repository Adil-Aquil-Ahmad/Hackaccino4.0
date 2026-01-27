import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import CsiLogo from '../assets/csi.png';
import GithubLogo from '../assets/GitHub-Logo.png';
import HackaccinoLogo from '../assets/hackaccino_logo.svg';

const Footer = () => {
  return (
    <footer className="text-white py-20 px-5 border-t border-white/10 font-['Space_Grotesk'] mt-auto relative z-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left">
        
        {/* Column 1: Brand & Address */}
        <div className="flex flex-col gap-5 items-center md:items-start">
          <div className="flex items-center gap-4">
            <img src={HackaccinoLogo} alt="Hackaccino" className="w-10 h-10 object-contain" /> 
            <span className="text-2xl font-bold tracking-tight font-['Array-Bold'] font-mono">Hackaccino</span>
          </div>
          <div className="text-gray-400 text-[0.95rem] leading-relaxed">
            <p>Bennett University,</p>
            <p>Plot Nos 8-11, TechZone II,</p>
            <p>Greater Noida 201310, Uttar Pradesh</p>
          </div>
        </div>

        {/* Column 2: Partner Logos */}
        <div className="flex justify-center items-center h-full order-first md:order-none mb-8 md:mb-0">
          <div className="flex items-center gap-8">
            <img src={CsiLogo} alt="CSI Bennett" className="h-[90px] w-auto object-contain" />
            <span className="text-5xl text-gray-600 font-light leading-none">×</span>
            <img src={GithubLogo} alt="GitHub" className="h-[70px] w-auto object-contain brightness-0 invert" />
          </div>
        </div>

        {/* Column 3: Contact & Links */}
        <div className="flex flex-col gap-10 md:pl-10 items-center md:items-start">
          <div>
            <h4 className="text-[1.1rem] font-semibold mb-4 text-white">Contact Us</h4>
            <a href="mailto:contact@hackaccino.tech" className="flex items-center gap-3 text-gray-400 no-underline transition-colors duration-200 bg-[#111] py-2.5 px-4 rounded-lg w-fit border border-[#222] hover:text-white hover:border-[#333] hover:bg-[#1a1a1a] mx-auto md:mx-0">
              <span className="flex items-center justify-center"><FaEnvelope /></span>
              <span>contact@hackaccino.tech</span>
            </a>
          </div>
          
          <div>
            <h4 className="text-[1.1rem] font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li><a href="https://csi-bu.tech" target="_blank" rel="noopener noreferrer" className="text-gray-400 no-underline transition-all duration-200 inline-block hover:text-white hover:translate-x-[5px]">About CSI →</a></li>
              <li><a href="https://hackaccino.tech/Hackaccino-Brochure.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 no-underline transition-all duration-200 inline-block hover:text-white hover:translate-x-[5px]">Sponsorship Brochure →</a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;