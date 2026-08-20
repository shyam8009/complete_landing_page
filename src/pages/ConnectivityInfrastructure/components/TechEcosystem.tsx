import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Server, ShieldAlert, Video } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ECOSYSTEM = [
  {
    id: "01",
    tag: "Tactical Automation . Real-Time Monitoring",
    title: "Internet of Things (IoT) for Defence",
    icon: Server,
    description: "Advanced defence technologies are transforming the operational landscape by automating complex defence workflows and responses. From port and marine infrastructure to government ecosystems, IoT is modernizing operations through connected sensors and data-driven decision-making.",
    features: [
      "Data Science integration to find new opportunities and fix hidden bugs within big data.",
      "Data Visualization services to assist in making the right choices through understanding and visualizing knowledge.",
      "Customized IoT platforms designed for the seamless management of your mission-critical business."
    ]
  },
  {
    id: "02",
    tag: "Serverless Architecture . Secure Migration",
    title: "Secure Cloud Services",
    icon: ShieldAlert,
    description: "High-level infrastructure understanding and optimized solution architecting delivered by a certified team of cloud solution architects. We ensure fast, timely cloud services resolution backed by expert technical support.",
    features: [
      "Seamless infrastructure migration and continuous compliance management.",
      "Cloud-native application development and Serverless architecture deployment.",
      "Advanced DevOps pipelines engineered for rapid, secure operational scaling."
    ]
  },
  {
    id: "03",
    tag: "Real-Time Telemetry . Cloud Broadcasting",
    title: "Video Streaming Services & Platforms",
    icon: Video,
    description: "Robust video streaming solutions that feature security tools, scalable delivery, and custom-branded environments. Our streaming architectures act as a powerful ingestion pipeline for real-time monitoring and analytics systems.",
    features: [
      "Real-time streaming analytics powered by Apache Kafka and strong stream processing engines.",
      "Integration with AWS Rekognition Video Service for low-latency, high-accuracy real-time video analysis.",
      "AWS Kinesis Video Streams integrating machine learning frameworks like Apache MxNet, TensorFlow, and OpenCV."
    ]
  }
];

export function TechEcosystem() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.horizontal-panel');
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + scrollWrapperRef.current?.offsetWidth,
        }
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen bg-black overflow-hidden border-t border-white/5 relative">
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }} 
      />
      
      <div ref={scrollWrapperRef} className="flex h-full w-[300vw]">
        {ECOSYSTEM.map((panel, index) => {
          const Icon = panel.icon;
          return (
            <div key={panel.id} className="horizontal-panel w-screen h-full flex flex-col justify-center px-4 lg:px-24 relative">
              
              <div className="absolute top-1/4 -translate-y-1/2 left-[5%] text-[20vw] font-bold text-white/[0.02] pointer-events-none select-none z-0">
                {panel.id}
              </div>

              <div className="max-w-4xl relative z-10 bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-2xl shadow-2xl">
                
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#84CC16]" />
                  <span className="text-[#84CC16] text-sm font-bold tracking-[2px] uppercase">
                    {panel.tag}
                  </span>
                </div>

                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold text-white uppercase tracking-tight">
                    {panel.title}
                  </h2>
                </div>

                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  {panel.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Key Features:</h4>
                  {panel.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#84CC16] mt-2 flex-shrink-0" />
                      <p className="text-white/70">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
