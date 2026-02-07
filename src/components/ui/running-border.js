import React from 'react';

export const RunningBorder = ({ 
  color = "#F24E1E",
  borderWidth = "1px",
  reverse = false
}) => {
  return (
    <>
      <div 
        className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden"
        style={{
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: borderWidth,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
           <div 
             className="w-[200%] h-[200%]"
             style={{
                 background: `conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 70%, ${color} 100%)`,
                 animation: `runningBorderSpin ${reverse ? 'reverse' : 'normal'} 15s linear infinite`
             }}
           />
        </div>
      </div>
      <style>{`
        @keyframes runningBorderSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};
