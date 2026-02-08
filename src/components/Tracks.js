import React from 'react';
import { FaRobot, FaCloud, FaVrCardboard, FaLightbulb, FaLink, FaMicrochip } from 'react-icons/fa';

const Tracks = () => {
  const tracks = [
    {
      title: "AI/ML",
      description: "Design intelligent systems that learn from data, automate decisions, and solve real-world problems using artificial intelligence and machine learning.",
      icon: <FaRobot size={24} color="#F29D38" className="animate-pulse-slow" />
    },
    {
      title: "Cloud",
      description: "Develop scalable, secure, and high-performance applications using cloud platforms and modern deployment technologies.",
      icon: <FaCloud size={24} color="#F29D38" className="animate-pulse-slow" />
    },
    {
      title: "AR/VR",
      description: "Build interactive augmented and virtual reality solutions that transform how users learn, play, and experience digital content.",
      icon: <FaVrCardboard size={24} color="#F29D38" className="animate-pulse-slow" />
    },
    {
      title: "IoT",
      description: "Connect the physical world with the digital realm by building smart solutions using Internet of Things devices and sensors.",
      icon: <FaMicrochip size={24} color="#F29D38" className="animate-pulse-slow" />
    },
    {
      title: "Web3",
      description: "Build decentralized applications and explore the future of the internet with blockchain technology and smart contracts.",
      icon: <FaLink size={24} color="#F29D38" className="animate-pulse-slow" />
    },
    {
      title: "Open Innovation",
      description: "Propose and build innovative solutions to real-life challenges using any technology of your choice.",
      icon: <FaLightbulb size={24} color="#F29D38" className="animate-pulse-slow" />
    }
  ];

  return (
    <section id="tracks" className="text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 mb-8">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F24E1E] to-[#F29D38] font-['Inter']">Tracks</h2>
          <p className="text-[#a3a3a3] text-xl">
            Choose from our carefully curated tracks designed to inspire innovation and creativity in different domains of technology and problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {tracks.map((track, index) => (
            <div key={index} className="group relative p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 cursor-pointer transition-all duration-300 hover:-translate-y-2.5 hover:scale-[1.02] hover:bg-white/10 hover:border-white/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] overflow-hidden">
              <div className="flex flex-col gap-4 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#F24E1E]/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]">
                  {track.icon}
                </div>
                <h3 className="text-[#F24E1E] text-xl font-semibold">{track.title}</h3>
                <p className="text-[#a3a3a3] text-sm leading-[1.6]">{track.description}</p>
              </div>
              {/* Gradient overlay for hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;