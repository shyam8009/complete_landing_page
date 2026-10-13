import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Pause, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { TechCTA } from '@/components/TechCTA';

gsap.registerPlugin(ScrollTrigger);

const SCROLL_LENGTH = '600%'; // Restored for ample scroll space with slow-mo

export function VideoScrollHero({ videoSrc }: { videoSrc: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Overlay copy refs
  const mottoRef     = useRef<HTMLDivElement>(null);
  const ctaRef       = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
      if (mottoRef.current) {
        mottoRef.current.style.opacity = '1';
        mottoRef.current.style.filter = 'none';
      }
      return;
    }

    const section = sectionRef.current;
    const container = containerRef.current;
    if (!container) return;
    const video = videoRef.current;
    if (!section || !video) return;

    let autoScrollTween: gsap.core.Tween | null = null;
    let userInterrupted = false;

    const onUserInteraction = () => {
      userInterrupted = true;
      if (autoScrollTween) {
        autoScrollTween.kill();
        autoScrollTween = null;
      }
    };

    window.addEventListener('wheel', onUserInteraction, { passive: true });
    window.addEventListener('touchstart', onUserInteraction, { passive: true });

    const gsapCtx = gsap.context(() => {

      // ── GSAP overlay timeline (synced to scroll progress) ────────────
      function setupOverlays() {
        const stConfig = {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${SCROLL_LENGTH}`,
          scrub: 1,
        };

        const tl = gsap.timeline({ scrollTrigger: stConfig });

        // MOTTO (सतर्कता रक्षति राष्ट्रम्): 6th to 17th second only
        tl.fromTo(mottoRef.current,
          { opacity: 0, x: -50, filter: 'blur(8px)' },
          { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.05, ease: 'power2.out' },
          0.16
        )
        .to(mottoRef.current,
          { opacity: 0, x: -30, filter: 'blur(8px)', duration: 0.04, ease: 'power2.in' },
          0.42
        );

        // RESOLVE 73–100%
        tl.fromTo(ctaRef.current,
          { opacity: 0, y: 56 },
          { opacity: 1, y: 0, duration: 0.15 }, 0.73);
      }

      const initScrollTrigger = () => {
        const duration = video.duration || 30; // fallback if NaN
        const videoProxy = { currentTime: 0 };
        
        let totalTimelineDuration = duration;
        if (duration > 19) {
          const seg2End = Math.min(26, duration);
          const seg2Time = seg2End - 19;
          totalTimelineDuration += (seg2Time * 2.5) - seg2Time;
        }

        const stConfig = {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${SCROLL_LENGTH}`,
          // pin: true, // Replaced with native CSS sticky layout for better mobile performance
          scrub: 1, // 1 second smoothing
          onUpdate: (self) => {
            const currentT = videoProxy.currentTime;

            // Direct animation sync for Motto text ("सतर्कता रक्षति राष्ट्रम्"): 6s to 17s
            if (mottoRef.current) {
              if (currentT < 5.8 || currentT > 17.5) {
                mottoRef.current.style.opacity = '0';
                mottoRef.current.style.transform = 'translateX(-40px)';
                mottoRef.current.style.filter = 'blur(8px)';
              } else if (currentT >= 5.8 && currentT < 7.2) {
                const t = (currentT - 5.8) / 1.4;
                const ease = t * t * (3 - 2 * t);
                mottoRef.current.style.opacity = String(ease);
                mottoRef.current.style.transform = `translateX(${(-40 * (1 - ease)).toFixed(1)}px)`;
                mottoRef.current.style.filter = `blur(${(8 * (1 - ease)).toFixed(1)}px)`;
              } else if (currentT >= 7.2 && currentT <= 15.5) {
                mottoRef.current.style.opacity = '1';
                mottoRef.current.style.transform = 'translateX(0px)';
                mottoRef.current.style.filter = 'blur(0px)';
              } else if (currentT > 15.5 && currentT <= 17.5) {
                const t = (17.5 - currentT) / 2.0;
                const ease = t * t * (3 - 2 * t);
                mottoRef.current.style.opacity = String(ease);
                mottoRef.current.style.transform = `translateX(${(-30 * (1 - ease)).toFixed(1)}px)`;
                mottoRef.current.style.filter = `blur(${(8 * (1 - ease)).toFixed(1)}px)`;
              }
            }
            
            // Reset interruption flag if they scrub back before the auto-scroll zone
            if (currentT < 7.5) {
              userInterrupted = false;
            }

            // Auto-scroll logic: 8s to 14s
            if (currentT >= 8 && currentT < 14 && self.direction === 1 && !autoScrollTween && !userInterrupted) {
              const targetProgress = 14 / totalTimelineDuration;
              
              const targetY = self.start + (self.end - self.start) * targetProgress;
              const scrollObj = { y: window.scrollY };
              
              autoScrollTween = gsap.to(scrollObj, {
                y: targetY,
                duration: 6, // 14s - 8s = 6 seconds real time
                ease: 'none',
                onUpdate: () => window.scrollTo(0, scrollObj.y),
                onComplete: () => { autoScrollTween = null; }
              });
            }
          }
        };

        const masterTl = gsap.timeline({ scrollTrigger: stConfig });

        // Segment 1: 0s to 19s (Normal speed, 1:1 ratio)
        masterTl.to(videoProxy, {
          currentTime: Math.min(19, duration),
          duration: Math.min(19, duration),
          ease: 'none',
          onUpdate: () => { video.currentTime = videoProxy.currentTime; }
        });

        // Segment 2: 19s to 26s (Slow motion - 2.5x duration stretch)
        if (duration > 19) {
          const seg2End = Math.min(26, duration);
          const seg2Time = seg2End - 19;
          masterTl.to(videoProxy, {
            currentTime: seg2End,
            duration: seg2Time * 2.5, // Stretch!
            ease: 'none',
            onUpdate: () => { video.currentTime = videoProxy.currentTime; }
          });
        }

        // Segment 3: 26s to end (Normal speed)
        if (duration > 26) {
          masterTl.to(videoProxy, {
            currentTime: duration,
            duration: duration - 26,
            ease: 'none',
            onUpdate: () => { video.currentTime = videoProxy.currentTime; }
          });
        }
        
        setupOverlays();
      };

      if (video.readyState >= 1) { // HAVE_METADATA or higher
        initScrollTrigger();
      } else {
        video.addEventListener('loadedmetadata', initScrollTrigger);
      }
    }, section);

    return () => {
      window.removeEventListener('wheel', onUserInteraction);
      window.removeEventListener('touchstart', onUserInteraction);
      gsapCtx.revert();
    };
  }, [videoSrc]);

  return (
    <div ref={containerRef} className="hero-scroll-container relative h-[600vh]">
      <section
        ref={sectionRef}
        className="sticky top-0 w-full h-screen bg-black overflow-hidden"
      >
        <video
          ref={videoRef}
          src={videoSrc}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        />
        {/* ── Bottom-weighted scrim so copy stays legible across all beats ── */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.10) 45%, transparent 100%)',
        }} />

        {/* ── National Defence Motto (Upper Bottom Left) ── */}
        <div 
          ref={mottoRef}
          className="absolute z-20 pointer-events-none flex flex-col items-start text-left select-none"
          style={{
            bottom: 'clamp(5.5rem, 18vh, 12rem)',
            left: 'clamp(1.5rem, 5vw, 4rem)',
            opacity: 0,
          }}
        >
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wide text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            सतर्कता रक्षति राष्ट्रम्
          </h2>
        </div>

        {/* RESOLVE beat */}
        <div style={{ ...OL_BASE, justifyContent: 'flex-end', paddingBottom: '12vh', pointerEvents: 'auto' }}>
          <div ref={ctaRef} style={{
            display: 'flex', flexWrap: 'wrap', gap: '1.25rem',
            justifyContent: 'center', opacity: 0, transform: 'translateY(56px)',
          }}>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
                <TechCTA>
                DISCOVER FPV SYSTEM
              </TechCTA>
                <TechCTA onClick={() => window.open('/assets/Sahana_Defence_Corporate_Deck.pdf', '_blank')}>
                  DOWNLOAD CAPABILITY BROCHURE
                </TechCTA>
              </div>
              <TechCTA className="border border-white/30 hover:bg-white/10 hover:border-white/50">
                VIEW TECHNICAL SPECS
              </TechCTA>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Shared style objects ────────────────────────────────────────────────────────
const OL_BASE: React.CSSProperties = {
  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
  zIndex: 20, pointerEvents: 'none',
  display: 'flex', flexDirection: 'column',
  alignItems: 'center', justifyContent: 'center', padding: 'clamp(1rem, 3vw, 2rem)',
};



