const fs = require('fs');
const path = require('path');

const dir = 'src/pages/IoT';
const compDir = path.join(dir, 'components');

const pageCode = `import React, { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { PipelineSection } from './components/PipelineSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { SubsystemsSection } from './components/SubsystemsSection';
import { UseCasesSection } from './components/UseCasesSection';
import { ClosingSection } from './components/ClosingSection';

export function IoTPage() {
  useEffect(() => {
    document.title = "Internet of Things | Defence Deeptech";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Technology and devices that connect immeasurable folks within the world, working smarter with better connectivity.");
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#000000] text-white selection:bg-[#84CC16] selection:text-black font-sans overflow-hidden">
      <HeroSection />
      <PipelineSection />
      <ValuePropositionSection />
      <SubsystemsSection />
      <UseCasesSection />
      <ClosingSection />
    </div>
  );
}
`;

const heroCode = `import React, { useRef, useLayoutEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { TechCTA } from '@/components/TechCTA';

const INTER = '"Inter", sans-serif';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".hero-element",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[100dvh] max-md:landscape:min-h-[60vh] overflow-hidden bg-black flex flex-col">
      {/* Background Video */}
      <video
        src="/assets/iot_hero_bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Content Container */}
      <div className="relative z-20 flex-1 flex flex-col justify-center pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12 w-full px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="max-w-3xl text-left">
          
          {/* Eyebrow */}
          <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse shadow-[0_0_8px_#84CC16]" />
            <span className="text-xs font-bold tracking-[2px] text-white uppercase" style={{ fontFamily: INTER }}>
              DEFENCE DEEPTECH / CONNECTIVITY & INFRASTRUCTURE
            </span>
          </div>
          
          {/* Headline */}
          <h1 
            className="hero-element text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight"
            style={{ fontFamily: INTER }}
          >
            INTERNET OF <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500">
              THINGS
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="hero-element text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
            Technology and devices that connect immeasurable folks within the world, working smarter with better connectivity. Adopt an IoT strategy to deliver higher services and redefine relationships with your clients, partners, and employees.
          </p>
          
          {/* CTA */}
          <div className="hero-element flex flex-wrap gap-6 items-center mb-6 md:mb-16">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-start w-full">
                <TechCTA>
                  REQUEST A CONSULTATION
                  <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
                </TechCTA>
              </div>
          </div>
          
          {/* Quick Stats Block (Glassmorphic) */}
          <div className="hero-element flex flex-col md:flex-row gap-4 md:gap-8 p-6 rounded-lg mt-6 md:mt-12 border border-white/10 bg-white/5 backdrop-blur-xl max-w-fit">
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-white uppercase">Total Automation</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Device-to-Device Interaction</div>
            </div>
            <div className="hidden md:block w-px bg-white/20" /><div className="block md:hidden h-px w-full bg-white/20" />
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-white uppercase">Seamless Management</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Customized IoT Platforms</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
`;

const pipelineCode = `import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Network, Bot, Brain, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const NODES = [
  {
    id: "01",
    title: "CONNECT",
    description: "Connecting technology and devices to realize new digital opportunities everywhere, from banking engagement to personalized experiences.",
    icon: Network
  },
  {
    id: "02",
    title: "AUTOMATIZE",
    description: "Automatizing devices in terms of management systems, computers, or robots for handling different processes and machineries in an industry.",
    icon: Bot
  },
  {
    id: "03",
    title: "ANALYZE",
    description: "Utilizing data science teams to find new opportunities and fix the existing bugs hidden from the big data.",
    icon: Brain
  },
  {
    id: "04",
    title: "VISUALIZE",
    description: "Assisting specialists to take the right choices through understanding and visualizing knowledge via data visualization services.",
    icon: BarChart3
  }
];

export function PipelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Step appearances
      gsap.fromTo(stepsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );

      // Glowing progress line
      if (progressLineRef.current) {
        gsap.fromTo(progressLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 50%',
              end: 'bottom 80%',
              scrub: true,
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="pipeline" ref={sectionRef} className="py-20 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 relative">
          
          {/* Connecting Line Base (Desktop) */}
          <div className="hidden lg:block absolute top-[2.5rem] h-[1px] bg-white/5" style={{ left: "calc((100% - 6rem) / 8)", right: "calc((100% - 6rem) / 8)" }} />
          
          {/* Glowing Progress Line */}
          <div ref={progressLineRef} className="hidden lg:block absolute top-[2.5rem] h-[2px] bg-gradient-to-r from-[#84CC16] to-[#84CC16] shadow-[0_0_15px_#84CC16]" style={{ left: "calc((100% - 6rem) / 8)", right: "calc((100% - 6rem) / 8)", transformOrigin: "left center" }} />

          {NODES.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id} 
                ref={el => stepsRef.current[index] = el}
                className="relative flex flex-col group items-center text-center"
              >
                {/* Unified Circular Step Node */}
                <div className="mb-8 flex flex-col items-center justify-center w-20 h-20 rounded-full bg-[#0a0a0a] border border-white/10 group-hover:bg-[#111111] transition-all duration-500 relative z-10 shadow-xl">
                  <Icon className="w-8 h-8 text-white/60 group-hover:text-[#84CC16] group-hover:scale-110 transition-all duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm max-w-[280px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`;

const valuePropCode = `import React, { useRef, useLayoutEffect } from 'react';
import { Zap, Server, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dashboardImg from '@/imports/c2_dashboard_ui.png';

gsap.registerPlugin(ScrollTrigger);

export function ValuePropositionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.fade-in-left',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      );
      
      gsap.fromTo('.hud-element',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#020202] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="flex flex-col">
            <div className="fade-in-left inline-flex items-center gap-2 mb-6">
              <span className="text-[#84CC16] text-sm font-bold tracking-[3px] uppercase">
                SMART INFRASTRUCTURE
              </span>
            </div>
            
            <h2 className="fade-in-left text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-tight leading-[1.1]">
              Customized Hardware <br/> & Total Automation
            </h2>
            
            <div className="fade-in-left space-y-6 text-white/60 text-lg leading-relaxed max-w-xl">
              <p>
                Companies looking forward to top-quality innovations are adopting the Internet of Things strategy to make higher services by understanding their client better. By deploying our customized IoT solution in your business, you can customize with our IOT services with an end-to-end solution.
              </p>
              <p>
                We guarantee total automation just in case of device-to-device interaction. Furthermore, our IOT platforms offer customized solutions for the seamless management of your business.
              </p>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.15)_0%,transparent_70%)] pointer-events-none" />
            
            {/* Central Render */}
            <img 
              src={dashboardImg} 
              alt="IoT Smart Infrastructure" 
              className="relative z-10 w-full object-contain rounded-xl border border-white/10 drop-shadow-[0_0_50px_rgba(132,204,22,0.1)] hover:scale-105 transition-transform duration-700"
            />
            
            {/* HUD Callouts */}
            <div className="hud-element absolute top-[15%] -left-[10%] bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl hover:border-[#84CC16]/50 transition-colors cursor-default">
              <div className="flex items-center gap-3">
                <Zap className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm tracking-wide">Wireless Communication & Cloud Computing</div>
                </div>
              </div>
            </div>

            <div className="hud-element absolute bottom-[25%] -left-[5%] bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl hover:border-[#84CC16]/50 transition-colors cursor-default">
              <div className="flex items-center gap-3">
                <Server className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm tracking-wide">Processing Speed & Light-Weight OS</div>
                </div>
              </div>
            </div>

            <div className="hud-element absolute top-[40%] -right-[5%] bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl hover:border-[#84CC16]/50 transition-colors cursor-default">
              <div className="flex items-center gap-3">
                <Shield className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm tracking-wide">Small-Footprint Protocols</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
`;

const subsystemsCode = `import React from 'react';
import { InteractiveBlueprint, TierData } from '@/components/InteractiveBlueprint';
import img1 from '@/imports/command_control_2.jpeg';
import img2 from '@/imports/rf_radar_hud.png';
import img3 from '@/imports/c2_dashboard_ui.png';

export function SubsystemsSection() {
  const tiers: TierData[] = [
    {
      id: 'sub-automation',
      type: 'PROCESS MANAGEMENT',
      title: 'Automated Systems',
      description: 'We automatize devices and information technologies for handling different processes and machineries in an industry.',
      image: img1,
      statusBadge: 'HARDWARE & ROBOTS',
      specs: [
        { label: 'Hardware', value: 'Computers & Robots' },
        { label: 'Focus', value: 'Industry Processes' }
      ]
    },
    {
      id: 'sub-custom',
      type: 'END-TO-END',
      title: 'Customized Hardware',
      description: 'Get custom-made and secure IoT solutions specifically engineered by focusing on your business domain.',
      image: img2,
      statusBadge: 'IOT PLATFORMS',
      specs: [
        { label: 'Interaction', value: 'Device-to-Device' },
        { label: 'Execution', value: 'Total Automation' }
      ]
    },
    {
      id: 'sub-data',
      type: 'ANALYTICS',
      title: 'Data Science Platforms',
      description: 'Our data science team helps you find new opportunities, while our knowledge image services assist you in taking the right choices through data visualization.',
      image: img3,
      statusBadge: 'PLATFORM MANAGEMENT',
      specs: [
        { label: 'Insight', value: 'Bug Fixing' },
        { label: 'Platform', value: 'Customized Management' }
      ]
    }
  ];

  return (
    <section className="bg-black py-24 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
          Core Technical Capabilities
        </h2>
      </div>
      <InteractiveBlueprint tiers={tiers} defaultTier="sub-automation" />
    </section>
  );
}
`;

const useCasesCode = `import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '@/imports/command_control_2.jpeg';
import img2 from '@/imports/rf_radar_hud.png';
import img3 from '@/imports/proxy/magnific_photorealistic-outdoor-fi_Piskn0l42C 1.jpeg';

gsap.registerPlugin(ScrollTrigger);

const USE_CASES = [
  {
    image: img1,
    label: "Defence & Government"
  },
  {
    image: img2,
    label: "Port, Marine & Manufacturing"
  },
  {
    image: img3,
    label: "Wearables & Healthcare"
  }
];

export function UseCasesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black relative">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-16 uppercase tracking-tight text-center">
          Tactical Applications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((useCase, idx) => (
            <div 
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="group relative h-[400px] md:h-[500px] rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={useCase.image} 
                alt={useCase.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-[#84CC16]/20 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="w-8 h-1 bg-[#84CC16] mb-4 transform origin-left group-hover:scale-x-150 transition-transform" />
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                  {useCase.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const closingCode = `import React from 'react';
import { ChevronRight } from 'lucide-react';
import { TechCTA } from '@/components/TechCTA';

export function ClosingSection() {
  return (
    <section className="py-24 bg-[#000000] border-t border-white/5 relative overflow-hidden flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <div className="mb-4">
          <span className="text-[#84CC16] font-mono text-sm tracking-widest uppercase">
            Automate Your Operational Landscape
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-12 uppercase tracking-tight leading-snug">
          Implement customized IoT hardware, platforms, and data science solutions for the seamless management of your business.
        </h2>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <TechCTA>
            REQUEST A CONSULTATION
            <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
          </TechCTA>
          
          <a href="#" className="text-white/40 hover:text-white/80 text-sm transition-colors mt-2">
            Explore IoT Platforms
          </a>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(dir, 'IoTPage.tsx'), pageCode);
fs.writeFileSync(path.join(compDir, 'HeroSection.tsx'), heroCode);
fs.writeFileSync(path.join(compDir, 'PipelineSection.tsx'), pipelineCode);
fs.writeFileSync(path.join(compDir, 'ValuePropositionSection.tsx'), valuePropCode);
fs.writeFileSync(path.join(compDir, 'SubsystemsSection.tsx'), subsystemsCode);
fs.writeFileSync(path.join(compDir, 'UseCasesSection.tsx'), useCasesCode);
fs.writeFileSync(path.join(compDir, 'ClosingSection.tsx'), closingCode);

// Remove the old components
const oldFiles = [
  'IoTHero.tsx', 'IoTPipeline.tsx', 'IoTCapabilities.tsx', 
  'IoTSpecs.tsx', 'IoTApplications.tsx', 'IoTCTA.tsx'
];

oldFiles.forEach(f => {
  const p = path.join(compDir, f);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
  }
});

console.log('IoT converted to OSINT layout structure successfully.');
