import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import CsiLogo from '../assets/csi.png';
import GenesisLogo from '../assets/Genesis_Logo_Vertical.webp';
import HackaccinoLogo from './HackaccinoLogo';

const Footer = () => {
  return (
    <footer className="text-white py-12 px-5 border-t border-white/10 font-['Space_Grotesk'] mt-auto relative z-10 bg-black/40 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
        
        {/* Column 1: Brand & Address */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex items-center gap-4">
            <HackaccinoLogo className="w-8 h-8" />  
            <span className="text-xl font-bold tracking-tight font-['Array-Bold'] font-mono">Hackaccino</span>
          </div>
          <div className="text-gray-400 text-sm leading-relaxed">
            <p>Bennett University,</p>
            <p>Plot Nos 8-11, TechZone II,</p>
            <p>Greater Noida 201310, Uttar Pradesh</p>
          </div>
        </div>

        {/* Column 2: Partner Logos */}
        <div className="flex justify-center items-center h-full order-first md:order-none mb-6 md:mb-0">
          <div className="flex items-center gap-8 justify-center">
            <div className="w-[120px] flex justify-center">
              <img src={CsiLogo} alt="CSI Bennett" className="h-[80px] w-auto object-contain" />
            </div>
            <span className="text-4xl text-gray-600 font-light leading-none pt-2">×</span>
            <div className="w-[120px] flex justify-center">
              <img src={GenesisLogo} alt="Genesis" className="h-[80px] w-auto object-contain brightness-0 invert" />
            </div>
          </div>
        </div>

        {/* Column 3: Contact & Links */}
        <div className="flex flex-col gap-6 md:pl-10 items-center md:items-start">
          <div>
            <h4 className="text-base font-semibold mb-3 text-white">Contact Us</h4>
            <a href="mailto:contact@hackaccino.in" className="flex items-center gap-2 text-sm text-gray-400 no-underline transition-colors duration-200 bg-[#111] py-2 px-3 rounded-lg w-fit border border-[#222] hover:text-white hover:border-[#333] hover:bg-[#1a1a1a] mx-auto md:mx-0">
              <span className="flex items-center justify-center"><FaEnvelope /></span>
              <span>contact@hackaccino.in</span>
            </a>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-3 text-white">Quick Links</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2 text-sm">
              <li><Link to="/about-csi" className="text-gray-400 no-underline transition-all duration-200 inline-block hover:text-white hover:translate-x-[5px]">About CSI →</Link></li>
              <li><a href="https://hackaccino.in/brochure.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 no-underline transition-all duration-200 inline-block hover:text-white hover:translate-x-[5px]">Sponsorship Brochure →</a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;