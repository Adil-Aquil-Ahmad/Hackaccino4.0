import React, { useState, useEffect } from 'react';

const GlitchText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

  useEffect(() => {
    let interval;
    const animate = () => {
      interval = setInterval(() => {
        setDisplayText(prev => 
          text.split('').map((char, i) => {
            // Keep spaces and some punctuation stable to maintain word structure
            if (char === ' ') return char;
            // Increase glitch probability to make it less readable
            if (Math.random() < 0.6) {
              return chars[Math.floor(Math.random() * chars.length)];
            }
            return char;
          }).join('')
        );
      }, 50);
    };

    animate();
    return () => clearInterval(interval);
  }, [text]);

  return <span className="font-mono">{displayText}</span>;
};

export default GlitchText;
