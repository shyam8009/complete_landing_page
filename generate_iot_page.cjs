const fs = require('fs');
const path = require('path');

const dir = 'src/pages/IoT';
const compDir = path.join(dir, 'components');

if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
if (!fs.existsSync(compDir)) fs.mkdirSync(compDir, { recursive: true });

const pageCode = `import React, { useEffect } from 'react';
import { IoTHero } from './components/IoTHero';
import { IoTPipeline } from './components/IoTPipeline';
import { IoTCapabilities } from './components/IoTCapabilities';
import { IoTSpecs } from './components/IoTSpecs';
import { IoTApplications } from './components/IoTApplications';
import { IoTCTA } from './components/IoTCTA';

export function IoTPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen">
      <IoTHero />
      <IoTPipeline />
      <IoTCapabilities />
      <IoTSpecs />
      <IoTApplications />
      <IoTCTA />
    </div>
  );
}
`;

const heroCode = `import React from 'react';
import { Network, Database, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function IoTHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Add actual video source in production */}
          <source src="/assets/iot_hero_bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse shadow-[0_0_10px_#84CC16]" />
            <span className="text-[#84CC16] font-mono text-sm tracking-widest uppercase">
              DEFENCE DEEPTECH / CONNECTIVITY & INFRASTRUCTURE
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            INTERNET OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">THINGS</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed animate-fade-in-up delay-100 max-w-2xl">
            Technology and devices that connect immeasurable folks within the world, working smarter with better connectivity. Adopt an IoT strategy to deliver higher services and redefine relationships with your clients, partners, and employees.
          </p>

          <div className="flex flex-wrap items-center gap-6 animate-fade-in-up delay-200">
            <a 
              href="#pipeline"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#84CC16] text-black font-mono font-bold tracking-widest uppercase overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2">
                REQUEST A CONSULTATION
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up delay-300">
            <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <Network className="w-8 h-8 text-[#84CC16]" />
              <div>
                <div className="text-2xl font-bold text-white mb-1">Total Automation</div>
                <div className="text-sm text-white/60 font-mono">Device-to-Device Interaction</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <Database className="w-8 h-8 text-[#84CC16]" />
              <div>
                <div className="text-2xl font-bold text-white mb-1">Seamless Management</div>
                <div className="text-sm text-white/60 font-mono">Customized IoT Platforms</div>
              </div>
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

export function IoTPipeline() {
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

const capabilitiesCode = `import React from 'react';
import { Zap, Server, Shield } from 'lucide-react';

export function IoTCapabilities() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
              <span className="text-[#84CC16] font-mono text-sm tracking-widest uppercase">
                SMART INFRASTRUCTURE
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Customized Hardware <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                & Total Automation.
              </span>
            </h2>

            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Companies looking forward to top-quality innovations are adopting the Internet of Things strategy to make higher services by understanding their client better. By deploying our customized IoT solution in your business, you can customize with our IOT services with an end-to-end solution.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              We guarantee total automation just in case of device-to-device interaction. Furthermore, our IOT platforms offer customized solutions for the seamless management of your business.
            </p>
          </div>

          {/* Visual Content */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[#111] group">
            {/* Background Image / Render */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#84CC16]/10 to-transparent opacity-50 mix-blend-overlay" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700" />
            
            {/* Overlay Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* HUD Elements */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="flex justify-end">
                <div className="px-4 py-2 bg-black/80 backdrop-blur-md border border-[#84CC16]/30 rounded text-[#84CC16] font-mono text-sm flex items-center gap-2 shadow-[0_0_15px_rgba(132,204,22,0.15)]">
                  <Zap className="w-4 h-4" />
                  Wireless Communication & Cloud Computing
                </div>
              </div>

              <div className="flex justify-start">
                <div className="px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 rounded text-white font-mono text-sm flex items-center gap-2">
                  <Server className="w-4 h-4 text-white/60" />
                  Processing Speed & Light-Weight OS
                </div>
              </div>

              <div className="flex justify-end">
                <div className="px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 rounded text-white font-mono text-sm flex items-center gap-2">
                  <Shield className="w-4 h-4 text-white/60" />
                  Small-Footprint Protocols
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

const specsCode = `import React from 'react';

const CARDS = [
  {
    badge: "PROCESS MANAGEMENT",
    title: "AUTOMATED SYSTEMS",
    description: "We automatize devices and information technologies for handling different processes and machineries in an industry.",
    footerLeftLabel: "HARDWARE",
    footerLeftValue: "Computers & Robots",
    footerRightLabel: "FOCUS",
    footerRightValue: "Industry Processes"
  },
  {
    badge: "END-TO-END",
    title: "CUSTOMIZED HARDWARE",
    description: "Get custom-made and secure IoT solutions specifically engineered by focusing on your business domain.",
    footerLeftLabel: "INTERACTION",
    footerLeftValue: "Device-to-Device",
    footerRightLabel: "EXECUTION",
    footerRightValue: "Total Automation"
  },
  {
    badge: "ANALYTICS",
    title: "DATA SCIENCE PLATFORMS",
    description: "Our data science team helps you find new opportunities, while our knowledge image services assist you in taking the right choices through data visualization.",
    footerLeftLabel: "INSIGHT",
    footerLeftValue: "Bug Fixing",
    footerRightLabel: "PLATFORM",
    footerRightValue: "Customized Management"
  }
];

export function IoTSpecs() {
  return (
    <section className="py-24 bg-white text-black relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, i) => (
            <div key={i} className="flex flex-col h-full bg-gray-50 border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-black text-white font-mono text-xs tracking-wider uppercase rounded-full">
                  {card.badge}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-4">
                {card.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-12 flex-grow">
                {card.description}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">{card.footerLeftLabel}</div>
                  <div className="font-semibold text-sm">{card.footerLeftValue}</div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">{card.footerRightLabel}</div>
                  <div className="font-semibold text-sm">{card.footerRightValue}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
`;

const appsCode = `import React from 'react';

const APPLICATIONS = [
  {
    label: "Defence & Government",
    scenario: "Transforming the operational landscape by automating complex defence workflows, and modernizing government infrastructure through real-time monitoring and data-driven decision-making.",
    image: "https://images.unsplash.com/photo-1541888062598-6395eeb8e860?auto=format&fit=crop&q=80"
  },
  {
    label: "Port, Marine & Manufacturing",
    scenario: "Revolutionizing port and marine infrastructure through connected sensors, and leading the manufacturing industry revolution where sensors transfer every byte of information.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
  },
  {
    label: "Wearables & Healthcare",
    scenario: "Delivering custom-made and secure IoT wearable and Telehealth solutions, as the health care industry utilizes great services from the IOT trade.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
  }
];

export function IoTApplications() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
            TACTICAL & COMMERCIAL<br />APPLICATIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {APPLICATIONS.map((app, i) => (
            <div key={i} className="group relative h-[480px] rounded-xl overflow-hidden bg-[#111]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: \`url(\${app.image})\` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                  {app.label}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {app.scenario}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const ctaCode = `import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function IoTCTA() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#84CC16]/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Automate Your Operational Landscape
        </h2>
        
        <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto">
          Implement customized IoT hardware, platforms, and data science solutions for the seamless management of your business.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#84CC16] text-black font-mono font-bold tracking-widest uppercase overflow-hidden w-full sm:w-auto"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-3">
              REQUEST A CONSULTATION
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <button className="group px-8 py-4 bg-transparent border border-white/20 text-white font-mono font-bold tracking-widest uppercase hover:bg-white/5 transition-colors w-full sm:w-auto">
            Explore IoT Platforms
          </button>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(dir, 'IoTPage.tsx'), pageCode);
fs.writeFileSync(path.join(compDir, 'IoTHero.tsx'), heroCode);
fs.writeFileSync(path.join(compDir, 'IoTPipeline.tsx'), pipelineCode);
fs.writeFileSync(path.join(compDir, 'IoTCapabilities.tsx'), capabilitiesCode);
fs.writeFileSync(path.join(compDir, 'IoTSpecs.tsx'), specsCode);
fs.writeFileSync(path.join(compDir, 'IoTApplications.tsx'), appsCode);
fs.writeFileSync(path.join(compDir, 'IoTCTA.tsx'), ctaCode);

console.log('IoT Page components generated successfully.');
