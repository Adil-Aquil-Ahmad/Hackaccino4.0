import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(useGSAP, SplitText);

const DigitWheel = ({ digit }) => {
  return (
    <div className="digit-wheel-container">
      <div 
        className="digit-wheel-track"
        style={{ transform: `translateY(-${digit * 10}%)` }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <div key={num} className="digit-wheel-number">
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
    const targetDate = new Date('April 12, 2026 00:00:00').getTime();

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
    <section id="hero" className="hero" ref={containerRef}>
      <div className="hero-content">
        <div className="hero-badge" ref={badgeRef}>
          <span className="badge">APRIL 12-13, 2026</span>
        </div>
        
        <div className="logo-container">
          <h1 className="logo" id="hero-main-logo" ref={logoRef}>HACKACCINO 4.0</h1>
        </div>
        
        <h2 className="tagline" ref={taglineRef}>Brewing Innovation</h2>
        <p className="subtitle" ref={subtitleRef}>The Ultimate 24-Hour Open Innovation Hackathon</p>
        
        <div className="countdown-container glass-panel" ref={countdownRef}>
          <div className="countdown-item">
            <div className="digit-group">
              {daysDigits.map((digit, index) => (
                <DigitWheel key={`day-${index}`} digit={digit} />
              ))}
            </div>
            <span className="label">Days</span>
          </div>
          <div className="separator">:</div>
          <div className="countdown-item">
            <div className="digit-group">
              {hoursDigits.map((digit, index) => (
                <DigitWheel key={`hour-${index}`} digit={digit} />
              ))}
            </div>
            <span className="label">Hours</span>
          </div>
          <div className="separator">:</div>
          <div className="countdown-item">
            <div className="digit-group">
              {minutesDigits.map((digit, index) => (
                <DigitWheel key={`min-${index}`} digit={digit} />
              ))}
            </div>
            <span className="label">Minutes</span>
          </div>
          <div className="separator">:</div>
          <div className="countdown-item">
            <div className="digit-group">
              {secondsDigits.map((digit, index) => (
                <DigitWheel key={`sec-${index}`} digit={digit} />
              ))}
            </div>
            <span className="label">Seconds</span>
          </div>
        </div>
        
        <p className="description" ref={descriptionRef}>
          Join us at Bennett University for an exhilarating experience filled with<br/>
          innovation, collaboration, and endless coffee!
        </p>

        <div className="hero-socials-bottom" ref={socialsRef}>
          <a 
            href="https://www.instagram.com/hackaccino/" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Instagram"
            className="social-icon-btn"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://twitter.com/csi_bu" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Twitter"
            className="social-icon-btn"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://chat.whatsapp.com/JEeZsXsMtI266hzd96ebjz" 
            target="_blank" 
            rel="noreferrer"
            aria-label="WhatsApp"
            className="social-icon-btn"
          >
            <FaWhatsapp />
          </a>
          <a 
            href="https://www.linkedin.com/company/computer-society-of-india-bennett-university-chapter/" 
            target="_blank" 
            rel="noreferrer"
            aria-label="LinkedIn"
            className="social-icon-btn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

