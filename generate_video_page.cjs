const fs = require('fs');
const path = require('path');

const dir = 'src/pages/VideoStreaming';
const compDir = path.join(dir, 'components');

if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
if (!fs.existsSync(compDir)) fs.mkdirSync(compDir, { recursive: true });

const pageCode = `import React, { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { PipelineSection } from './components/PipelineSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { SubsystemsSection } from './components/SubsystemsSection';
import { UseCasesSection } from './components/UseCasesSection';
import { ClosingSection } from './components/ClosingSection';

export function VideoStreamingPage() {
  useEffect(() => {
    document.title = "Video Streaming Services | Defence Deeptech";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Custom-tailored online-streaming solutions featuring wide hardware support for equipment like Sensible TV, streaming media receivers, tablets, and smartphones.");
    
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
import heroBg from '@/imports/Vision_Drone.mp4';

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

  const scrollToPipeline = () => {
    const section = document.getElementById('pipeline');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-[100dvh] max-md:landscape:min-h-[60vh] overflow-hidden bg-black flex flex-col">
      {/* Background Video */}
      <video
        src={heroBg}
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
            LIVE VIDEO <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500">
              STREAMING SERVICES
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="hero-element text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
            Custom-tailored online-streaming solutions featuring wide hardware support for equipment like Sensible TV, streaming media receivers, tablets, and smartphones. Delivering net content in real-time as events happen, much like live television broadcasts.
          </p>
          
          {/* CTA */}
          <div className="hero-element flex flex-wrap gap-6 items-center mb-6 md:mb-16">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-start w-full">
              <TechCTA onClick={scrollToPipeline}>
                REQUEST A CONSULTATION
                <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
              </TechCTA>
            </div>
          </div>
          
          {/* Quick Stats Block (Glassmorphic) */}
          <div className="hero-element flex flex-col md:flex-row gap-4 md:gap-8 p-6 rounded-lg mt-6 md:mt-12 border border-white/10 bg-white/5 backdrop-blur-xl max-w-fit">
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-white uppercase">Low Latency</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Real-Time Video Analysis</div>
            </div>
            <div className="hidden md:block w-px bg-white/20" /><div className="block md:hidden h-px w-full bg-white/20" />
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-white uppercase">Scalable Delivery</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Custom-Branded Platforms</div>
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
import { Database, Network, Cpu, Radio } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const NODES = [
  {
    id: "01",
    title: "INGEST",
    icon: Database,
    description: "Utilizing our streaming solutions as an ingestion pipeline for usage data directly from websites or mobile applications."
  },
  {
    id: "02",
    title: "PROCESS",
    icon: Network,
    description: "Producing scalable and robust data with the real-time streaming data broker Apache Kafka and a strong information stream process engine."
  },
  {
    id: "03",
    title: "ANALYZE",
    icon: Cpu,
    description: "Integrating AWS Rekognition Video Services to perform real-time video analysis, building applications that act with low latency and high accuracy."
  },
  {
    id: "04",
    title: "DISTRIBUTE",
    icon: Radio,
    description: "Utilizing a worldwide content delivery network (CDN) system that distributes high-quality video content using their own servers."
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
import { Tv, PlayCircle, BarChart } from 'lucide-react';
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
    <section ref={sectionRef} className="section-padding bg-[#020202] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="flex flex-col">
            <div className="fade-in-left inline-flex items-center gap-2 mb-6">
              <span className="text-[#84CC16] text-sm font-bold tracking-[3px] uppercase">
                REAL-TIME BROADCASTING
              </span>
            </div>
            
            <h2 className="fade-in-left text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-tight leading-[1.1]">
              Scalable Delivery & <br/>High-Quality Streams.
            </h2>
            
            <div className="fade-in-left space-y-6 text-white/60 text-lg leading-relaxed max-w-xl">
              <p>
                SoftVan provides robust live streaming services with a reliable infrastructure and a high-performance content delivery network (CDN) to achieve exceptional video quality. Instead of managing complicated infrastructure, our video solutions let you focus entirely on your content to give viewers a great user experience.
              </p>
              <p>
                Furthermore, our native cloud broadcasting solutions make it remarkably easy to feed information directly to multiple real-time monitoring and analytics systems, or to a data warehouse for offline processing.
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
              alt="Video Streaming Dashboard" 
              className="relative z-10 w-full object-contain rounded-xl border border-white/10 drop-shadow-[0_0_50px_rgba(132,204,22,0.1)] hover:scale-105 transition-transform duration-700"
            />
            
            {/* HUD Callouts */}
            <div className="hud-element absolute top-[15%] -left-[10%] bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl hover:border-[#84CC16]/50 transition-colors cursor-default">
              <div className="flex items-center gap-3">
                <Tv className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm tracking-wide">Fully White-Label Environments</div>
                </div>
              </div>
            </div>

            <div className="hud-element absolute bottom-[25%] -left-[5%] bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl hover:border-[#84CC16]/50 transition-colors cursor-default">
              <div className="flex items-center gap-3">
                <PlayCircle className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm tracking-wide">Professional-Grade Streaming Scale</div>
                </div>
              </div>
            </div>

            <div className="hud-element absolute top-[40%] -right-[5%] bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl hover:border-[#84CC16]/50 transition-colors cursor-default">
              <div className="flex items-center gap-3">
                <BarChart className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm tracking-wide">Prophetic Analytics Generation</div>
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
      id: 'sub-wowza',
      type: 'PLATFORM ARCHITECTURE',
      title: 'WOWZA Engine & OTT',
      description: 'Customizable streaming server software services utilizing the WOWZA Video Streaming Engine to build and deliver professional-grade streaming at any scale. We also deliver over-the-top (OTT) content solutions without the involvement of a multiple-system operator (MSO).',
      image: img1,
      statusBadge: 'DIRECT OTT',
      specs: [
        { label: 'Scale', value: 'Professional-Grade' },
        { label: 'Delivery', value: 'Direct OTT' }
      ]
    },
    {
      id: 'sub-aws',
      type: 'CLOUD INTEGRATION',
      title: 'AWS Elemental Services',
      description: 'Comprehensive managed video infrastructure provided through AWS Elemental Media Convert, MediaLive, MediaPackage, and MediaStore.',
      image: img2,
      statusBadge: 'MANAGED INFRASTRUCTURE',
      specs: [
        { label: 'Focus', value: 'Content Creation' },
        { label: 'UX', value: 'Great Experience' }
      ]
    },
    {
      id: 'sub-ml',
      type: 'COMPUTER VISION',
      title: 'Kinesis & ML Integration',
      description: 'AWS Kinesis Video Streams utilizing analytics and machine learning (ML) to build computer vision applications through Amazon Rekognition Video and libraries like Apache MxNet, TensorFlow, and OpenCV.',
      image: img3,
      statusBadge: 'AI ANALYTICS',
      specs: [
        { label: 'Frameworks', value: 'TensorFlow & OpenCV' },
        { label: 'Analytics', value: 'Cost-Effective' }
      ]
    }
  ];

  return (
    <section className="bg-black section-padding border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
          Core Technical Capabilities
        </h2>
      </div>
      <InteractiveBlueprint tiers={tiers} defaultTier="sub-wowza" />
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
    label: "Entertainment & Outdoor Media"
  },
  {
    image: img2,
    label: "Strategic Analytics Tracking"
  },
  {
    image: img3,
    label: "Open Source Customization"
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
    <section ref={sectionRef} className="section-padding bg-black relative">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-16 uppercase tracking-tight text-center">
          Strategic & Commercial Applications
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
    <section className="section-padding bg-[#000000] border-t border-white/5 relative overflow-hidden flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <div className="mb-4">
          <span className="text-[#84CC16] font-mono text-sm tracking-widest uppercase">
            Deploy Scalable Video Streaming Platforms
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-12 uppercase tracking-tight leading-snug">
          Partner with us to integrate professional-grade streaming engines, AWS Elemental infrastructure, and real-time video analytics into your operational ecosystem.
        </h2>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <TechCTA>
            REQUEST A CONSULTATION
            <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
          </TechCTA>
          
          <a href="#" className="text-white/40 hover:text-white/80 text-sm transition-colors mt-2">
            Explore Streaming Architectures
          </a>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(dir, 'VideoStreamingPage.tsx'), pageCode);
fs.writeFileSync(path.join(compDir, 'HeroSection.tsx'), heroCode);
fs.writeFileSync(path.join(compDir, 'PipelineSection.tsx'), pipelineCode);
fs.writeFileSync(path.join(compDir, 'ValuePropositionSection.tsx'), valuePropCode);
fs.writeFileSync(path.join(compDir, 'SubsystemsSection.tsx'), subsystemsCode);
fs.writeFileSync(path.join(compDir, 'UseCasesSection.tsx'), useCasesCode);
fs.writeFileSync(path.join(compDir, 'ClosingSection.tsx'), closingCode);

console.log('VideoStreaming components generated successfully.');
