const fs = require('fs');
const path = require('path');

const dir = 'src/pages/IoT';
const compDir = path.join(dir, 'components');

const pageCode = `import React, { useEffect } from 'react';
import { IoTHero } from './components/IoTHero';
import { IoTPipeline } from './components/IoTPipeline';
import { IoTCapabilities } from './components/IoTCapabilities';
import { IoTSpecs } from './components/IoTSpecs';
import { IoTApplications } from './components/IoTApplications';
import { IoTCTA } from './components/IoTCTA';

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
    <main className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-[#84CC16]/30">
      <IoTHero />
      <IoTPipeline />
      <IoTCapabilities />
      <IoTSpecs />
      <IoTApplications />
      <IoTCTA />
    </main>
  );
}
`;

const heroCode = `import React, { useRef, useLayoutEffect } from 'react';
import { ChevronRight, Network, Database } from 'lucide-react';
import gsap from 'gsap';
import { TechCTA } from '@/components/TechCTA';
// Replace with appropriate IoT video path
import heroBg from '@/imports/quantum_communication_intro_video.mp4'; 

const INTER = '"Inter", sans-serif';

export function IoTHero() {
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

  const scrollToPipeline = () => {
    const section = document.getElementById('pipeline-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-black flex items-center">
      {/* Background Video */}
      <video
        src={heroBg}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />
      
      {/* Overlays - Fade from black/90 on left to transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Content Container */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto pt-20 md:pt-0">
        <div className="max-w-3xl flex flex-col items-start text-left">
          
          {/* Eyebrow */}
          <div className="hero-element inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 md:mb-8">
            <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse shadow-[0_0_8px_#84CC16]" />
            <span className="text-[10px] md:text-xs font-bold tracking-[2px] text-white uppercase" style={{ fontFamily: INTER }}>
              DEFENCE DEEPTECH / CONNECTIVITY & INFRASTRUCTURE
            </span>
          </div>
          
          {/* Headline */}
          <h1 
            className="hero-element text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight"
            style={{ fontFamily: INTER }}
          >
            INTERNET OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">THINGS</span>
          </h1>
          
          {/* Subheadline */}
          <p className="hero-element text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
            Technology and devices that connect immeasurable folks within the world, working smarter with better connectivity. Adopt an IoT strategy to deliver higher services and redefine relationships with your clients, partners, and employees.
          </p>

          <div className="hero-element w-full sm:w-auto">
            <TechCTA 
              text="REQUEST A CONSULTATION" 
              onClick={scrollToPipeline}
            />
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 hero-element w-full">
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
    <section id="pipeline-section" ref={sectionRef} className="py-20 bg-[#050505] border-t border-white/5 relative overflow-hidden">
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

const capabilitiesCode = `import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Server, Shield } from 'lucide-react';
import imageRender from '@/imports/c2_dashboard_ui.png';

gsap.registerPlugin(ScrollTrigger);

export function IoTCapabilities() {
  const containerRef = useRef<HTMLElement>(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animate text elements
      gsap.fromTo(".cap-text",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );

      // Animate floating HUDs
      gsap.fromTo(".hud-stat",
        { x: 50, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#84CC16]/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Text Content */}
          <div className="flex-1 w-full">
            <div className="cap-text inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#84CC16]/10 border border-[#84CC16]/20 mb-8">
              <span className="text-[#84CC16] text-xs font-bold tracking-[3px] uppercase">
                SMART INFRASTRUCTURE
              </span>
            </div>
            
            <h2 className="cap-text text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 uppercase tracking-tight leading-[1.1]">
              Customized Hardware <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                & Total Automation.
              </span>
            </h2>
            
            <p className="cap-text text-white/60 text-lg leading-relaxed max-w-2xl mb-8">
              Companies looking forward to top-quality innovations are adopting the Internet of Things strategy to make higher services by understanding their client better. By deploying our customized IoT solution in your business, you can customize with our IOT services with an end-to-end solution.
            </p>
            <p className="cap-text text-white/60 text-lg leading-relaxed max-w-2xl">
              We guarantee total automation just in case of device-to-device interaction. Furthermore, our IOT platforms offer customized solutions for the seamless management of your business.
            </p>
          </div>

          {/* Right: Visual Render & HUDs */}
          <div className="flex-1 w-full relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl cap-text">
              <img 
                src={imageRender} 
                alt="IoT Infrastructure Dashboard" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 mix-blend-overlay" />
            </div>

            {/* Floating HUD 1 */}
            <div className="hud-stat absolute -left-8 lg:-left-16 top-12 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-lg flex items-center gap-4 shadow-xl z-20">
              <div className="p-2 bg-[#84CC16]/20 rounded-full border border-[#84CC16]/50">
                <Zap className="w-5 h-5 text-[#84CC16]" />
              </div>
              <div className="text-white font-mono text-sm tracking-wide uppercase">
                Wireless Communication<br/>& Cloud Computing
              </div>
            </div>

            {/* Floating HUD 2 */}
            <div className="hud-stat absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-lg flex items-center gap-4 shadow-xl z-20">
              <div className="p-2 bg-[#84CC16]/20 rounded-full border border-[#84CC16]/50">
                <Server className="w-5 h-5 text-[#84CC16]" />
              </div>
              <div className="text-white font-mono text-sm tracking-wide uppercase">
                Processing Speed<br/>& Light-Weight OS
              </div>
            </div>

            {/* Floating HUD 3 */}
            <div className="hud-stat absolute -left-4 lg:-left-12 bottom-12 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-lg flex items-center gap-4 shadow-xl z-20">
              <div className="p-2 bg-[#84CC16]/20 rounded-full border border-[#84CC16]/50">
                <Shield className="w-5 h-5 text-[#84CC16]" />
              </div>
              <div className="text-white font-mono text-sm tracking-wide uppercase">
                Small-Footprint<br/>Protocols
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
`;

const specsCode = `import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white text-black relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            CORE TECHNICAL CAPABILITIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, i) => (
            <div 
              key={i} 
              ref={el => cardsRef.current[i] = el}
              className="flex flex-col h-full bg-gray-50 border border-gray-200 p-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
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

const appsCode = `import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '@/imports/command_control_2.jpeg';
import img2 from '@/imports/rf_radar_hud.png';
import img3 from '@/imports/proxy/magnific_photorealistic-outdoor-fi_Piskn0l42C 1.jpeg';

gsap.registerPlugin(ScrollTrigger);

const APPLICATIONS = [
  {
    id: "01",
    label: "Defence & Government",
    scenario: "Transforming the operational landscape by automating complex defence workflows, and modernizing government infrastructure through real-time monitoring and data-driven decision-making.",
    image: img1
  },
  {
    id: "02",
    label: "Port, Marine & Manufacturing",
    scenario: "Revolutionizing port and marine infrastructure through connected sensors, and leading the manufacturing industry revolution where sensors transfer every byte of information.",
    image: img2
  },
  {
    id: "03",
    label: "Wearables & Healthcare",
    scenario: "Delivering custom-made and secure IoT wearable and Telehealth solutions, as the health care industry utilizes great services from the IOT trade.",
    image: img3
  }
];

export function IoTApplications() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-black relative">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            TACTICAL & COMMERCIAL<br />APPLICATIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPLICATIONS.map((app, index) => (
            <div 
              key={app.id} 
              ref={el => cardsRef.current[index] = el}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10"
            >
              {/* Background Image */}
              <img 
                src={app.image} 
                alt={app.label} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Neon Green Tint Hover Overlay */}
              <div className="absolute inset-0 bg-[#84CC16]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                  <span className="text-[#84CC16] font-mono text-sm tracking-widest font-bold mb-2 block">
                    {app.id}
                  </span>
                  <h3 className="text-2xl font-bold text-white uppercase leading-tight mb-3">
                    {app.label}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {app.scenario}
                  </p>
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

const ctaCode = `import React, { useRef, useLayoutEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function IoTCTA() {
  const containerRef = useRef<HTMLElement>(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".cta-text",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#84CC16]/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="cta-text text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Automate Your Operational Landscape
        </h2>
        
        <p className="cta-text text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto">
          Implement customized IoT hardware, platforms, and data science solutions for the seamless management of your business.
        </p>
        
        <div className="cta-text flex flex-col sm:flex-row items-center justify-center gap-6">
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

console.log('IoT components synced with ChatbotsVoice structure.');
