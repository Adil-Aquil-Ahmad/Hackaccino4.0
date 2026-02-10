import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Animation from '../animation/animation';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const AboutCSIPage = () => {
  return (
    <div className="about-csi-page relative overflow-x-hidden min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
        <Animation className="w-full h-full" />
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.1) 55%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,1) 100%)'
          }}
        />
      </div>
      <Header />
      <main className="w-[95%] max-w-[1000px] mx-auto relative z-10 pt-40 px-6 md:px-10 flex flex-col items-center justify-start bg-transparent pb-20">
        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F24E1E] to-[#F29D38] font-['Inter'] text-center mb-12 drop-shadow-[0_2px_10px_rgba(242,78,30,0.3)]">
          About CSI Bennett
        </h1>
        
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-full">
          <div className="text-white/80 font-['Poppins'] text-base md:text-lg leading-relaxed space-y-6 text-justify">
            <p>
              CSI (Computer Society of India) Bennett University Chapter is one of the most active and high impact technical communities on campus, known for turning ideas into action. Driven by a passionate and consistent team, CSI Bennett focuses on creating opportunities where students don’t just learn technology but experience it.
            </p>
            <p>
              Over the year, the chapter has successfully conducted large-scale events and initiatives including flagship hackathons like Hackachino, the Government Hackathon KAVACH, and Smart Ecotech (a government-funded event sponsored by ANRF) hosted at a national level. Alongside these, CSI regularly organizes monthly bootcamps, workshops, tech talks, and hands-on sessions covering AI/ML, development, GitHub, emerging tech, and more, ensuring continuous engagement and skill growth. Events like TechVivadh and multiple community-driven initiatives from previous years further highlight the chapter’s consistency and scale.
            </p>
            <p>
              With a strong outreach network 5,000+ email reach, 5M+ reach on Instagram reels, 1,800+ Instagram followers, 2,000+ LinkedIn followers, and a highly active 2,500+ member WhatsApp community CSI Bennett has built a powerful tech ecosystem that connects, informs, and inspires students at scale.
            </p>
            <p className="font-semibold text-white">
              At its core, CSI Bennett is about momentum, teamwork, and building a culture where technology meets purpose.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 pt-8 border-t border-white/10">
            <a 
              href="https://linktr.ee/csi_bu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#0077b5]/20 hover:bg-[#0077b5]/40 border border-[#0077b5]/50 transition-all duration-300 group"
            >
              <FaLinkedin className="text-2xl text-white group-hover:scale-110 transition-transform" />
              <span className="text-white font-medium">LinkedIn</span>
            </a>
            
            <a 
              href="https://www.instagram.com/csi.bu?igsh=MWxlM3V0M2VzanM5Mw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#E1306C]/20 hover:bg-[#E1306C]/40 border border-[#E1306C]/50 transition-all duration-300 group"
            >
              <FaInstagram className="text-2xl text-white group-hover:scale-110 transition-transform" />
              <span className="text-white font-medium">Instagram</span>
            </a>
            
            <a 
              href="https://x.com/csi_bu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-black/40 hover:bg-black/60 border border-white/20 transition-all duration-300 group"
            >
              <FaTwitter className="text-2xl text-white group-hover:scale-110 transition-transform" />
              <span className="text-white font-medium">Twitter</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutCSIPage;
