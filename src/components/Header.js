import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
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
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className={`logo-section ${showLogo ? 'visible' : ''}`} onClick={() => handleNavigation('/')}>
          <div className="header-logo">HACKACCINO</div>
          <div className="version">4.0</div>
        </div>
        
        {/* Desktop Nav */}
        <nav className="nav-menu desktop-nav">
          <button onClick={() => handleNavigation('/baristas')} className="nav-link">Baristas</button>
          <button onClick={() => handleNavigation('/sponsors')} className="nav-link">Sponsors</button>
          <button onClick={() => handleNavigation('/', 'faq')} className="nav-link">FAQ</button>
        </nav>

        <div className="header-right-actions">
          <a 
            href="https://hackaccino.devfolio.co" 
            target="_blank" 
            rel="noreferrer"
            className="certificate-btn desktop-only"
            style={{textDecoration: 'none', color: 'white', background: 'linear-gradient(135deg, #FF3300, #FF991A)', padding: '10px 20px', borderRadius: '50px', fontWeight: 'bold'}}
          >
            {buttonText}
          </a>

          <div className="mobile-menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <button onClick={() => handleNavigation('/baristas')} className="nav-link mobile-link">Baristas</button>
        <button onClick={() => handleNavigation('/sponsors')} className="nav-link mobile-link">Sponsors</button>
        <button onClick={() => handleNavigation('/', 'faq')} className="nav-link mobile-link">FAQ</button>
        <a 
            href="https://hackaccino.devfolio.co" 
            target="_blank" 
            rel="noreferrer"
            className="nav-link mobile-link"
        >
            {buttonText}
        </a>
      </div>
    </header>
  );
};

export default Header;
