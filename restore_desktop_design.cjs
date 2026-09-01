const fs = require('fs');
const path = require('path');

const projectRoot = 'C:\\Users\\Shaym Bhadja\\Downloads\\SDL\\Complete Lending Page Design';

// 1. Restore Footer in App.tsx to exact desktop design
const appPath = path.join(projectRoot, 'src', 'app', 'App.tsx');
let appCode = fs.readFileSync(appPath, 'utf8');

const currentFooter = `function Footer({ onContactClick }: { onContactClick?: () => void }) {
  const navigate = useNavigate();
  return (
    <footer className="w-full bg-black pt-12 md:pt-16 pb-12 md:pb-16 flex flex-col gap-10 md:gap-20">
      {/* top nav columns */}
      <div className="px-4 sm:px-6 md:px-9 grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row lg:flex-wrap lg:justify-between gap-8 lg:gap-10">
        {/* logo & contact */}
        <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col gap-5 items-start">
          <SmallLogo />
          <img 
            src={makeInIndiaLogo} 
            alt="Make in India" 
            className="h-10 w-auto object-contain invert opacity-70 hover:opacity-100 transition-opacity duration-200" 
          />
          <div className="flex flex-col gap-2 mt-2">
            <p
              className="text-white/60 text-xs uppercase tracking-[0.54px]"
              style={{ fontFamily: INTER, fontWeight: 500 }}
            >
              Contact
            </p>
            <a
              href="mailto:contact@sahanadefence.com"
              className="text-white text-sm hover:text-white/80 transition-colors"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              contact@sahanadefence.com
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="w-full sm:min-w-[120px]">
          <FooterCol label="Company" links={FOOTER_COMPANY} />
        </div>
        {/* Work with us */}
        <div className="w-full sm:min-w-[120px]">
          <FooterCol label="Work with us" links={FOOTER_WORK} />
        </div>
        {/* Social */}
        <div className="w-full sm:min-w-[120px]">
          <FooterCol label="Social" links={FOOTER_SOCIAL} />
        </div>
      </div>

            {/* bottom legal */}
      <div className="px-4 sm:px-6 md:px-9 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 border-t border-white/10 pt-6 md:pt-8">
        <p
          className="text-white text-xs uppercase tracking-[0.54px]"
          style={{ fontFamily: INTER, fontWeight: 500 }}
        >
          Copyright &copy; 2026 Sahana Defence
        </p>
        <div className="flex flex-row flex-wrap gap-x-6 gap-y-2">
          {[{label: "Privacy Policy", url: "/privacy-policy"}].map(
            (item) => (
              <a
                key={item.label}
                onClick={(e) => { 
                  if (item.url !== '#') {
                    e.preventDefault();
                    navigate(item.url);
                  }
                }}
                href={item.url}
                className="text-white/60 text-xs uppercase tracking-[0.54px] capitalize hover:text-white/90 transition-colors cursor-pointer"
                style={{ fontFamily: INTER, fontWeight: 500 }}
              >
                {item.label}
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
}`;

const originalDesktopFooter = `function Footer({ onContactClick }: { onContactClick?: () => void }) {
  const navigate = useNavigate();
  return (
    <footer className="w-full bg-black pt-16 pb-16 flex flex-col gap-20">
      {/* top nav columns */}
      <div className="px-4 sm:px-6 md:px-9 grid grid-cols-2 gap-8 md:flex md:flex-row md:flex-wrap md:justify-between md:gap-10">
        {/* logo & contact */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-6 items-start">
          <SmallLogo />
          <img 
            src={makeInIndiaLogo} 
            alt="Make in India" 
            className="h-10 w-auto object-contain invert opacity-70 hover:opacity-100 transition-opacity duration-200" 
          />
          <div className="flex flex-col gap-2 mt-2">
            <p
              className="text-white/60 text-xs uppercase tracking-[0.54px]"
              style={{ fontFamily: INTER, fontWeight: 500 }}
            >
              Contact
            </p>
            <a
              href="mailto:contact@sahanadefence.com"
              className="text-white text-sm hover:text-white/80 transition-colors"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              contact@sahanadefence.com
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="min-w-[120px]">
          <FooterCol label="Company" links={FOOTER_COMPANY} />
        </div>
        {/* Work with us */}
        <div className="min-w-[120px]">
          <FooterCol label="Work with us" links={FOOTER_WORK} />
        </div>
        {/* Social */}
        <div className="min-w-[120px]">
          <FooterCol label="Social" links={FOOTER_SOCIAL} />
        </div>
      </div>

      {/* bottom legal */}
      <div className="px-4 sm:px-6 md:px-9 flex flex-col gap-3 border-t border-white/10 pt-8">
        <p
          className="text-white text-xs uppercase tracking-[0.54px]"
          style={{ fontFamily: INTER, fontWeight: 500 }}
        >
          Copyright &copy; 2026 Sahana Defence
        </p>
        <div className="flex flex-row flex-wrap gap-x-6 gap-y-2">
          {[{label: "Privacy Policy", url: "/privacy-policy"}].map(
            (item) => (
              <a
                key={item.label}
                onClick={(e) => { 
                  if (item.url !== '#') {
                    e.preventDefault();
                    navigate(item.url);
                  }
                }}
                href={item.url}
                className="text-white/60 text-xs uppercase tracking-[0.54px] capitalize hover:text-white/90 transition-colors cursor-pointer"
                style={{ fontFamily: INTER, fontWeight: 500 }}
              >
                {item.label}
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
}`;

if (appCode.includes(currentFooter)) {
  appCode = appCode.replace(currentFooter, originalDesktopFooter);
  fs.writeFileSync(appPath, appCode, 'utf8');
  console.log('✅ Footer restored in App.tsx');
} else {
  console.log('⚠️ Could not find exact currentFooter snippet, searching with regex');
  const footerRegex = /function Footer\(\{[\s\S]*?^}/m;
  if (footerRegex.test(appCode)) {
    appCode = appCode.replace(footerRegex, originalDesktopFooter);
    fs.writeFileSync(appPath, appCode, 'utf8');
    console.log('✅ Footer replaced using regex');
  }
}

// 2. Restore GuardianExperience QuoteSection
const geQuotePath = path.join(projectRoot, 'src', 'pages', 'GuardianExperience', 'components', 'QuoteSection.tsx');
const geOriginal = `import React, { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Globe, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ACCENT = "#9CFF00";

export function QuoteSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate HUD elements subtle floating
      gsap.to('.hud-element', {
        y: 'random(-4, 4)',
        opacity: 'random(0.3, 0.7)',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2
      });

      // Reveal text sequence on scroll
      gsap.from('.mission-reveal', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Reveal trust elements
      gsap.from('.trust-strip', {
        scrollTrigger: {
          trigger: '.trust-strip',
          start: 'top 90%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-[#030504] py-24 md:py-32 overflow-hidden flex flex-col justify-between items-center z-10 border-t border-white/10"
    >
      {/* --- BACKGROUND HUD & GRAPHICS --- */}
      {/* Subtle Tactical Radar Rings */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
        {/* CSS generated radar/topo circles */}
        <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] border border-white rounded-full" />
        <div className="absolute top-[35%] left-[-5%] w-[450px] h-[450px] border border-white rounded-full" />
        <div className="absolute top-[40%] left-[0%] w-[300px] h-[300px] border border-dashed border-white rounded-full" />
        <div className="absolute top-1/2 left-[15%] w-full h-px bg-white/50" />
        <div className="absolute top-0 left-[15%] w-px h-full bg-white/50" />
      </div>
      
      {/* Atmospheric Haze / Noise */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-noise" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#030504] via-transparent to-[#030504] pointer-events-none" />

      {/* HUD Details (Corners & Crosshairs) */}
      <div className="hud-element absolute top-12 left-12 w-8 h-8 border-t-2 border-l-2 border-[#9CFF00]/40 z-0" />
      <div className="hud-element absolute top-12 right-12 w-8 h-8 border-t-2 border-r-2 border-[#9CFF00]/40 z-0" />
      <div className="hud-element absolute bottom-12 left-12 w-8 h-8 border-b-2 border-l-2 border-[#9CFF00]/40 z-0" />
      <div className="hud-element absolute bottom-12 right-12 w-8 h-8 border-b-2 border-r-2 border-[#9CFF00]/40 z-0" />
      
      <div className="hud-element absolute top-[25%] left-[20%] text-[#9CFF00]/20 font-mono text-[10px] tracking-widest">+</div>
      <div className="hud-element absolute bottom-[40%] right-[25%] text-[#9CFF00]/20 font-mono text-[10px] tracking-widest">+</div>
      <div className="hud-element absolute top-1/2 right-[10%] w-12 h-px bg-[#9CFF00]/20" />


      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        
        {/* Quote Mark */}
        <div className="mission-reveal relative mb-[70px] lg:mb-[90px] flex justify-center">
          <div 
            className="absolute inset-0 blur-md opacity-30 rounded-full" 
            style={{ backgroundColor: ACCENT }}
          />
          <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10" style={{ color: ACCENT }}>
            <path d="M19.5 21C19.5 28.5 13.5 34.5 6 34.5V40.5C16.815 40.5 25.5 31.815 25.5 21V1.5H0V21H19.5ZM42 21C42 28.5 36 34.5 28.5 34.5V40.5C39.315 40.5 48 31.815 48 21V1.5H22.5V21H42Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Main Headline */}
        <h2 className="mission-reveal text-[34px] sm:text-[44px] md:text-[58px] lg:text-[72px] font-extrabold uppercase text-[#F5F5F5] leading-[1.0] lg:leading-[0.98] tracking-[-0.02em] mb-12">
          CONNECTING THE MODERN <br className="hidden md:block" />
          <span className="text-[#9CFF00]" style={{ textShadow: '0 0 15px rgba(156,255,0,0.3)' }}>WARFIGHTER.</span> ENHANCING <br className="hidden md:block" />
          SURVIVAL AND OPERATIONAL <br className="hidden md:block" />
          <span className="text-[#9CFF00]" style={{ textShadow: '0 0 15px rgba(156,255,0,0.3)' }}>SUPERIORITY.</span>
        </h2>

        {/* Decorative Headline Element */}
        <div className="mission-reveal flex flex-col items-center justify-center mb-10 w-full">
          <div className="flex items-center w-full max-w-[120px] justify-center opacity-80">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-[#9CFF00]" />
            <div 
              className="w-2 h-2 mx-2 rotate-45 border border-[#9CFF00]" 
              style={{ boxShadow: '0 0 8px rgba(156,255,0,0.4)' }}
            />
            <div className="h-[1px] w-full bg-gradient-to-l from-transparent to-[#9CFF00]" />
          </div>
        </div>

        {/* Supporting Message */}
        <p className="mission-reveal text-[#858585] font-medium text-xs md:text-sm lg:text-base uppercase tracking-[0.15em] mb-12 lg:mb-16 max-w-[90vw]">
          LET'S BUILD A SMARTER, SAFER AND MORE RESILIENT TOMORROW — TOGETHER.
        </p>

        {/* CTAs */}
        <div className="mission-reveal flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-[800px]">
          
          {/* Primary CTA */}
          <button 
            className="group relative flex items-center justify-center w-full md:w-[410px] h-[64px] lg:h-[72px] bg-[#9CFF00] text-[#030504] font-bold uppercase tracking-wide transition-all duration-300 overflow-hidden"
            style={{ 
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)',
              boxShadow: '0 0 20px rgba(156,255,0,0.1)'
            }}
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center text-sm lg:text-[15px]">
              CONTACT TACTICAL GEAR SALES
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2.5} />
            </span>
          </button>

          {/* Secondary CTA */}
          <button 
            className="group relative flex items-center justify-center w-full md:w-[320px] h-[64px] lg:h-[72px] bg-transparent border border-white/20 text-[#F5F5F5] font-semibold uppercase tracking-wide transition-all duration-300 hover:border-[#9CFF00] hover:text-white"
            style={{ 
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)'
            }}
          >
            <div className="absolute inset-0 bg-[#9CFF00]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center text-xs lg:text-[13px] group-hover:drop-shadow-[0_0_8px_rgba(156,255,0,0.4)] transition-all">
              REQUEST A SYSTEM INTEGRATION BRIEFING
              <ArrowRight className="w-4 h-4 ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 group-hover:text-[#9CFF00] transition-all duration-300" strokeWidth={2} />
            </span>
          </button>
        </div>
      </div>

      {/* --- TRUST / CREDIBILITY STRIP --- */}
      <div className="trust-strip relative z-20 w-full mt-24 px-4 pb-4">
        <div className="max-w-[1400px] mx-auto bg-black/40 backdrop-blur-md border border-white/10 p-5 md:p-0">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Item 1 */}
            <div className="flex items-center gap-4 py-4 md:py-6 px-4 lg:px-10">
              <Shield className="w-7 h-7 lg:w-8 lg:h-8 shrink-0" style={{ color: ACCENT, strokeWidth: 1.5 }} />
              <div className="text-[#F5F5F5] font-bold text-xs lg:text-sm tracking-wider uppercase leading-snug">
                TRUSTED BY <br className="hidden md:block"/>DEFENCE FORCES
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4 py-4 md:py-6 px-4 lg:px-10">
              <Globe className="w-7 h-7 lg:w-8 lg:h-8 shrink-0" style={{ color: ACCENT, strokeWidth: 1.5 }} />
              <div className="text-[#F5F5F5] font-bold text-xs lg:text-sm tracking-wider uppercase leading-snug">
                ENGINEERED FOR <br className="hidden md:block"/>REAL-WORLD MISSIONS
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4 py-4 md:py-6 px-4 lg:px-10">
              <Target className="w-7 h-7 lg:w-8 lg:h-8 shrink-0" style={{ color: ACCENT, strokeWidth: 1.5 }} />
              <div className="text-[#F5F5F5] font-bold text-xs lg:text-sm tracking-wider uppercase leading-snug">
                COMMITTED TO <br className="hidden md:block"/>A SAFER WORLD
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
`;

fs.writeFileSync(geQuotePath, geOriginal, 'utf8');
console.log('✅ GuardianExperience QuoteSection restored');
