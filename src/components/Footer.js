import React from 'react';
import './Footer.css';
import { FaEnvelope } from 'react-icons/fa';
import CsiLogo from '../assets/csi.png';
import GithubLogo from '../assets/GitHub-Logo.png';
import HackaccinoLogo from '../assets/hackaccino_logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Brand & Address */}
        <div className="footer-col brand-col">
          <div className="brand-header">
            <img src={HackaccinoLogo} alt="Hackaccino" className="brand-logo" /> 
            <span className="brand-name">Hackaccino</span>
          </div>
          <div className="address-block">
            <p>Bennett University,</p>
            <p>Plot Nos 8-11, TechZone II,</p>
            <p>Greater Noida 201310, Uttar Pradesh</p>
          </div>
        </div>

        {/* Column 2: Partner Logos */}
        <div className="footer-col partners-col">
          <div className="partners-wrapper">
            <img src={CsiLogo} alt="CSI Bennett" className="partner-logo csi-logo" />
            <span className="partner-divider">×</span>
            <img src={GithubLogo} alt="GitHub" className="partner-logo github-logo" />
          </div>
        </div>

        {/* Column 3: Contact & Links */}
        <div className="footer-col contact-col">
          <div className="contact-group">
            <h4 className="footer-heading">Contact Us</h4>
            <a href="mailto:contact@hackaccino.tech" className="email-link">
              <span className="icon-box"><FaEnvelope /></span>
              <span>contact@hackaccino.tech</span>
            </a>
          </div>
          
          <div className="links-group">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="https://csi-bu.tech" target="_blank" rel="noopener noreferrer">About CSI →</a></li>
              <li><a href="https://hackaccino.tech/Hackaccino-Brochure.pdf" target="_blank" rel="noopener noreferrer">Sponsorship Brochure →</a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
