import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from './ui/resizable-navbar';
import { NoiseBackground } from './ui/noise-background';

const Header = ({ className }) => {
  const [buttonText, setButtonText] = useState('Register Now');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    const interval = setInterval(checkDate, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleNavigation = (path, sectionId) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname === path) {
      if (sectionId) {
        scrollToSection(sectionId);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(path);
      if (sectionId) {
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

  const navItems = [
    {
      name: "Baristas",
      link: "/baristas",
      onClick: (e) => {
        e.preventDefault();
        handleNavigation('/baristas');
      }
    },
    {
      name: "Sponsors",
      link: "/sponsors",
      onClick: (e) => {
        e.preventDefault();
        handleNavigation('/sponsors');
      }
    },
    {
      name: "FAQ",
      link: "/#faq",
      onClick: (e) => {
        e.preventDefault();
        handleNavigation('/', 'faq');
      }
    },
  ];

  return (
    <div className="relative w-full z-[1000]">
      <Navbar className="bg-transparent">
        {/* Desktop Navigation */}
        <NavBody className={className}>
          <NavbarLogo onClick={() => handleNavigation('/')} />
          
          <NavItems items={navItems} />
          
          <div className="flex items-center gap-4">
            <a 
              href="https://hackaccino.devfolio.co" 
              target="_blank" 
              rel="noreferrer"
            >
              <NoiseBackground 
                containerClassName="w-fit p-[2px] rounded-full mx-auto" 
                gradientColors={[ 
                  "rgb(242, 78, 30)", 
                  "rgb(242, 157, 56)", 
                  "rgb(242, 118, 43)", 
                ]}
              >
                <button 
                  className="h-full w-full cursor-pointer rounded-full bg-gradient-to-r from-[#F24E1E] to-[#F29D38] px-6 py-2 text-white font-bold font-['Poppins'] shadow-[0px_2px_0px_0px_rgba(255,255,255,0.2)_inset,0px_0.5px_1px_0px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(242,78,30,0.6)] active:scale-95"
                >
                  {buttonText}
                </button> 
              </NoiseBackground>
            </a>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo onClick={() => handleNavigation('/')} />
            <MobileNavToggle 
              isOpen={isMobileMenuOpen} 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a 
                key={`mobile-link-${idx}`} 
                href={item.link} 
                onClick={item.onClick} 
                className="relative text-white hover:text-white text-lg font-semibold font-['Poppins'] py-2 border-b border-white/5"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4">
              <a 
                href="https://hackaccino.devfolio.co" 
                target="_blank" 
                rel="noreferrer"
                className="w-full"
              >
                <NavbarButton 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  variant="primary" 
                  className="w-full"
                >
                  {buttonText}
                </NavbarButton>
              </a>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;