import React, { useRef } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Tracks from './Tracks';
import Timeline from './Timeline';
import FAQ from './FAQ';
import Footer from './Footer';
import Animation from '../animation/animation';

const LandingPage = () => {
  const scrollSpeedRef = useRef(0);
  const lastScrollTop = useRef(0);
  const scrollContainerRef = useRef(null);
  const lastSnappedRef = useRef("");
  const scrollStopTimeoutRef = useRef(null);

  const handleScroll = (e) => {
    const container = e.target;
    const scrollTop = container.scrollTop;
    const velocity = Math.abs(scrollTop - lastScrollTop.current);
    scrollSpeedRef.current = velocity;
    lastScrollTop.current = scrollTop;

    // Clear existing timeout
    if (scrollStopTimeoutRef.current) {
      clearTimeout(scrollStopTimeoutRef.current);
    }

    // Set a timeout to detect when scrolling stops
    scrollStopTimeoutRef.current = setTimeout(() => {
      const finalScrollTop = container.scrollTop;
      
      // Detect which section is currently snapped/visible
      const sections = container.querySelectorAll('.snap-section');
      let currentSection = "";
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top); // Distance from top of viewport
        if (distance < minDistance) {
          minDistance = distance;
          currentSection = section.getAttribute('data-section');
        }
      });

      console.log(`Scroll stopped at Y: ${Math.round(finalScrollTop)}px (Snapped to: ${currentSection || 'None'})`);
      lastSnappedRef.current = currentSection;
    }, 150); // Wait 150ms after last scroll event to assume it stopped
  };

  return (
    <div 
      ref={scrollContainerRef}
      onScroll={handleScroll}
      className="landing-page relative overflow-x-hidden h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory"
    >
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        {/* Pass the ref to the animation */}
        <Animation className="w-full h-full" scrollSpeedRef={scrollSpeedRef} />
        
        {/* Gradient Overlay for text readability */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%)'
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="snap-start min-h-screen flex flex-col snap-section" data-section="Top">
          <Header />
          {/* Optional: Scale Hero slightly on very small screens if needed */}
          <div className="flex-grow flex flex-col justify-center origin-center scale-95 md:scale-100">
             <Hero />
          </div>
        </div>
        
        <div className="bg-[#000000] bg-opacity-20 backdrop-blur-sm"> 
            {/* ABOUT SECTION */}
            {/* Changed h-screen to min-h-screen for safety */}
            <div className="snap-start min-h-screen flex flex-col justify-center snap-section pt-20" data-section="About">
              {/* Scale Content: 85% size on mobile, 100% on desktop */}
              <div className="w-full origin-center scale-[0.85] sm:scale-90 md:scale-100">
                 <About />
              </div>
            </div>
            
            {/* TRACKS SECTION */}
            <div className="snap-start min-h-screen flex flex-col justify-center snap-section pt-20" data-section="Tracks">
              <div className="w-full origin-center scale-[0.85] sm:scale-90 md:scale-100">
                 <Tracks />
              </div>
            </div>
            
            {/* TIMELINE SECTION */}
            <div className="snap-start min-h-screen snap-section pt-20" data-section="Timeline">
               {/* Timeline is usually tall, scaling it helps fit more items */}
               <div className="w-full origin-top scale-[0.85] sm:scale-90 md:scale-100">
                 <Timeline />
               </div>
            </div>
            
            {/* FAQ SECTION */}
            <div className="snap-start min-h-screen snap-section pt-20" data-section="FAQ">
               <div className="w-full origin-top scale-[0.85] sm:scale-90 md:scale-100">
                  <FAQ />
               </div>
            </div>
            
            {/* FOOTER SECTION */}
            <div className="snap-start snap-section" data-section="Footer">
              <Footer />
            </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;