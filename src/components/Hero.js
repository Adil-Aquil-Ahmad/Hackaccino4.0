import React, { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(useGSAP, SplitText);

const DigitWheel = ({ digit }) => {
  return (
    <div className="h-[32px] min-[375px]:h-[35px] sm:h-[60px] md:h-[80px] w-[22px] min-[375px]:w-[25px] sm:w-[45px] md:w-[60px] overflow-hidden relative bg-black/30 rounded-lg border border-white/10">
      <div 
        className="flex flex-col transition-transform duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{ transform: `translateY(-${digit * 10}%)` }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, i) => (
          <div key={i} className="h-[32px] min-[375px]:h-[35px] sm:h-[60px] md:h-[80px] flex items-center justify-center text-[1rem] min-[375px]:text-[1.2rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold font-['Space_Grotesk'] text-white">
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const taglineRef = useRef(null);
  const subtitleRef = useRef(null);
  const countdownRef = useRef(null);
  const descriptionRef = useRef(null);
  const socialsRef = useRef(null);
  const badgeRef = useRef(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useGSAP(() => {
    // Initial states
    const logoSplit = new SplitText(logoRef.current, { type: "chars,lines" });
    const taglineSplit = new SplitText(taglineRef.current, { type: "lines" });
    
    // Check if splitting worked (it might fail if SplitText isn't available/licensed)
    const logoChars = logoSplit.chars.length ? logoSplit.chars : logoRef.current;
    const taglineLines = taglineSplit.lines.length ? taglineSplit.lines : taglineRef.current;

    gsap.set(logoChars, { opacity: 0, y: 50, rotateX: -90 });
    gsap.set(taglineLines, { opacity: 0, y: 20 });
    gsap.set([subtitleRef.current, badgeRef.current, countdownRef.current, descriptionRef.current, socialsRef.current], { 
      opacity: 0, 
      y: 30 
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.8 })
      .to(logoChars, { 
        opacity: 1, 
        y: 0, 
        rotateX: 0, 
        stagger: 0.05, 
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.4")
      .to(taglineLines, { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 0.8 
      }, "-=0.6")
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .to(countdownRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.4")
      .to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .to(socialsRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");

    return () => {
      if (logoSplit.revert) logoSplit.revert();
      if (taglineSplit.revert) taglineSplit.revert();
    };
  }, { scope: containerRef });

  useEffect(() => {
    const targetDate = new Date('April 11, 2026 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return String(time).padStart(2, '0').split('').map(Number);
  };

  const daysDigits = formatTime(timeLeft.days);
  const hoursDigits = formatTime(timeLeft.hours);
  const minutesDigits = formatTime(timeLeft.minutes);
  const secondsDigits = formatTime(timeLeft.seconds);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden w-full" ref={containerRef}>
      <div className="text-center z-[2] relative w-full px-4 sm:px-6 pt-20 sm:pt-14 flex flex-col items-center">
        <div className="mb-2" ref={badgeRef}>
          <span className="inline-block px-6 py-2.5 bg-white/10 border border-white/30 backdrop-blur-sm rounded-[50px] font-semibold text-[0.9rem] tracking-[1px] text-white shadow-[0_4px_15px_rgba(0,0,0,0.2)] font-['Space_Grotesk']">
            APRIL 11-12, 2026
          </span>
        </div>
        
        <div className="mb-2 w-full flex justify-center">
          <h1
            className="font-['Array-Bold'] font-black text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] m-0 tracking-[2px] w-fit text-center"
            style={{ fontSize: 'clamp(1.8rem, 8vw, 6rem)' }}
            id="hero-main-logo"
            ref={logoRef}
          >
            HACKACCINO 4.0
          </h1>
        </div>
        
        <h2 className="font-['Inter'] text-[2.5rem] max-md:text-[2rem] max-sm:text-[1.8rem] mb-[5px] text-transparent bg-clip-text bg-gradient-to-r from-[#E61933] to-[#FF33CC] font-bold drop-shadow-[0_2px_10px_rgba(230,25,51,0.3)]" ref={taglineRef}>Brewing Innovation</h2>
        <p className="font-['Poppins'] text-[1.3rem] max-md:text-base mb-[5px] text-white/90 drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)] px-[15px] max-w-[90vw] mx-auto" ref={subtitleRef}>The Ultimate 24-Hour Open Innovation Hackathon</p>
        
        <div className="flex justify-center items-start gap-1 sm:gap-4 md:gap-6 my-[15px] py-[15px] px-[8px] min-[375px]:px-[10px] sm:px-[30px] md:px-[50px] bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] max-w-[98vw] sm:max-w-[800px] w-fit mx-auto" ref={countdownRef}>
          <div className="flex flex-col items-center">
            <div className="flex gap-1 min-[375px]:gap-1.5">
              {daysDigits.map((digit, index) => (
                <DigitWheel key={`day-${index}`} digit={digit} />
              ))}
            </div>
            <span className="font-['Poppins'] text-[0.65rem] min-[375px]:text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] uppercase text-white/80 mt-2 sm:mt-[15px] tracking-[1px] min-[375px]:tracking-[2px] font-medium">Days</span>
          </div>
          <div className="text-[1.2rem] min-[375px]:text-[1.5rem] sm:text-[3rem] md:text-[4rem] text-white/50 font-['Space_Grotesk'] leading-[32px] min-[375px]:leading-[45px] sm:leading-[60px] md:leading-[80px] mx-[1px] min-[375px]:mx-[2px] sm:mx-[5px]">:</div>
          <div className="flex flex-col items-center">
            <div className="flex gap-1 min-[375px]:gap-1.5">
              {hoursDigits.map((digit, index) => (
                <DigitWheel key={`hour-${index}`} digit={digit} />
              ))}
            </div>
            <span className="font-['Poppins'] text-[0.65rem] min-[375px]:text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] uppercase text-white/80 mt-2 sm:mt-[15px] tracking-[1px] min-[375px]:tracking-[2px] font-medium">Hours</span>
          </div>
          <div className="text-[1.2rem] min-[375px]:text-[1.5rem] sm:text-[3rem] md:text-[4rem] text-white/50 font-['Space_Grotesk'] leading-[32px] min-[375px]:leading-[45px] sm:leading-[60px] md:leading-[80px] mx-[1px] min-[375px]:mx-[2px] sm:mx-[5px]">:</div>
          <div className="flex flex-col items-center">
            <div className="flex gap-1 min-[375px]:gap-1.5">
              {minutesDigits.map((digit, index) => (
                <DigitWheel key={`min-${index}`} digit={digit} />
              ))}
            </div>
            <span className="font-['Poppins'] text-[0.65rem] min-[375px]:text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] uppercase text-white/80 mt-2 sm:mt-[15px] tracking-[1px] min-[375px]:tracking-[2px] font-medium">Min</span>
          </div>
          <div className="text-[1.2rem] min-[375px]:text-[1.5rem] sm:text-[3rem] md:text-[4rem] text-white/50 font-['Space_Grotesk'] leading-[32px] min-[375px]:leading-[45px] sm:leading-[60px] md:leading-[80px] mx-[1px] min-[375px]:mx-[2px] sm:mx-[5px]">:</div>
          <div className="flex flex-col items-center">
            <div className="flex gap-1 min-[375px]:gap-1.5">
              {secondsDigits.map((digit, index) => (
                <DigitWheel key={`sec-${index}`} digit={digit} />
              ))}
            </div>
            <span className="font-['Poppins'] text-[0.65rem] min-[375px]:text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] uppercase text-white/80 mt-2 sm:mt-[15px] tracking-[1px] min-[375px]:tracking-[2px] font-medium">Sec</span>
          </div>
        </div>
        
        <p className="font-['Poppins'] text-[1.1rem] mb-[30px] text-white/80 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] px-[15px] max-w-[90vw] mx-auto" ref={descriptionRef}>
          Join us at Bennett University for an exhilarating experience filled with innovation, collaboration, and endless coffee!
        </p>

        <div className="flex justify-center items-center gap-2 min-[375px]:gap-4 z-10 py-2 mx-auto w-fit" ref={socialsRef}>
          <a 
            href="https://www.instagram.com/hackaccino/" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center w-[40px] h-[40px] min-[375px]:w-[50px] min-[375px]:h-[50px] sm:w-10 sm:h-10 rounded-full bg-white/10 text-white text-[1.2rem] min-[375px]:text-[1.5rem] sm:text-[1.2rem] transition-all duration-300 border border-white/20 hover:-translate-y-[5px] hover:scale-110 hover:bg-white hover:text-black hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
          >
            <FaInstagram />
          </a>
          <span className="text-white/30 text-xl min-[375px]:text-2xl font-thin translate-y-[3px]">|</span>
          <a 
            href="https://x.com/csi_bu" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Twitter"
            className="flex items-center justify-center w-[40px] h-[40px] min-[375px]:w-[50px] min-[375px]:h-[50px] sm:w-10 sm:h-10 rounded-full bg-white/10 text-white text-[1.2rem] min-[375px]:text-[1.5rem] sm:text-[1.2rem] transition-all duration-300 border border-white/20 hover:-translate-y-[5px] hover:scale-110 hover:bg-white hover:text-black hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
          >
            <FaTwitter />
          </a>
          <span className="text-white/30 text-xl min-[375px]:text-2xl font-thin translate-y-[3px]">|</span>
          <a 
            href="https://chat.whatsapp.com/JEeZsXsMtI266hzd96ebjz" 
            target="_blank" 
            rel="noreferrer"
            aria-label="WhatsApp"
            className="flex items-center justify-center w-[40px] h-[40px] min-[375px]:w-[50px] min-[375px]:h-[50px] sm:w-10 sm:h-10 rounded-full bg-white/10 text-white text-[1.2rem] min-[375px]:text-[1.5rem] sm:text-[1.2rem] transition-all duration-300 border border-white/20 hover:-translate-y-[5px] hover:scale-110 hover:bg-white hover:text-black hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
          >
            <FaWhatsapp />
          </a>
          <span className="text-white/30 text-xl min-[375px]:text-2xl font-thin translate-y-[3px]">|</span>
          <a 
            href="https://www.linkedin.com/company/csibennett/" 
            target="_blank" 
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-[40px] h-[40px] min-[375px]:w-[50px] min-[375px]:h-[50px] sm:w-10 sm:h-10 rounded-full bg-white/10 text-white text-[1.2rem] min-[375px]:text-[1.5rem] sm:text-[1.2rem] transition-all duration-300 border border-white/20 hover:-translate-y-[5px] hover:scale-110 hover:bg-white hover:text-black hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

