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
      className={`relative inline-flex items-center justify-center px-10 py-4 bg-transparent text-white font-mono text-[13px] tracking-[0.2em] uppercase cursor-pointer transition-colors duration-300 ease-in-out group ${className}`}
    >
      {/* Faint connecting border */}
      <div className="absolute inset-0 border border-current opacity-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-300 z-0" />
      
      {/* Hover background fill */}
      <div className="absolute inset-0 bg-[#3C5929] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out z-0" />

      {/* Top-Left Bracket */}
      <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-current pointer-events-none z-10" />
      {/* Top-Right Bracket */}
      <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-current pointer-events-none z-10" />
      {/* Bottom-Left Bracket */}
      <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-current pointer-events-none z-10" />
      {/* Bottom-Right Bracket */}
      <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-current pointer-events-none z-10" />
      
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
        {children}
      </span>
    </button>
  );
}
