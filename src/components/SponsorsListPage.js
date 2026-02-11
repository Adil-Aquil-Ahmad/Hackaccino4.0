import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Animation from '../animation/animation';
import { NoiseBackground } from './ui/noise-background';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';
import { RunningBorder } from './ui/running-border';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { motion } from 'framer-motion';

const mainSponsors = [
  {
    name: "HackQuest",
    type: "Platform Partner",
    description: "HackQuest is India's leading hackathon platform, empowering developers to showcase their skills and connect with top companies. Join us in building the future of technology, one hack at a time.",
    tier: "platform",
    color: "from-blue-500 to-cyan-400",
    image: "/sponsors/hackquest.png"
  },
  {
    name: "Rabbitt AI",
    type: "Gold Sponsor",
    description: "Rabbitt.AI taps into the full potential of enterprise data to develop reliable Generative AI Solutions you can count on.",
    tier: "gold",
    color: "from-yellow-400 to-yellow-600",
    image: "/sponsors/rabbittai.png"
  },
  {
    name: "PW",
    type: "Silver Sponsor",
    description: "Physics Wallah (PW) is revolutionizing education in India, making quality learning accessible to millions through innovative technology and passionate teaching.",
    tier: "silver",
    color: "from-gray-300 to-gray-500",
    image: "/sponsors/pw.png"
  },
  {
    name: "Sharp Economy",
    type: "Bronze Sponsor",
    description: "Sharp Economy is an AI-driven growth economy platform that empowers communities through Learn2Earn and Spend2Grow models, built on Web 3.0 technology to incentivize continuous learning and development.",
    tier: "bronze",
    color: "from-[#E61933] to-[#FF33CC]",
    image: "/sponsors/sharp.png"
  }
];

const partnerSponsors = [
  { name: "Boost", type: "Beverage Partner", image: "/sponsors/boost.png" },
  { name: "BRU", type: "Coffee Partner", image: "/sponsors/bru.png" },
  { name: "OpenBuild", type: "Dev Supporter", image: "/sponsors/openbuild.png" },
  { name: "Suruchi Foods", type: "Food Partner", image: "/sponsors/suruchi.png" },
  { name: "Beespoke Factory", type: "Merchandise Partner", image: "/sponsors/beespoke.png" },
  { name: "Posterly", type: "Printing Partner", image: "/sponsors/posterly.png" },
  { name: "Purple Palette", type: "Gifting Partner", image: "/sponsors/purplepalette.png" }
];

const inKindSponsors = [
  { name: "QuillBot", type: "In-Kind Sponsor", image: "/sponsors/quillbot.png" },
  { name: "Xude", type: "In-Kind Sponsor", image: "/sponsors/xude.png" },
  { name: ".xyz", type: "In-Kind Sponsor", image: "/sponsors/xyz.png" },
  { name: "Appwrite", type: "In-Kind Sponsor", image: "/sponsors/appwrite.png" },
  // { name: "Symbolab", type: "In-Kind Sponsor", image: "/sponsors/symbolab.png" }
];

// Placeholder for Community Partners (since we don't have explicit data yet)
// We'll use a mix of existing sponsors to demonstrate the effect
const communityPartners = [
  ...partnerSponsors,
  ...inKindSponsors,
  { name: "DevFolio", type: "Community Partner", image: "/sponsors/devfolio_v2.png" },
  { name: "MLH", type: "Community Partner", image: "/sponsors/mlh_v2.png" },
  { name: "Polygon", type: "Community Partner", image: "/sponsors/polygon_v2.png" },
  { name: "Solana", type: "Community Partner", image: "/sponsors/solana_v2.png" },
];

const SponsorImage = ({ src, name, className }) => {
  const [error, setError] = React.useState(false);

  if (error || !src) {
    return (
      <div className={`flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 ${className}`}>
        <span className="text-white/50 font-bold uppercase tracking-wider text-center px-2">
          {name}
        </span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={name} 
      className={`object-contain ${className}`}
      onError={() => setError(true)} 
    />
  );
};

const CommunityCard = ({ partner }) => (
  <div className="w-40 h-24 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-2 flex flex-col items-center justify-center hover:border-[#E61933]/50 hover:bg-white/5 transition-all duration-300">
    <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
      <SponsorImage src={partner.image} name={partner.name} className="w-full h-full" />
    </div>
  </div>
);

const SponsorsListPage = () => {
  return (
    <div className="sponsors-page relative overflow-x-hidden min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 w-full h-screen -z-[1] pointer-events-none">
        <Animation className="w-full h-full" />
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.1) 55%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,1) 100%)'
          }}
        />
      </div>
      <Header />
      <main className="flex-grow relative z-10 w-full max-w-[1400px] mx-auto px-5 pt-40 flex flex-col items-center">
        {/* Hero Section */}
        <div className="w-full flex flex-col items-center justify-center min-h-[50vh] mb-24">
          <div className="w-full flex flex-col items-center justify-start pt-0 rounded-md">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:text-6xl text-4xl lg:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-[#E61933] to-[#FF33CC] relative z-20 font-['Inter'] drop-shadow-[0_2px_10px_rgba(230,25,51,0.3)]"
            >
              Sponsors
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-[50rem] max-w-[90vw] h-20 relative mt-4"
            >
               {/* Gradients */}
               <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#E61933]/50 to-transparent h-[2px] w-3/4 blur-sm" />
               <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#E61933]/50 to-transparent h-px w-3/4" />
               <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#FF33CC]/30 to-transparent h-[5px] w-1/4 blur-sm" />
               <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#FF33CC]/30 to-transparent h-px w-1/4" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative backdrop-blur-md bg-black/20 border border-white/10 rounded-3xl px-8 py-16 md:px-12 md:py-24 w-full max-w-7xl mx-auto text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-[#E61933]/30 transition-colors duration-500"
            >
              {/* Decorative background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-[#E61933]/5 via-[#FF33CC]/5 to-[#E61933]/5 blur-3xl -z-10 group-hover:via-[#FF33CC]/10 transition-all duration-500" />
              
              <p className="text-white/90 font-['Poppins'] text-lg md:text-2xl font-light tracking-wide leading-relaxed mb-10">
                We are actively looking for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E61933] to-[#FF33CC] font-bold">visionary partners</span> to fuel the next wave of innovation. <br className="hidden md:block"/> Join us in brewing the future!
              </p>

              <a 
                href="https://forms.hackaccino.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <NoiseBackground 
                  containerClassName="w-fit p-[2px] rounded-full mx-auto" 
                  gradientColors={[ 
                    "rgb(230, 25, 51)", 
                    "rgb(255, 51, 204)", 
                    "rgb(230, 25, 51)", 
                  ]}
                >
                  <button 
                    className="h-full w-full cursor-pointer rounded-full bg-gradient-to-r from-[#E61933] to-[#FF33CC] px-12 py-4 text-white text-xl font-bold font-['Poppins'] shadow-[0px_2px_0px_0px_rgba(255,255,255,0.2)_inset,0px_0.5px_1px_0px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(230,25,51,0.6)] active:scale-95"
                  >
                    Become a Sponsor
                  </button> 
                </NoiseBackground>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Past Sponsors Section */}
        <div className="w-full pb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="md:text-5xl text-3xl lg:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-[#E61933] to-[#FF33CC] relative z-20 font-['Inter'] drop-shadow-[0_2px_10px_rgba(230,25,51,0.3)]">
              Past Sponsors
            </h2>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-[50rem] max-w-[90vw] h-6 relative mt-3 mx-auto"
            >
               {/* Gradients */}
               <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#E61933]/50 to-transparent h-[2px] w-3/4 blur-sm" />
               <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#E61933]/50 to-transparent h-px w-3/4" />
               <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#FF33CC]/30 to-transparent h-[5px] w-1/4 blur-sm" />
               <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#FF33CC]/30 to-transparent h-px w-1/4" />
            </motion.div>
            <p className="text-white/70 font-['Poppins'] text-lg max-w-2xl mx-auto">
              Thank you to our sponsors for making this event possible!
            </p>
          </motion.div>
          
          {/* Main Sponsors Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 w-full mx-auto">
            {mainSponsors.map((sponsor, index) => {
              const borderColor = {
                platform: '#06B6D4', // cyan-500
                gold: '#EAB308', // yellow-500
                silver: '#9CA3AF', // gray-400
                bronze: '#E61933' // neon red
              }[sponsor.tier] || '#E61933';

              return (
                <CardContainer key={index} className="inter-var w-full h-full" isStatic={true}>
                  <CardBody className="bg-black/40 backdrop-blur-xl relative group/card border-white/10 hover:border-white/20 w-full h-full rounded-xl p-8 border transition-all duration-300 flex flex-col">
                    <RunningBorder color={borderColor} reverse={index % 2 !== 0} />
                    <div className="flex justify-between items-start mb-6">
                    <CardItem
                      translateZ="0"
                      className="text-2xl font-bold text-white font-['Inter']"
                    >
                      {sponsor.name}
                    </CardItem>
                    <CardItem
                      translateZ="0"
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${sponsor.color} text-black shadow-lg`}
                    >
                      {sponsor.type}
                    </CardItem>
                  </div>
                  
                  <CardItem
                    as="p"
                    translateZ="0"
                    className="text-white/70 text-sm leading-relaxed font-['Poppins'] mb-8 flex-grow"
                  >
                    {sponsor.description}
                  </CardItem>
                  
                  <CardItem translateZ="0" className="w-full mt-auto">
                    <div className={`w-full h-48 rounded-lg bg-gradient-to-br ${sponsor.color} p-[1px] group-hover/card:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300`}>
                      <div className="w-full h-full bg-black/80 rounded-lg overflow-hidden relative">
                         <SponsorImage src={sponsor.image} name={sponsor.name} className="w-full h-full p-8" />
                      </div>
                    </div>
                  </CardItem>
                  </CardBody>
                </CardContainer>
              );
            })}
          </div>

          {/* Partner Sponsors */}
          <div className="mb-20">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center text-white mb-10 font-['Inter'] flex items-center justify-center gap-4"
            >
              <span className="h-px w-12 bg-white/20"></span>
              Partner Sponsors
              <span className="h-px w-12 bg-white/20"></span>
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full mx-auto">
              {partnerSponsors.map((sponsor, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(230, 25, 51, 0.5)" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 w-full text-center group cursor-pointer relative overflow-hidden"
                >
                  <div className="w-32 h-32 mb-6 rounded-full bg-white/5 flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-[#E61933]/30 transition-colors">
                     <SponsorImage src={sponsor.image} name={sponsor.name} className="w-full h-full p-4" />
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#FF33CC] transition-colors mb-2 font-['Inter']">{sponsor.name}</h4>
                  <p className="text-xs text-white/50 uppercase tracking-wider font-['Poppins']">{sponsor.type}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* In-Kind Sponsors */}
          <div className="mb-20">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center text-white mb-10 font-['Inter'] flex items-center justify-center gap-4"
            >
              <span className="h-px w-12 bg-white/20"></span>
              In-Kind Sponsors
              <span className="h-px w-12 bg-white/20"></span>
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full mx-auto">
              {inKindSponsors.map((sponsor, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(230, 25, 51, 0.5)" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 w-full text-center group cursor-pointer"
                >
                   <div className="w-28 h-28 mb-6 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-[#E61933]/30 transition-colors">
                     <SponsorImage src={sponsor.image} name={sponsor.name} className="w-full h-full p-4" />
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#FF33CC] transition-colors mb-2 font-['Inter']">{sponsor.name}</h4>
                  <p className="text-xs text-white/50 uppercase tracking-wider font-['Poppins']">{sponsor.type}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
           {/* Community Partners */}
          <div className="w-full mb-20">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center text-white mb-16 font-['Inter'] flex items-center justify-center gap-4"
            >
              <span className="h-px w-12 bg-white/20"></span>
              Community Partners
              <span className="h-px w-12 bg-white/20"></span>
            </motion.h3>
            
            <div className="relative flex items-center justify-center overflow-hidden w-full mx-auto py-10">
              <InfiniteMovingCards 
                items={communityPartners.map((partner, idx) => (
                  <CommunityCard key={idx} partner={partner} />
                ))} 
                direction="left" 
                speed="slow"
              />
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SponsorsListPage;
