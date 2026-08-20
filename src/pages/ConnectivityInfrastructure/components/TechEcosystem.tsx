import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { TechCTA } from '@/components/TechCTA';

import bgGrid from '@/imports/spear_cad_blueprint.png';
import imgIoT from '@/imports/innovation_2.jpg';
import imgCloud from '@/imports/digital_twin.jpg';
import imgStream from '@/imports/slider_2.jpg';

gsap.registerPlugin(ScrollTrigger);

const techData = [
  {
    tag: "Tactical Automation . Real-Time Monitoring",
    title: "Internet of Things (IoT) for Defence",
    desc: "Advanced defence technologies are transforming the operational landscape by automating complex defence workflows and responses. From port and marine infrastructure to government ecosystems, IoT is modernizing operations through connected sensors and data-driven decision-making.",
    features: [
      "Data Science integration to find new opportunities and fix hidden bugs within big data.",
      "Data Visualization services to assist in making the right choices through understanding and visualizing knowledge.",
      "Customized IoT platforms designed for the seamless management of your mission-critical business."
    ],
    img: imgIoT
  },
  {
    tag: "Serverless Architecture . Secure Migration",
    title: "Secure Cloud Services",
    desc: "High-level infrastructure understanding and optimized solution architecting delivered by a certified team of cloud solution architects. We ensure fast, timely cloud services resolution backed by expert technical support.",
    features: [
      "Seamless infrastructure migration and continuous compliance management.",
      "Cloud-native application development and Serverless architecture deployment.",
      "Advanced DevOps pipelines engineered for rapid, secure operational scaling."
    ],
    img: imgCloud
  },
  {
    tag: "Real-Time Telemetry . Cloud Broadcasting",
    title: "Video Streaming Services & Platforms",
    desc: "Robust video streaming solutions that feature security tools, scalable delivery, and custom-branded environments. Our streaming architectures act as a powerful ingestion pipeline for real-time monitoring and analytics systems.",
    features: [
      "Real-time streaming analytics powered by Apache Kafka and strong stream processing engines.",
      "Integration with AWS Rekognition Video Service for low-latency, high-accuracy real-time video analysis.",
      "AWS Kinesis Video Streams integrating machine learning frameworks like Apache MxNet, TensorFlow, and OpenCV."
    ],
    img: imgStream
  }
];

export function TechEcosystem() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current || techData.length === 0) return;
    const getScrollDist = () => trackRef.current ? trackRef.current.scrollWidth - window.innerWidth : 0;

    ScrollTrigger.create({
      trigger: scrollContainer.current,
      start: "top top",
      end: () => "+=" + getScrollDist(),
      pin: true,
      animation: gsap.to(trackRef.current, {
        x: () => -getScrollDist(),
        ease: "none"
      }),
      scrub: 1,
      invalidateOnRefresh: true,
    });
  }, { scope: scrollContainer });

  return (
    <div className="font-['Inter',sans-serif]">
      {/* HORIZONTAL ECOSYSTEM TRACK */}
      <section ref={scrollContainer} className="relative w-full h-screen overflow-hidden bg-[#050505]">
        
        {/* BACKGROUND IMAGE (Fixed, z-0) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={bgGrid} 
            alt="Connectivity Network Schematic" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.95)_100%)]" />
        </div>

        {/* TOP HEADER (Fixed, z-20) */}
        <div className="absolute top-8 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <span className="text-[#84CC16] font-mono font-bold tracking-[0.2em] text-sm md:text-base uppercase">
            CONNECTIVITY & INFRASTRUCTURE
          </span>
        </div>

        {/* BOTTOM FOOTER (Fixed, z-20) */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <span className="text-white/40 font-mono tracking-widest text-xs uppercase animate-pulse">
            SCROLL TO EXPLORE
          </span>
        </div>

        {/* THE SLIDING TRACK (z-10) */}
        <div className="relative z-10 flex h-full items-center overflow-visible">
          <div ref={trackRef} className="flex flex-nowrap h-full items-center px-[5vw] md:px-[10vw] gap-12 md:gap-24">
            
            {techData.map((item, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center justify-center"
              >
                
                {/* THE GLASSMORPHISM CARD */}
                <div 
                  className="w-[90vw] max-w-[1100px] min-h-[500px] rounded-2xl mx-auto flex flex-col md:flex-row items-stretch overflow-hidden relative"
                  style={{ 
                    backgroundColor: 'rgba(8, 8, 8, 0.75)', 
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
                  }}
                >
                  
                  {/* HUD Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />

                  {/* Left Split (Image) */}
                  <div className="w-full md:w-1/2 min-h-[250px] md:min-h-full border-b md:border-b-0 md:border-r flex" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <div className="relative w-full h-full flex-1 bg-[#000]">
                      <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                    </div>
                  </div>
                  
                  {/* Right Split (Content) */}
                  <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-[#84CC16]" />
                      <span className="text-[#84CC16] font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white uppercase leading-[1.1]">
                      {item.title}
                    </h3>

                    <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6 font-light">
                      {item.desc}
                    </p>

                    <div className="space-y-4 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                      {item.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1 h-1 bg-[#84CC16] mt-2 rounded-full flex-shrink-0" />
                          <p className="text-sm text-white/50">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>
    </div>
  );
}

