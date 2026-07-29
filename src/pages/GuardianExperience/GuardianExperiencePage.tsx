import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, Radio, Wind, Crosshair, MapPin, Zap, Shield, FileText, Lock, ChevronRight, Settings, Cpu } from 'lucide-react';

import droneRadarHeroImg from "@/imports/drone_radar_hero.png";
import rfDetectorImg from "@/imports/rf_detector_d360.jpg";
import c2DashboardUi from "@/imports/c2_dashboard_ui.png";

gsap.registerPlugin(ScrollTrigger);

const INTER = "'Inter', sans-serif";

export function GuardianExperiencePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSpecTab, setActiveSpecTab] = useState(0);
  const [activeScenarioTab, setActiveScenarioTab] = useState(0);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Fade up animations for all sections
      gsap.utils.toArray('.gsap-fade-up').forEach((elem: any) => {
        gsap.fromTo(elem,
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-[#05080D] text-white min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden pt-20 px-6">
        <div className="absolute inset-0 z-0">
          <img src={droneRadarHeroImg} alt="Guardian Smart Soldier Band" className="w-full h-full object-cover opacity-30 object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080D] via-transparent to-[#05080D]/80" />
        </div>
        <div className="relative z-10 max-w-[1200px] w-full mx-auto text-center flex flex-col items-center gsap-fade-up">
          <span className="text-[#2c411f] text-xs md:text-sm font-bold uppercase tracking-[4px] mb-4">Tactical Threat Detection Wearable</span>
          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-bold tracking-tighter leading-[1.1] mb-6">
            THE GUARDIAN
          </h1>
          <p className="text-lg md:text-2xl text-white/70 max-w-3xl mb-10 font-light leading-relaxed">
            Next-Gen Wearable Threat & Environmental Detection. Multi-Sensor LCD Wristlet with Drone, Fire, and Gas Tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-[#2c411f] text-black px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors">
              Request Tactical Review
            </button>
            <button className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-white/20 transition-colors">
              Contact Specialists
            </button>
          </div>
        </div>
        
        {/* Bottom Anchor Stat Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-lg border-t border-white/10 p-4 md:p-6 z-10">
          <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-3"><Radio className="w-5 h-5 text-[#2c411f]"/> <span className="font-semibold tracking-wide">2–3 km</span> <span className="text-white/50">Drone Detection</span></div>
            <div className="flex items-center gap-3"><Activity className="w-5 h-5 text-[#2c411f]"/> <span className="font-semibold tracking-wide">35m</span> <span className="text-white/50">Live Human Tracking</span></div>
            <div className="flex items-center gap-3"><Zap className="w-5 h-5 text-[#2c411f]"/> <span className="font-semibold tracking-wide">100m</span> <span className="text-white/50">Vehicle Sweep</span></div>
            <div className="flex items-center gap-3"><Wind className="w-5 h-5 text-[#2c411f]"/> <span className="font-semibold tracking-wide">70km</span> <span className="text-white/50">Storm ID</span></div>
          </div>
        </div>
      </section>

      {/* 2. CINEMATIC VIDEO SHOWCASE */}
      <section className="w-full py-32 px-6 bg-[#05080D]">
        <div className="max-w-[1400px] mx-auto gsap-fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Instant Slew-to-Cue Visual Telemetry</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">Leverages an LCD wristlet to instantly give users precise distance, directional arrows, and GPS tracking coordinates, removing verbal confusion.</p>
          </div>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
            {/* Placeholder for video */}
            <img src={rfDetectorImg} alt="Tactical Environment" className="w-full h-full object-cover filter brightness-50 group-hover:brightness-75 transition-all duration-700" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#2c411f]/20 backdrop-blur-sm border border-[#2c411f]/50 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                 <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-[#2c411f] border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
            {/* Glassmorphism UI Container Overlay */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:w-96 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-lg">
               <div className="flex items-center justify-between mb-2">
                 <span className="text-[#2c411f] text-xs font-bold uppercase tracking-wider">Target Acquired</span>
                 <span className="text-xs text-white/50 font-mono">2.4km</span>
               </div>
               <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mb-4"><div className="h-full bg-[#2c411f] w-3/4"></div></div>
               <p className="text-sm text-white/80 font-light">Hostile drone telemetry locked. Transmitting coordinates to squad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION OVERVIEW & SENSOR ARCHITECTURE */}
      <section className="w-full py-32 px-6 bg-black">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center gsap-fade-up">
          <div className="flex flex-col gap-8">
            <span className="text-[#2c411f] text-xs font-bold uppercase tracking-[4px]">Core Architecture</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">Omni-Threat<br/>Detection Spectrum</h2>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              The Guardian is an advanced multi-sensor smart soldier band engineered to enhance real-time situational awareness and threat monitoring for tactical forces.
            </p>
            <div className="flex gap-4 items-start bg-white/5 p-6 border border-white/10 rounded-lg">
               <Crosshair className="w-8 h-8 text-[#2c411f] shrink-0" />
               <div>
                 <h4 className="font-bold text-lg mb-2">Unified Sensor Array</h4>
                 <p className="text-white/60 text-sm leading-relaxed">
                   Replaces multiple isolated detectors by merging infrared/radar signals, drone warnings, vibration changes, and gunfire telemetry into one unified wearable system.
                 </p>
               </div>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] bg-[#05080D] border border-white/10 rounded-xl overflow-hidden p-8 flex items-center justify-center">
            {/* Diagram Placeholder */}
            <img src={c2DashboardUi} alt="Sensor Diagram" className="w-full h-full object-cover opacity-50 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2c411f]/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 4. CORE CAPABILITIES (Bento-Box Grid) */}
      <section className="w-full py-32 px-6 bg-[#05080D]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-12 gsap-fade-up">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#2c411f] text-xs font-bold uppercase tracking-[4px] mb-4 block">Bento Architecture</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Core Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Card 1 (Large) */}
            <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 rounded-xl flex flex-col justify-between group hover:border-[#2c411f]/50 transition-colors">
              <div className="flex justify-between items-start">
                <Crosshair className="w-10 h-10 text-[#2c411f]" />
                <span className="text-xs font-mono text-white/30">MODULE 01</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Precision Gunfire & Drones</h3>
                <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                  Intercepts incoming gunfire and tracks tactical drones within a 2 to 3 kilometers (2–3 km) operational envelope, displaying exact threat orientation via arrow indicators and calculated distance metrics.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 rounded-xl flex flex-col justify-between group hover:border-[#2c411f]/50 transition-colors">
              <Activity className="w-8 h-8 text-[#2c411f]" />
              <div>
                <h3 className="text-xl font-bold mb-2">Agile Vibration Tuning</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Adjustable threshold system distinguishes between a single crawling soldier and heavy vehicle movements up to 100 meters away.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 rounded-xl flex flex-col justify-between group hover:border-[#2c411f]/50 transition-colors">
              <Wind className="w-8 h-8 text-[#2c411f]" />
              <div>
                <h3 className="text-xl font-bold mb-2">Chemical & Environmental</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Detects Carbon Dioxide, Ammonia, Nitrogen Oxides, and Benzene, alongside customized radiation alerts.
                </p>
              </div>
            </div>

            {/* Card 4 (Wide) */}
            <div className="md:col-span-3 bg-gradient-to-r from-white/5 to-transparent border border-white/10 p-8 rounded-xl flex flex-col md:flex-row items-center gap-8 group hover:border-[#2c411f]/50 transition-colors">
              <MapPin className="w-12 h-12 text-[#2c411f] shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Human & Motion Matrix</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Identifies live persons up to 35 meters and sweeps for general motion up to 15 meters, providing unmatched close-quarters situational awareness in dense urban or jungle environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TACTICAL DEPLOYMENT VARIANTS */}
      <section className="w-full py-32 px-6 bg-black">
         <div className="max-w-[1400px] mx-auto gsap-fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Tactical Deployment Variants</h2>
              <p className="text-white/60">Scalable technology based on squad roles and mission parameters.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="border border-white/10 p-8 rounded-xl bg-[#05080D] flex flex-col">
                 <span className="text-white/40 text-xs font-bold uppercase tracking-[2px] mb-4">Tier 1</span>
                 <h3 className="text-2xl font-bold mb-6">Standard Base Configuration</h3>
                 <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">Basic wrist-worn multi-sensor framework designed for standard infantry integration and core threat detection.</p>
                 <div className="w-full h-[1px] bg-white/10 mb-6"></div>
                 <button className="text-[#2c411f] text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all">View Specs <ChevronRight className="w-4 h-4"/></button>
               </div>
               
               <div className="border border-[#2c411f]/30 p-8 rounded-xl bg-gradient-to-b from-[#2c411f]/5 to-[#05080D] flex flex-col relative transform md:-translate-y-4">
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2c411f] text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Deployed</div>
                 <span className="text-[#2c411f] text-xs font-bold uppercase tracking-[2px] mb-4">Tier 2</span>
                 <h3 className="text-2xl font-bold mb-6">Enhanced Variant</h3>
                 <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">Includes advanced motion mapping with specific directional arrows and GPS location mapping for reconnaissance.</p>
                 <div className="w-full h-[1px] bg-white/10 mb-6"></div>
                 <button className="text-[#2c411f] text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all">View Specs <ChevronRight className="w-4 h-4"/></button>
               </div>

               <div className="border border-white/10 p-8 rounded-xl bg-[#05080D] flex flex-col">
                 <span className="text-white/40 text-xs font-bold uppercase tracking-[2px] mb-4">Tier 3</span>
                 <h3 className="text-2xl font-bold mb-6">Advanced Variant</h3>
                 <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">Features extended live human detection up to 35 meters with precise target coordinates for special operations.</p>
                 <div className="w-full h-[1px] bg-white/10 mb-6"></div>
                 <button className="text-[#2c411f] text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all">View Specs <ChevronRight className="w-4 h-4"/></button>
               </div>
            </div>
         </div>
      </section>

      {/* 6. TECHNICAL SPECIFICATIONS (Tabbed Interface) */}
      <section className="w-full py-32 px-6 bg-[#05080D]">
        <div className="max-w-[1000px] mx-auto gsap-fade-up">
           <div className="mb-12">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Technical Specifications</h2>
             <p className="text-white/60">Strict performance parameters for defense engineers.</p>
           </div>
           
           <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
             {['Sensor Matrix', 'Tracking Ranges', 'Physical & Environmental'].map((tab, idx) => (
               <button 
                 key={tab}
                 onClick={() => setActiveSpecTab(idx)}
                 className={`px-6 py-2 text-sm font-medium transition-colors rounded-t-md ${activeSpecTab === idx ? 'text-[#2c411f] border-b-2 border-[#2c411f]' : 'text-white/50 hover:text-white'}`}
               >
                 {tab}
               </button>
             ))}
           </div>

           <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
             {activeSpecTab === 0 && (
               <table className="w-full text-left border-collapse">
                 <tbody>
                   <tr className="border-b border-white/5 hover:bg-white/5"><td className="py-4 px-6 font-medium text-white/70 w-1/3">Primary Sensor Architecture</td><td className="py-4 px-6 text-white/90">Combined network of Motion, Human, Vibration, Shooting, Radiation, Toxic Gas, Frequency Spectral, Infrared, and Radar detectors</td></tr>
                   <tr className="border-b border-white/5 hover:bg-white/5"><td className="py-4 px-6 font-medium text-white/70">Threat Visual Interface</td><td className="py-4 px-6 text-white/90">Integrated high-contrast LCD wristlet screen layout</td></tr>
                 </tbody>
               </table>
             )}
             {activeSpecTab === 1 && (
               <table className="w-full text-left border-collapse">
                 <tbody>
                   <tr className="border-b border-white/5 hover:bg-white/5"><td className="py-4 px-6 font-medium text-white/70 w-1/3">Drone Tracking</td><td className="py-4 px-6 text-white/90">2 to 3 kilometers (2–3 km) operational envelope</td></tr>
                   <tr className="border-b border-white/5 hover:bg-white/5"><td className="py-4 px-6 font-medium text-white/70">Live Human Tracking</td><td className="py-4 px-6 text-white/90">Up to 35 meters</td></tr>
                   <tr className="border-b border-white/5 hover:bg-white/5"><td className="py-4 px-6 font-medium text-white/70">General Motion Sweep</td><td className="py-4 px-6 text-white/90">Up to 15 meters</td></tr>
                   <tr className="border-b border-white/5 hover:bg-white/5"><td className="py-4 px-6 font-medium text-white/70">Weather Tracking</td><td className="py-4 px-6 text-white/90">Storm identification up to 70 kilometers (70 km)</td></tr>
                 </tbody>
               </table>
             )}
             {activeSpecTab === 2 && (
               <table className="w-full text-left border-collapse">
                 <tbody>
                   <tr className="border-b border-white/5 hover:bg-white/5"><td className="py-4 px-6 font-medium text-white/70 w-1/3">Physical Dimensions</td><td className="py-4 px-6 text-white/50 italic">[Pending Data]</td></tr>
                   <tr className="border-b border-white/5 hover:bg-white/5"><td className="py-4 px-6 font-medium text-white/70">Structural Weight</td><td className="py-4 px-6 text-white/50 italic">[Pending Data]</td></tr>
                   <tr className="border-b border-white/5 hover:bg-white/5"><td className="py-4 px-6 font-medium text-white/70">IP Rating</td><td className="py-4 px-6 text-white/50 italic">MIL-STD / IP68 [Pending Data]</td></tr>
                   <tr className="border-b border-white/5 hover:bg-white/5"><td className="py-4 px-6 font-medium text-white/70">Wireless Encryption</td><td className="py-4 px-6 text-white/50 italic">[Pending Data]</td></tr>
                 </tbody>
               </table>
             )}
           </div>
        </div>
      </section>

      {/* 7. OPERATIONAL SCENARIOS */}
      <section className="w-full py-32 px-6 bg-black">
        <div className="max-w-[1400px] mx-auto gsap-fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Operational Scenarios</h2>
            <p className="text-white/60">Mapping capabilities directly to ground combat applications.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              {[
                { title: 'Dismounted Infantry', icon: Shield },
                { title: 'Combat Scouts', icon: Crosshair },
                { title: 'Border Control', icon: MapPin },
                { title: 'Counter-Terrorism', icon: Zap }
              ].map((role, idx) => (
                <button 
                  key={role.title}
                  onClick={() => setActiveScenarioTab(idx)}
                  className={`flex items-center gap-4 p-6 rounded-lg border transition-all text-left ${activeScenarioTab === idx ? 'bg-[#2c411f]/10 border-[#2c411f]/50 text-white' : 'bg-[#05080D] border-white/10 text-white/50 hover:bg-white/5'}`}
                >
                  <role.icon className={`w-6 h-6 ${activeScenarioTab === idx ? 'text-[#2c411f]' : ''}`} />
                  <span className="font-bold tracking-wide">{role.title}</span>
                </button>
              ))}
            </div>
            
            <div className="w-full md:w-2/3 bg-gradient-to-br from-[#05080D] to-black border border-white/10 p-10 rounded-xl min-h-[300px] flex items-center">
              {activeScenarioTab === 0 && (
                <div>
                  <h3 className="text-3xl font-bold mb-4">Frontline Drone & Fire Warning</h3>
                  <p className="text-xl text-white/70 font-light leading-relaxed">
                    Warning frontlines of incoming tactical drones 3 km out, and tracking the exact point-of-origin arrow of sudden incoming sniper fire directly on the wrist display.
                  </p>
                </div>
              )}
              {activeScenarioTab === 1 && (
                <div>
                  <h3 className="text-3xl font-bold mb-4">Stealth Reconnaissance</h3>
                  <p className="text-xl text-white/70 font-light leading-relaxed">
                    Alerting a stealth scout patrol to hidden enemies up to 35m away without emitting acoustic or RF signatures that could compromise their position.
                  </p>
                </div>
              )}
              {activeScenarioTab === 2 && (
                <div>
                  <h3 className="text-3xl font-bold mb-4">Perimeter Breach Detection</h3>
                  <p className="text-xl text-white/70 font-light leading-relaxed">
                    Utilizing agile vibration tuning to instantly distinguish between a single crawling intruder and heavy vehicle movements up to 100 meters away along a border perimeter.
                  </p>
                </div>
              )}
              {activeScenarioTab === 3 && (
                <div>
                  <h3 className="text-3xl font-bold mb-4">Hazard & CBRN Navigation</h3>
                  <p className="text-xl text-white/70 font-light leading-relaxed">
                    Warning a squad of toxic gas leaks or radioactive hot zones instantly during urban clearance operations before they enter the lethal radius.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      

      {/* 9. FINAL CTA & CERTIFICATIONS */}
      <section className="w-full py-40 px-6 bg-[#2c411f] text-black text-center">
        <div className="max-w-[1000px] mx-auto gsap-fade-up">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">Equip Your Squads with Total Situational Awareness.</h2>
          <p className="text-black/70 text-lg mb-12 font-medium">Secure contact for Minimum Order Quantities (MOQ) and Factory Manufacturing Lead Times.</p>
          
          <button className="bg-black text-white px-10 py-5 font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black hover:border-black border border-transparent transition-all mb-20 shadow-2xl">
            Request Procurement Details
          </button>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60">
            <div className="flex flex-col items-center gap-2 font-bold uppercase tracking-widest text-xs">
              <Shield className="w-10 h-10 mb-2" />
              MIL-STD-810H Compliant
            </div>
            <div className="flex flex-col items-center gap-2 font-bold uppercase tracking-widest text-xs">
              <Zap className="w-10 h-10 mb-2" />
              Radiation Calibrated
            </div>
            <div className="flex flex-col items-center gap-2 font-bold uppercase tracking-widest text-xs">
              <Lock className="w-10 h-10 mb-2" />
              Encrypted Telemetry
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
