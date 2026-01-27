import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [buttonText, setButtonText] = useState('Register Now');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check date for button text
    const checkDate = () => {
      const targetDate = new Date('2026-04-12T00:00:00');
      const now = new Date();
      if (now >= targetDate) {
        setButtonText('Get Certificate');
      } else {
        setButtonText('Register Now');
      }
    };
    
    checkDate();
    // Optional: interval to check if the date passes while the page is open (e.g., midnight switch)
    const interval = setInterval(checkDate, 60000);

    // Show logo immediately on non-landing pages
    if (location.pathname !== '/') {
      setShowLogo(true);
      return () => clearInterval(interval);
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const observerCallback = (entries) => {
      const [entry] = entries;
      setShowLogo(!entry.isIntersecting);
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0,
      rootMargin: "-20px 0px 0px 0px"
    });

    const target = document.getElementById('hero-main-logo');
    if (target) {
      observer.observe(target);
    }

    document.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      document.removeEventListener('scroll', handleScroll);
      if (target) observer.unobserve(target);
    };
  }, [scrolled, location.pathname]);

  const handleNavigation = (path, sectionId) => {
    setIsMenuOpen(false);
    
    if (location.pathname === path) {
      if (sectionId) {
        scrollToSection(sectionId);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(path);
      // If there is a sectionId, we need to handle scrolling after navigation
      // This is often handled by the destination page checking the hash or a state
      if (sectionId) {
        // We can pass state or just use hash
        // Using hash is standard: navigate('/#faq')
        // But React Router navigate might not handle hash scrolling automatically without extra setup
        // Let's use setTimeout in the destination page or just simple hash navigation
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-[1000] py-2.5 px-5 transition-all duration-300 ease-out rounded-[50px] border border-white/5 backdrop-blur-sm ${scrolled ? 'bg-black/80 backdrop-blur-md border-white/10 shadow-lg shadow-black/10' : 'bg-black/20'}`}>
      <div className="w-full mx-auto flex justify-between items-center relative">
        <div 
          className={`flex items-center gap-2.5 no-underline cursor-pointer z-[1002] transition-all duration-300 ease-out ${showLogo ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'}`} 
          onClick={() => handleNavigation('/')}
        >
          <div className="font-['Array-Bold'] text-[1.8rem] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">HACKACCINO</div>
          <div className="bg-white/20 text-white px-3 py-1 rounded-[20px] text-[0.8rem] font-bold font-['Poppins'] border border-white/30">4.0</div>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-[30px] items-center">
          <button onClick={() => handleNavigation('/baristas')} className="text-white/80 no-underline font-medium text-base font-['Poppins'] transition-all duration-300 relative bg-transparent border-none cursor-pointer py-2 hover:text-white group">
            Baristas
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => handleNavigation('/sponsors')} className="text-white/80 no-underline font-medium text-base font-['Poppins'] transition-all duration-300 relative bg-transparent border-none cursor-pointer py-2 hover:text-white group">
            Sponsors
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => handleNavigation('/', 'faq')} className="text-white/80 no-underline font-medium text-base font-['Poppins'] transition-all duration-300 relative bg-transparent border-none cursor-pointer py-2 hover:text-white group">
            FAQ
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </nav>

        <div className="flex items-center gap-5 relative">
          <a 
            href="https://hackaccino.devfolio.co" 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:flex items-center font-['Poppins'] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] no-underline text-white bg-gradient-to-br from-[#FF3300] to-[#FF991A] px-5 py-2.5 rounded-[50px] font-bold"
          >
            {buttonText}
          </a>

          <div className="block md:hidden text-white text-[1.8rem] cursor-pointer z-[1002] transition-all duration-300" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full mt-2.5 bg-black/90 backdrop-blur-md border border-white/10 rounded-[20px] p-5 flex-col gap-5 items-center shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 z-[999] ${isMenuOpen ? 'opacity-100 translate-y-0 visible flex pointer-events-auto' : 'opacity-0 -translate-y-2.5 invisible hidden pointer-events-none'}`}>
        <button onClick={() => handleNavigation('/baristas')} className="text-white text-[1.2rem] w-auto text-center bg-transparent border-none font-['Poppins']">Baristas</button>
        <button onClick={() => handleNavigation('/sponsors')} className="text-white text-[1.2rem] w-auto text-center bg-transparent border-none font-['Poppins']">Sponsors</button>
        <button onClick={() => handleNavigation('/', 'faq')} className="text-white text-[1.2rem] w-auto text-center bg-transparent border-none font-['Poppins']">FAQ</button>
        <a 
            href="https://hackaccino.devfolio.co" 
            target="_blank" 
            rel="noreferrer"
            className="text-white text-[1.2rem] w-auto text-center font-['Poppins'] no-underline"
        >
            {buttonText}
        </a>
      </div>
    </header>
  );
};

export default Header;
