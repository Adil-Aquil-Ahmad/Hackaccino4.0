import React from 'react';

const Sponsors = () => {
  const sponsors = {
    platinum: [
      {name:"HackQuest",image:"hackquest.png",title:"Platform Partner",link:"https://hackquest.io",description:"HackQuest is India's leading hackathon platform, empowering developers to showcase their skills and connect with top companies. Join us in building the future of technology, one hack at a time."}
    ],
    gold: [
      {name:"Rabbitt AI",image:"rabbittai.png",title:"Gold Sponsor",link:"https://rabbitt.ai",description:"Rabbitt.AI taps into the full potential of enterprise data to develop reliable Generative AI Solutions you can count on."}
    ],
    silver: [
      {name:"PW",image:"pw.png",title:"Silver Sponsor",link:"https://pw.live",description:"Physics Wallah (PW) is revolutionizing education in India, making quality learning accessible to millions through innovative technology and passionate teaching."}
    ],
    bronze: [
      {name:"Sharp Economy",image:"sharp.png",title:"Bronze Sponsor",link:"https://sharpeconomy.org/",description:"Sharp Economy is an AI-driven growth economy platform that empowers communities through Learn2Earn and Spend2Grow models, built on Web 3.0 technology to incentivize continuous learning and development."}
    ],
    partners: [
      {name:"Boost",image:"boost.png",title:"Beverage Partner",link:"https://boost.com"},
      {name:"BRU",image:"bru.png",title:"Coffee Partner",link:"https://www.hul.co.in/brands/foods/bru/"},
      {name:"OpenBuild",image:"openbuild.png",title:"Dev Supporter",link:"https://openbuild.xyz"},
      {name:"Suruchi Foods",image:"suruchi.png",title:"Food Partner"},
      {name:"Beespoke Factory",image:"bespoke.png",title:"Merchandise Partner"},
      {name:"Posterly",image:"posterly.png",title:"Printing Partner"},
      {name:"Purple Palette",image:"purplepalette.png",title:"Gifting Partner"}
    ],
    inkind: [
      {name:"QuillBot",image:"quillbot.png",title:"In-Kind Sponsor",link:"https://quillbot.com"},
      {name:"Xude",image:"xude.png",title:"In-Kind Sponsor",link:"https://drinkxude.com/"},
      {name:".xyz",image:"xyz.png",title:"In-Kind Sponsor",link:"https://gen.xyz"},
      {name:"Appwrite",image:"appwrite.png",title:"In-Kind Sponsor",link:"https://appwrite.io"},
      {name:"Symbolab",image:"symbolab.png",title:"In-Kind Sponsor",link:"https://symbolab.com"}
    ]
  };

  const SponsorCard = ({ sponsor, tier }) => {
    // Define layout and styling specifics based on tier
    const configs = {
      platinum: {
        containerClass: "col-span-1 lg:col-span-3",
        contentClass: "flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10",
        imgSectionClass: "w-full lg:w-1/3 flex flex-col gap-4",
        textSectionClass: "w-full lg:w-2/3 flex flex-col justify-center",
        imgHeight: "h-16 lg:h-20",
        accentColor: "text-blue-400"
      },
      gold: {
        containerClass: "col-span-1 lg:col-span-3",
        contentClass: "flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10",
        imgSectionClass: "w-full lg:w-1/3 flex flex-col gap-4",
        textSectionClass: "w-full lg:w-2/3 flex flex-col justify-center",
        imgHeight: "h-16 lg:h-20",
        accentColor: "text-yellow-500"
      },
      silver: {
        containerClass: "col-span-1",
        contentClass: "flex flex-col gap-6",
        imgSectionClass: "w-full flex flex-col gap-4",
        textSectionClass: "w-full",
        imgHeight: "h-12",
        accentColor: "text-gray-300"
      },
      bronze: {
        containerClass: "col-span-1",
        contentClass: "flex flex-col gap-6",
        imgSectionClass: "w-full flex flex-col gap-4",
        textSectionClass: "w-full",
        imgHeight: "h-12",
        accentColor: "text-orange-700"
      },
      partner: {
        containerClass: "col-span-1",
        contentClass: "flex flex-col items-center justify-center gap-4 text-center h-full",
        imgSectionClass: "w-full flex items-center justify-center",
        textSectionClass: "w-full",
        imgHeight: "h-12",
        accentColor: "text-[#D1C7FF]"
      }
    };

    const config = configs[tier] || configs.partner;
    const isPartner = tier === 'partner' || tier === 'inkind';

    return (
      <div className={`sponsor-card ${tier} ${config.containerClass} mb-12`}>
        <div className="sponsor-card-content">
          {isPartner ? (
            // Simple layout for Partners/In-Kind
            <div className={config.contentClass}>
              <div className="w-full h-20 flex items-center justify-center overflow-hidden">
                <img 
                  src={`/images/sponsors/${sponsor.image}`} 
                  alt={sponsor.name} 
                  className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                  onError={(e) => {e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(sponsor.name)}&background=random`}}
                />
              </div>
              <div className="flex flex-col gap-1 items-center">
                <h3 className="text-white text-lg font-semibold font-['Space_Grotesk']">{sponsor.name}</h3>
                <p className="text-neutral-400 text-xs font-medium uppercase tracking-wider">{sponsor.title}</p>
              </div>
            </div>
          ) : (
            // Detailed layout for Platinum/Gold/Silver/Bronze
            <div className={config.contentClass}>
              {/* Left/Top Section: Logo & Name */}
              <div className={config.imgSectionClass}>
                <div className="flex items-center gap-4">
                  <img 
                    src={`/images/sponsors/${sponsor.image}`} 
                    alt={sponsor.name} 
                    className={`${config.imgHeight} w-auto object-contain`}
                    onError={(e) => {e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(sponsor.name)}&background=random`}}
                  />
                  {(tier === 'platinum' || tier === 'gold') && (
                    <h3 className="text-3xl font-bold text-white font-['Space_Grotesk'] uppercase tracking-wide">{sponsor.name}</h3>
                  )}
                </div>
                
                <div className="flex flex-col">
                   <span className={`text-xl font-bold ${config.accentColor}`}>{sponsor.name}</span>
                   <span className="text-neutral-400 text-sm font-medium uppercase tracking-wider">{sponsor.title}</span>
                </div>
              </div>

              {/* Right/Bottom Section: Description */}
              <div className={config.textSectionClass}>
                 {sponsor.description && (
                   <p className="text-neutral-300 text-base leading-relaxed">
                     {sponsor.description}
                   </p>
                 )}
                 
                 {sponsor.link && (
                    <div className="mt-4">
                      <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 ${config.accentColor} hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider`}>
                        Visit Website <span className="text-lg">↗</span>
                      </a>
                    </div>
                 )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full mt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans mx-auto max-w-full pt-[150px]">
      
      <div className="max-w-7xl mx-auto space-y-64 relative z-10">
        <div className="text-center space-y-6 pt-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 font-['Space_Grotesk']">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">SPONSORS</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            Thank you to our amazing sponsors for making this event possible.
          </p>
        </div>

        {/* Platinum Sponsors */}
        {sponsors.platinum.length > 0 && (
          <div className="space-y-12 pb-12 mb-32">
            <h2 className="text-3xl font-bold text-center text-blue-400 uppercase tracking-widest font-['Space_Grotesk']">Platinum Sponsors</h2>
            <div className="grid grid-cols-1 gap-16">
              {sponsors.platinum.map(s => <SponsorCard key={s.name} sponsor={s} tier="platinum" />)}
            </div>
          </div>
        )}

        {/* Gold Sponsors */}
        {sponsors.gold.length > 0 && (
          <div className="space-y-12 pb-12 mb-32">
            <h2 className="text-3xl font-bold text-center text-yellow-500 uppercase tracking-widest font-['Space_Grotesk']">Gold Sponsors</h2>
            <div className="grid grid-cols-1 gap-16">
              {sponsors.gold.map(s => <SponsorCard key={s.name} sponsor={s} tier="gold" />)}
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {sponsors.silver.length > 0 && (
          <div className="space-y-12 pb-12 mb-32">
            <h2 className="text-3xl font-bold text-center text-gray-300 uppercase tracking-widest font-['Space_Grotesk']">Silver Sponsors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {sponsors.silver.map(s => <SponsorCard key={s.name} sponsor={s} tier="silver" />)}
            </div>
          </div>
        )}

        {/* Bronze Sponsors */}
        {sponsors.bronze.length > 0 && (
          <div className="space-y-12 pb-12 mb-32">
            <h2 className="text-3xl font-bold text-center text-orange-700 uppercase tracking-widest font-['Space_Grotesk']">Bronze Sponsors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {sponsors.bronze.map(s => <SponsorCard key={s.name} sponsor={s} tier="bronze" />)}
            </div>
          </div>
        )}

        {/* Partners */}
        {(sponsors.partners.length > 0 || sponsors.inkind.length > 0) && (
          <div className="space-y-12 pb-12">
            <h2 className="text-3xl font-bold text-center text-[#D1C7FF] uppercase tracking-widest font-['Space_Grotesk']">Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[...sponsors.partners, ...sponsors.inkind].map(s => <SponsorCard key={s.name} sponsor={s} tier="partner" />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sponsors;
