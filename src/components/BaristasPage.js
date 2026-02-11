import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Animation from '../animation/animation';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import baristasData from '../data/baristas.json';

const BaristasPage = () => {
  return (
    <div className="baristas-page relative overflow-x-hidden min-h-screen flex flex-col">
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
      <main className="w-[95%] max-w-[1300px] mx-auto relative z-10 pt-40 px-10 flex flex-col items-center justify-start bg-transparent">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#E61933] to-[#FF33CC] font-['Inter'] text-center px-4 leading-tight">
              Our Baristas are hard at work. Stay tuned.
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-start pt-0 rounded-md hidden">
          <h1 className="md:text-6xl text-4xl lg:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-[#E61933] to-[#FF33CC] relative z-20 font-['Inter'] drop-shadow-[0_2px_10px_rgba(230,25,51,0.3)]">
            Our Baristas
          </h1>
          <p className="text-center mt-4 text-white/100 font-['Poppins'] text-base md:text-xl w-full relative z-20 whitespace-nowrap tracking-widest">
            Meet the amazing team behind the scenes making it all happen.
          </p>
          
          <div className="w-[40rem] h-20 relative mt-4">
             {/* Gradients */}
             <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#E61933]/50 to-transparent h-[2px] w-3/4 blur-sm" />
             <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#E61933]/50 to-transparent h-px w-3/4" />
             <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#FF33CC]/30 to-transparent h-[5px] w-1/4 blur-sm" />
             <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#FF33CC]/30 to-transparent h-px w-1/4" />
          </div>

          <div className="w-full flex flex-col gap-16 pb-20">
            {baristasData.map((section, sectionIndex) => (
              <div key={sectionIndex} className="w-full flex flex-col items-start justify-start">
                <div className="w-fit flex flex-col mb-2 group cursor-default">
                  <h2 className="text-4xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E61933] to-[#FF33CC] font-['Inter']">
                    {section.title}
                  </h2>
                  <div className="w-full border-b-[1px] border-dashed border-[#E61933]/40 -mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-white/60 font-['Poppins'] text-base md:text-lg tracking-wide mb-8">
                  {section.description}
                </p>
                
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                  {section.members.map((barista, index) => (
                    <CardContainer key={index} className="inter-var w-full h-full" containerClassName="w-full h-full">
                      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-black/[0.5] w-full h-auto rounded-xl p-3">
                        <CardItem
                          translateZ="0"
                          className="absolute inset-0 w-full h-full bg-white/[0.02] backdrop-blur-md border border-white/[0.01] rounded-xl -z-10"
                        />
                        <CardItem
                          translateZ="50"
                          className="text-lg font-bold text-white tracking-wide relative z-10"
                        >
                          {barista.name}
                        </CardItem>
                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-white/60 text-xs max-w-sm mt-1 font-['Poppins'] tracking-wider"
                        >
                          {barista.position}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-3">
                          <img
                            src={barista.image.startsWith('http') ? barista.image : `/baristas/${barista.image}`}
                            height="1000"
                            width="1000"
                            className="h-38 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                            alt={barista.name}
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
                            }}
                          />
                        </CardItem>
                        <div className="flex justify-between items-center mt-4 gap-3">
                          {barista.linkedin ? (
                            <CardItem
                              translateZ={20}
                              as="a"
                              href={barista.linkedin.startsWith('http') ? barista.linkedin : `https://${barista.linkedin}`}
                              target="_blank"
                              className="px-3 py-1.5 rounded-lg text-[10px] font-medium text-white/80 hover:text-white border border-white/10 hover:bg-white/5 transition-colors"
                            >
                              LinkedIn
                            </CardItem>
                          ) : (
                            <div />
                          )}
                          
                          {barista.instagram && (
                            <CardItem
                              translateZ={20}
                              as="a"
                              href={barista.instagram.startsWith('http') ? barista.instagram : `https://${barista.instagram}`}
                              target="_blank"
                              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#E61933] to-[#FF33CC] text-white text-[10px] font-bold shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all"
                            >
                              Instagram
                            </CardItem>
                          )}
                        </div>
                      </CardBody>
                    </CardContainer>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BaristasPage;
