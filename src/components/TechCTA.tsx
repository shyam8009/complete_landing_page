import React from 'react';

interface TechCTAProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function TechCTA({ children, onClick, className = '' }: TechCTAProps) {
  return (
    <button 
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-9 py-4 bg-transparent text-white font-sans text-[13px] font-medium tracking-[0.15em] uppercase border-none cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#3C5929] group ${className}`}
    >
      {/* Top-Left Bracket */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white pointer-events-none" />
      {/* Top-Right Bracket */}
      <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white pointer-events-none" />
      {/* Bottom-Left Bracket */}
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white pointer-events-none" />
      {/* Bottom-Right Bracket */}
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white pointer-events-none" />
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
