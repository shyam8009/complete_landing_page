import React from 'react';
const INTER = "'Inter', sans-serif";

const LEADERSHIP = [
  { 
    name: 'Pratik Kakadia', 
    role: 'Founder & Managing Director', 
    image: '/assets/pratik_kakadia.png',
    linkedin: 'https://in.linkedin.com/in/pratikkakadia'
  },
  { 
    name: 'Dhaval Joshi', 
    role: 'Group CEO', 
    image: '/assets/leader_dhaval_joshi.png',
    linkedin: 'https://in.linkedin.com/in/dhaval-joshi-b8840939'
  },
  { 
    name: 'Yogesh Pajni', 
    role: 'Director - Defence Engineering, Technical & Production', 
    image: '/assets/leader_yogesh_pajni.png',
    linkedin: 'https://in.linkedin.com/in/yogesh-pajni-594321214'
  },
  { 
    name: 'Brig Rajiv Singh (Retd.)', 
    role: 'Chief Security Officer', 
    image: '/assets/leader_rajiv_singh.png',
    linkedin: 'https://www.linkedin.com/in/brigadier-rajiv-singh-57356018/'
  },
  { 
    name: 'Nikhil Mitaliya', 
    role: 'Director - Defence Research & Development', 
    image: '/assets/leader_nikhil_mitaliya.png',
    linkedin: 'https://www.linkedin.com/in/nikhil-mitaliya-a247631a/'
  }
];

export default function AboutLeadership() {
  return (
    <section className="w-full bg-slate-50 text-slate-900 py-16 sm:py-20 md:py-32 z-10 relative">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="flex flex-col items-center text-center mb-20">
          <h3 className="text-sm font-bold tracking-[0.2em] text-[#84CC16] uppercase mb-4" style={{ fontFamily: INTER }}>
            [ COMMAND STRUCTURE ]
          </h3>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900">
            Leadership & Advisory
          </h2>
        </div>

        {/* 2-Row Flex Layout (Centered) */}
        <div className="flex flex-wrap justify-center items-start gap-x-8 gap-y-16 max-w-[1200px] mx-auto">
          {LEADERSHIP.map((leader, i) => (
            <div key={i} className="group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[360px] flex flex-col relative cursor-pointer">
              
              {/* Photo */}
              <div className="w-full aspect-[3/4] bg-slate-200 mb-6 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg">
                {leader.image ? (
                  <img src={leader.image} alt={leader.name} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-slate-300 mix-blend-multiply opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-mono text-sm text-center px-4">[ IMAGE UNAVAILABLE ]</div>
                  </>
                )}
                
                {/* Border accents */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-[#84CC16] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </div>
              
              {/* Text Block & LinkedIn */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col">
                  <h4 className="text-xl md:text-2xl font-black uppercase tracking-wider mb-1 text-slate-900">{leader.name}</h4>
                  <p className="text-[#84CC16] font-bold text-xs tracking-widest uppercase" style={{ fontFamily: INTER }}>{leader.role}</p>
                </div>
                {/* LinkedIn Icon */}
                <a 
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#0077b5] transition-colors mt-1 flex-shrink-0"
                  aria-label={"LinkedIn Profile for " + leader.name}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
