import React, { useLayoutEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChevronRight, Play, Shield, Crosshair, 
  Wifi, Target, Radio, ArrowRight, Zap, 
  Layers, Battery, Info
} from 'lucide-react';

// Assets
import heroGif from '../../assets/Drone-2.gif';
import cinematicVideo from '../../assets/Drone 2.mp4';
import post01Img from '../../assets/Drone 2 - Post01.jpg';
import post02Img from '../../assets/Drone 2 - Post02.jpg';
import post03Img from '../../assets/Drone 2 - Post03.jpg';
import post04Img from '../../assets/Drone 2 - Post04.jpg';

gsap.registerPlugin(ScrollTrigger);

export function SahanaFpvProductPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSpecTab, setActiveSpecTab] = useState(0);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Fade-up elements
      gsap.utils.toArray('.gsap-fade-up').forEach((el: any) => {
        gsap.fromTo(el, 
          { y: 50, opacity: 0 },
          { 
            y: 0, opacity: 1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
      
      // Horizontal slide elements (right)
      gsap.utils.toArray('.gsap-slide-right').forEach((el: any) => {
        gsap.fromTo(el, 
          { x: -50, opacity: 0 },
          { 
            x: 0, opacity: 1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Video scale effect
      gsap.fromTo('.gsap-video-scale',
        { scale: 0.95, opacity: 0.5, borderRadius: '2rem' },
        {
          scale: 1, opacity: 1, borderRadius: '0rem',
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.gsap-video-scale',
            start: "top 90%",
            end: "top 30%",
            scrub: 1
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-[#05080D] text-white overflow-hidden" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-end pt-32 pb-24 px-6 md:px-12 bg-black overflow-hidden">
        {/* Isolated product GIF serving as Hero background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80">
           <img 
              src={heroGif} 
              alt="Sahana FPV Drone Buddy rotating" 
              className="w-full max-w-[1200px] object-contain drop-shadow-[0_20px_50px_rgba(0,229,255,0.15)]"
           />
        </div>
        
        {/* Subtle gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05080D] via-transparent to-transparent opacity-80" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto gsap-fade-up">
          <span className="text-[#3C5929] text-sm md:text-base font-bold uppercase tracking-[3px] mb-4 block">
            Drone Systems / Electronic Warfare
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-4 leading-[0.9]">
            Sahana FPV <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Drone Buddy</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10 font-light">
            Tactical precision and real-time aerial surveillance.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <button className="bg-[#3C5929] text-black px-8 py-4 font-bold text-sm tracking-wider uppercase hover:bg-white transition-colors flex items-center gap-2">
              Request Technical Specs <ChevronRight className="w-4 h-4" />
            </button>
            <button className="border border-white/20 hover:border-white hover:bg-white hover:text-black text-white px-8 py-4 font-bold text-sm tracking-wider uppercase transition-all flex items-center gap-2">
              Contact Drone Systems <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Anchor Stat Bar */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto border-t border-white/10 pt-8 mt-auto hidden md:flex flex-wrap items-center justify-between gap-8 gsap-fade-up">
          {[
            { label: "Payload Capacity", value: "Up to 12 kg" },
            { label: "Maximum Speed", value: "180 kmph" },
            { label: "Flight Range", value: "Up to 40 km" },
            { label: "Communication", value: "Proxy Channel" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-white/40 text-[10px] uppercase tracking-[2px] mb-1">{stat.label}</span>
              <span className="text-white font-bold text-lg">{stat.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. CINEMATIC VIDEO & FLIGHT SHOWCASE */}
      <section className="w-full py-24 bg-[#05080D]">
        <div className="max-w-[1600px] mx-auto px-6 mb-12 gsap-fade-up">
           <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">High-Speed Aerial Oversight</h2>
           <p className="text-white/60 text-lg max-w-3xl">
             Engineered for tactical precision, offering real-time aerial surveillance with a high-definition FPV system in challenging, interference-heavy environments.
           </p>
        </div>
        <div className="w-full max-w-[1800px] mx-auto px-6">
          <div className="relative w-full aspect-video bg-black/50 overflow-hidden gsap-video-scale border border-white/10">
            <video 
              src={cinematicVideo}
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover opacity-90"
            />
            {/* Glassmorphism decorative overlay */}
            <div className="absolute bottom-8 left-8 backdrop-blur-md bg-black/40 border border-white/10 p-6 rounded-lg hidden md:block">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-2 h-2 rounded-full bg-[#3C5929] animate-pulse" />
                 <span className="text-[#3C5929] font-mono text-sm tracking-wider uppercase">Active Telemetry</span>
               </div>
               <p className="text-white/80 font-mono text-xs">360-DEGREE ROTATION HIGHLIGHTING<br/>CARBON FIBER CHASSIS & MOTOR MOUNTS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION OVERVIEW & ELECTRONIC WARFARE */}
      <section className="w-full py-32 px-6 bg-black border-y border-white/5">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 gsap-slide-right">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Secure Operations in Challenging Environments
            </h2>
            <p className="text-xl text-white/70 font-light mb-8 leading-relaxed">
              The Drone Buddy features a lightweight, durable frame that ensures resilience in challenging environments, positioned as an essential tool for reconnaissance, training, and field operations.
            </p>
            <div className="bg-[#3C5929]/5 border border-[#3C5929]/20 p-6 rounded-lg flex items-start gap-4">
              <Shield className="w-8 h-8 text-[#3C5929] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2">Interference-Resistant "Proxy" Channel</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Employs a proprietary secure communications architecture for secure operations, alongside on-demand video across multiple GHz bands (1.2–3.5 GHz) to bypass active electronic jamming.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative gsap-fade-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3C5929]/20 to-transparent blur-3xl opacity-30" />
            <img 
              src={post01Img} 
              alt="Drone GPS and Antenna macro shot" 
              className="w-full rounded-2xl border border-white/10 relative z-10"
            />
          </div>
        </div>
      </section>

      {/* 4. CORE CAPABILITIES (BENTO-BOX) */}
      <section className="w-full py-32 px-6 bg-[#05080D]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 gsap-fade-up">
            <span className="text-[#3C5929] text-sm font-bold uppercase tracking-[3px] mb-2 block">System Architecture</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Core Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
            {/* Card 1: The Flight Stack (spans 2 cols on tablet/desktop) */}
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden border border-white/10 group gsap-fade-up">
              <img src={post02Img} alt="Flight Stack" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <Target className="w-8 h-8 text-[#3C5929] mb-4" />
                <h3 className="text-2xl font-bold mb-2">The Flight Stack</h3>
                <p className="text-white/70 max-w-lg">High-definition FPV system for real-time video, with optional thermal imaging integration available for nighttime reconnaissance.</p>
              </div>
            </div>

            {/* Card 2: Frame & Engineering */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group gsap-fade-up" style={{ transitionDelay: '100ms' }}>
              <img src={post03Img} alt="Carbon Fiber Frame" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <Layers className="w-8 h-8 text-[#3C5929] mb-4" />
                <h3 className="text-xl font-bold mb-2">Frame & Engineering</h3>
                <p className="text-white/70 text-sm">Scalable platform built across three distinct frame sizes (10", 13", 15") to accommodate variable payload and speed requirements.</p>
              </div>
            </div>

            {/* Card 3: Power & Connectivity (Spans full width on bottom) */}
            <div className="md:col-span-3 relative rounded-2xl overflow-hidden border border-white/10 group gsap-fade-up" style={{ transitionDelay: '200ms' }}>
              <img src={post04Img} alt="Power and Battery" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col md:flex-row items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <Battery className="w-8 h-8 text-[#3C5929] mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Power & Connectivity</h3>
                  <p className="text-white/70">Equipped with high-capacity LiPo 6s/8s battery configurations and available with Fiber Optics Pool integration for tethered continuous operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONFIGURABLE PLATFORM TIERS */}
      <section className="w-full py-32 px-6 bg-black border-y border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20 gsap-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Configurable Platform Tiers</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Select the precise model for your mission profiles, ranging from high-endurance scouting to high-speed heavy lifting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* BUDDY-10 */}
            <div className="bg-[#05080D] border border-white/10 rounded-xl p-8 hover:border-white/30 transition-all duration-300 relative gsap-fade-up">
               <h3 className="text-3xl font-bold mb-2 text-white">BUDDY-10</h3>
               <p className="text-[#3C5929] font-medium mb-8">High-Endurance Scout</p>
               
               <ul className="space-y-6">
                 <li>
                   <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">Frame Size</span>
                   <span className="font-mono text-lg">10-inch frame</span>
                 </li>
                 <li>
                   <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">Max Speed</span>
                   <span className="font-mono text-lg">130 kmph</span>
                 </li>
                 <li>
                   <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">Payload</span>
                   <span className="font-mono text-lg">Up to 3 kg</span>
                 </li>
                 <li>
                   <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">Range</span>
                   <span className="font-mono text-lg">Up to 40 km</span>
                 </li>
               </ul>
            </div>

            {/* BUDDY-13 */}
            <div className="bg-[#3C5929]/5 border border-[#3C5929]/30 rounded-xl p-8 hover:border-[#3C5929] transition-all duration-300 relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(0,229,255,0.1)] gsap-fade-up" style={{ transitionDelay: '100ms' }}>
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3C5929] text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Deployed</div>
               <h3 className="text-3xl font-bold mb-2 text-white">BUDDY-13</h3>
               <p className="text-[#3C5929] font-medium mb-8">Tactical Medium-Lift</p>
               
               <ul className="space-y-6">
                 <li>
                   <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">Frame Size</span>
                   <span className="font-mono text-lg">13-inch frame</span>
                 </li>
                 <li>
                   <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">Max Speed</span>
                   <span className="font-mono text-lg">100 kmph</span>
                 </li>
                 <li>
                   <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">Payload</span>
                   <span className="font-mono text-lg">Up to 5 kg</span>
                 </li>
                 <li>
                   <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">Range</span>
                   <span className="font-mono text-lg">20km (5kg) / 30km (3kg)</span>
                 </li>
               </ul>
            </div>

            {/* BUDDY-15 */}
            <div className="bg-[#05080D] border border-white/10 rounded-xl p-8 hover:border-white/30 transition-all duration-300 relative gsap-fade-up" style={{ transitionDelay: '200ms' }}>
               <h3 className="text-3xl font-bold mb-2 text-white">BUDDY-15</h3>
               <p className="text-[#3C5929] font-medium mb-8">Heavy-Lift / High-Speed</p>
               
               <ul className="space-y-6">
                 <li>
                   <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">Frame Size</span>
                   <span className="font-mono text-lg">15-inch frame</span>
                 </li>
                 <li>
                   <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">Max Speed</span>
                   <span className="font-mono text-lg">180 kmph</span>
                 </li>
                 <li>
                   <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">Payload</span>
                   <span className="font-mono text-lg">Up to 12 kg</span>
                 </li>
                 <li>
                   <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">Range</span>
                   <span className="font-mono text-lg">20 km</span>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL SPECIFICATIONS */}
      <section className="w-full py-32 px-6 bg-[#05080D]">
        <div className="max-w-[1400px] mx-auto gsap-fade-up">
           <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
             <div>
               <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Technical Specifications</h2>
               <p className="text-white/60">Aerospace engineering parameters and operational data.</p>
             </div>
             <div className="flex gap-2 bg-white/5 p-1 rounded-lg border border-white/10 self-start">
                <button 
                  onClick={() => setActiveSpecTab(0)}
                  className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${activeSpecTab === 0 ? 'bg-[#3C5929] text-black' : 'text-white/60 hover:text-white'}`}
                >
                  Aerospace
                </button>
                <button 
                  onClick={() => setActiveSpecTab(1)}
                  className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${activeSpecTab === 1 ? 'bg-[#3C5929] text-black' : 'text-white/60 hover:text-white'}`}
                >
                  Electrical
                </button>
             </div>
           </div>

           <div className="bg-black/50 border border-white/10 rounded-xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {activeSpecTab === 0 && (
                    <>
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-6 px-6 md:px-8 text-white/60 font-medium w-1/3">Cruising Speed</td>
                        <td className="py-6 px-6 md:px-8 text-white font-mono">60–80 kmph (BUDDY-10, 13) / 140–160 kmph (BUDDY-15)</td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-6 px-6 md:px-8 text-white/60 font-medium">Communication Channel</td>
                        <td className="py-6 px-6 md:px-8 text-white font-mono">Interference-resistant "Proxy"</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="py-6 px-6 md:px-8 text-white/60 font-medium">Video Transmission</td>
                        <td className="py-6 px-6 md:px-8 text-white font-mono">1.2, 1.5, 1.8, 2, 3–3.5 GHz</td>
                      </tr>
                    </>
                  )}
                  {activeSpecTab === 1 && (
                    <>
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-6 px-6 md:px-8 text-white/60 font-medium w-1/3">Battery Spec (BUDDY-10)</td>
                        <td className="py-6 px-6 md:px-8 text-white font-mono">LiPo 6s 9000 mAh HV</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="py-6 px-6 md:px-8 text-white/60 font-medium">Battery Spec (BUDDY-13 / 15)</td>
                        <td className="py-6 px-6 md:px-8 text-white font-mono">LiPo 8s 22000 mAh</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
           </div>
           <p className="text-white/30 flex items-center gap-2 mt-4 text-xs">
             <Info className="w-3 h-3" /> Note: physical dimensions, total system weight, exact flight endurance times, IP ratings, and operating temperatures pending.
           </p>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="w-full py-32 px-6 bg-[#3C5929] text-black">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center gsap-fade-up">
           <div>
             <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6">Deploy the <br/>FPV Drone Buddy</h2>
             <p className="text-xl font-medium mb-8 max-w-lg opacity-80">
               Equip your tactical units with agile, high-speed aerial surveillance. Contact our defense sales division for Lead Time and Warranty options.
             </p>
             <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-sm border-2 border-black px-6 py-3">
                  <Shield className="w-5 h-5" /> MIL-STD Compliant
                </div>
             </div>
           </div>
           
           <div className="bg-black p-8 md:p-12 rounded-2xl text-white">
             <h3 className="text-2xl font-bold mb-6">Secure Contact Form</h3>
             <form className="space-y-4" onSubmit={e => e.preventDefault()}>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-xs uppercase tracking-wider text-white/40 mb-2">First Name</label>
                   <input type="text" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#3C5929] transition-colors" />
                 </div>
                 <div>
                   <label className="block text-xs uppercase tracking-wider text-white/40 mb-2">Last Name</label>
                   <input type="text" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#3C5929] transition-colors" />
                 </div>
               </div>
               <div>
                 <label className="block text-xs uppercase tracking-wider text-white/40 mb-2">Organization / Department</label>
                 <input type="text" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#3C5929] transition-colors" />
               </div>
               <div>
                 <label className="block text-xs uppercase tracking-wider text-white/40 mb-2">Official Email Address</label>
                 <input type="email" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#3C5929] transition-colors" />
               </div>
               <button className="w-full bg-[#3C5929] text-black font-bold uppercase tracking-wider py-4 rounded hover:bg-white transition-colors mt-4">
                 Request Procurement Details
               </button>
             </form>
           </div>
        </div>
      </section>

    </div>
  );
}
