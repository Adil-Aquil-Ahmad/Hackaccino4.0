import React from 'react';

export const InfiniteVerticalScroll = ({ 
  items, 
  direction = 'up', 
  speed = 'normal',
  className = '' 
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  React.useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    
    // Clone items to ensure seamless scrolling
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem);
      }
    });
  }, []);

  const getSpeed = () => {
    switch (speed) {
      case 'fast': return '20s';
      case 'normal': return '40s';
      case 'slow': return '80s';
      default: return '40s';
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={`h-full overflow-hidden relative z-0 ${className}`}
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)'
      }}
    >
      <div
        ref={scrollerRef}
        className="flex flex-col gap-6 w-full"
        style={{
          animation: `scroll-vertical ${getSpeed()} linear infinite ${direction === 'down' ? 'reverse' : 'normal'}`
        }}
      >
        {items.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 w-full flex justify-center">
            {item}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll-vertical {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  );
};
