import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SCROLL_LENGTH = '600%'; // Ample scroll space
const TOTAL_FRAMES = 265; // Exact frame count extracted

export function CanvasScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [framesLoaded, setFramesLoaded] = useState(0);
  
  // Overlay copy refs
  const textEWRef    = useRef<HTMLParagraphElement>(null);
  const textTitleRef = useRef<HTMLHeadingElement>(null);
  const textSpeedRef = useRef<HTMLDivElement>(null);
  const textSpeedLabelRef = useRef<HTMLDivElement>(null);
  const spec1Ref     = useRef<HTMLDivElement>(null);
  const spec2Ref     = useRef<HTMLDivElement>(null);
  const spec3Ref     = useRef<HTMLDivElement>(null);
  const ctaRef       = useRef<HTMLDivElement>(null);

  // Store preloaded images
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // 1. Preload Images
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];
    
    // We add an empty element at index 0 so frame 1 aligns with index 1
    images.push(new Image());

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      // frame_0001.webp
      const paddedIndex = String(i).padStart(4, '0');
      img.src = `/frames/frame_${paddedIndex}.webp`;
      
      img.onload = () => {
        loadedCount++;
        setFramesLoaded(loadedCount);
        // Draw the first frame immediately once it loads
        if (i === 1 && canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          if (ctx) {
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
            drawFrame(img, ctx, canvasRef.current.width, canvasRef.current.height);
          }
        }
      };
      
      img.onerror = () => {
        console.warn(`Failed to load frame ${i}`);
      };
      
      images.push(img);
    }
    
    imagesRef.current = images;
  }, []);

  // Helper to draw image covering the canvas (like object-fit: cover)
  const drawFrame = (img: HTMLImageElement, ctx: CanvasRenderingContextAction | CanvasRenderingContext2D, canvasW: number, canvasH: number) => {
    if (!img || !img.complete || img.naturalWidth === 0) return;
    
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvasW / canvasH;
    
    let drawW, drawH, drawX, drawY;
    
    if (canvasRatio > imgRatio) {
      drawW = canvasW;
      drawH = canvasW / imgRatio;
      drawX = 0;
      drawY = (canvasH - drawH) / 2;
    } else {
      drawW = canvasH * imgRatio;
      drawH = canvasH;
      drawX = (canvasW - drawW) / 2;
      drawY = 0;
    }
    
    ctx.clearRect(0, 0, canvasW, canvasH);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  };

  useLayoutEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!section || !canvas || !ctx) return;

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

    // Handle Resize
    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Redraw current frame
      const currentFrame = Math.round(frameProxy.frame);
      const img = imagesRef.current[currentFrame];
      if (img) drawFrame(img, ctx, canvas.width, canvas.height);
    };
    window.addEventListener('resize', onResize);

    const frameProxy = { frame: 1 };

    const gsapCtx = gsap.context(() => {

      // ── GSAP overlay timeline (synced to scroll progress) ────────────
      function setupOverlays() {
        const stConfig = {
          trigger: section,
          start: 'top top',
          end: `+=${SCROLL_LENGTH}`,
          scrub: 1,
        };

        const tl = gsap.timeline({ scrollTrigger: stConfig });

        // DORMANT 0–13%
        tl.fromTo(textEWRef.current,
          { opacity: 0, y: 20, letterSpacing: '0.05em' },
          { opacity: 1, y: 0,  letterSpacing: '0.35em', duration: 0.10 }, 0)
          .to(textEWRef.current, { opacity: 0, duration: 0.03 }, 0.10);

        // WAKE 13–27%
        tl.fromTo(textTitleRef.current,
          { opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
          { opacity: 1, clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', duration: 0.10 }, 0.13)
          .to(textTitleRef.current, { opacity: 0, duration: 0.04 }, 0.23);

        // RELEASE 27–46%
        const speedObj = { val: 0 };
        tl.fromTo([textSpeedRef.current, textSpeedLabelRef.current],
          { opacity: 0, scale: 0.88 },
          { opacity: 1, scale: 1, duration: 0.05 }, 0.27)
          .to(speedObj, {
            val: 400, duration: 0.14, ease: 'none',
            onUpdate: () => {
              if (textSpeedRef.current)
                textSpeedRef.current.textContent = String(Math.round(speedObj.val));
            },
          }, 0.27)
          .to([textSpeedRef.current, textSpeedLabelRef.current], { opacity: 0, duration: 0.05 }, 0.41);

        // LOCK 46–73%
        tl.fromTo([spec1Ref.current, spec2Ref.current, spec3Ref.current],
          { opacity: 0, x: 60 },
          { opacity: 1, x: 0, stagger: 0.04, duration: 0.14 }, 0.46)
          .to([spec1Ref.current, spec2Ref.current, spec3Ref.current],
            { opacity: 0, duration: 0.05 }, 0.68);

        // RESOLVE 73–100%
        tl.fromTo(ctaRef.current,
          { opacity: 0, y: 56 },
          { opacity: 1, y: 0, duration: 0.15 }, 0.73);
      }

      // Initialize the main ScrollTrigger for the canvas frames
      const initScrollTrigger = () => {
        // Count actual loaded frames
        const actualFrames = TOTAL_FRAMES;
        if (framesLoaded < actualFrames * 0.5) return; // Wait until at least 50% loaded

        // We want the total duration of the original video (22s)
        const durationSec = 22;
        let totalTimelineDuration = durationSec;
        
        // Emulate the slow-motion by stretching the timeline logic (19s to 22s segment)
        if (durationSec > 19) {
          const seg2End = Math.min(26, durationSec); // Max out at durationSec (22)
          const seg2Time = seg2End - 19; // 3 seconds
          totalTimelineDuration += (seg2Time * 2.5) - seg2Time; // Stretched time
        }

        const stConfig = {
          trigger: section,
          start: 'top top',
          end: `+=${SCROLL_LENGTH}`,
          pin: true,
          scrub: 1,
          onUpdate: (self: ScrollTrigger) => {
            // Render the current frame from the proxy
            const currentFrame = Math.round(frameProxy.frame);
            const img = imagesRef.current[currentFrame];
            if (img && img.complete) {
              drawFrame(img, ctx, canvas.width, canvas.height);
            }
            
            // Auto-scroll logic: Map video seconds to current progress
            // Total timeline duration is used to map progress back to "virtual seconds"
            const virtualSeconds = self.progress * totalTimelineDuration;
            
            // Reset interruption if scrolled back up before auto-scroll area (7.5s)
            if (virtualSeconds < 7.5) {
              userInterrupted = false;
            }

            // Auto-scroll from 8s to 14s
            if (virtualSeconds >= 8 && virtualSeconds < 14 && self.direction === 1 && !autoScrollTween && !userInterrupted) {
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

        // Segment 1: 0s to 19s (Normal speed)
        const fps = 12; // Extracted at 12fps
        const frameAt19s = 19 * fps;
        masterTl.to(frameProxy, {
          frame: frameAt19s,
          duration: 19,
          ease: 'none',
        });

        // Segment 2: 19s to 26s (Slow motion - 2.5x duration stretch)
        const frameAt26s = 26 * fps;
        if (durationSec > 19) {
          masterTl.to(frameProxy, {
            frame: frameAt26s,
            duration: (26 - 19) * 2.5,
            ease: 'none',
          });
        }

        // Segment 3: 26s to end (Normal speed)
        const finalFrame = Math.min(actualFrames, durationSec * fps);
        if (durationSec > 26) {
          masterTl.to(frameProxy, {
            frame: finalFrame,
            duration: durationSec - 26,
            ease: 'none',
          });
        }
        
        setupOverlays();
      };

      // Slight delay to allow some images to load before binding GSAP
      setTimeout(initScrollTrigger, 500);

    }, section);

    return () => {
      window.removeEventListener('wheel', onUserInteraction);
      window.removeEventListener('touchstart', onUserInteraction);
      window.removeEventListener('resize', onResize);
      gsapCtx.revert();
    };
  }, [framesLoaded]); // Re-run effect when frames load to bind scroll trigger

  return (
    <div className="hero-scroll-container">
      <section
        ref={sectionRef}
        className="relative w-full h-screen bg-black overflow-hidden"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ width: '100vw', height: '100vh', display: 'block' }}
        />
        
        {/* Loading Indicator */}
        {framesLoaded < 50 && (
          <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-500">
            <div className="text-white font-mono text-xl animate-pulse">
              Loading Sequence ({Math.round((framesLoaded / 50) * 100)}%)
            </div>
          </div>
        )}

        {/* ── Bottom-weighted scrim so copy stays legible across all beats ── */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.10) 45%, transparent 100%)',
        }} />

        {/* ═══════════════════════ OVERLAY COPY ════════════════════════ */}
        {/* DORMANT beat */}
        <div style={OL_BASE}>
          <p ref={textEWRef} style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(0.6rem, 1.1vw, 0.85rem)',
            letterSpacing: '0.05em', color: '#fff',
            opacity: 0, textTransform: 'uppercase', textAlign: 'center',
          }}>
            EARLY WARNING & INTERCEPTION
          </p>
        </div>

        {/* WAKE beat */}
        <div style={OL_BASE}>
          <h1
            ref={textTitleRef}
            style={{
              fontFamily: "'Chakra Petch', 'Archivo', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.04em', color: '#fff',
              opacity: 0, lineHeight: 1.1, textAlign: 'center',
              clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
            }}
          >
            FPV Bullseye<br />&amp; Interceptor
          </h1>
        </div>

        {/* RELEASE beat */}
        <div style={{ ...OL_BASE, justifyContent: 'flex-end', alignItems: 'flex-end', paddingBottom: '12vh', paddingRight: '5vw' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.75rem' }}>
            <div
              ref={textSpeedRef}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 'clamp(6vh, 11vw, 19vh)',
                fontWeight: 400, lineHeight: 1, color: '#fff',
                opacity: 0, fontVariantNumeric: 'tabular-nums',
                transform: 'scale(0.88)',
                letterSpacing: '-0.02em',
              }}
            >
              0
            </div>
            <div
              ref={textSpeedLabelRef}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                opacity: 0,
                transform: 'scale(0.88)',
                fontFamily: "Inter, sans-serif",
                color: '#fff',
                marginTop: '1vh'
              }}
            >
              <span style={{ fontSize: 'clamp(1rem, 2.25vw, 2.5rem)', lineHeight: 1, fontWeight: 400 }}>kmph</span>
              <span style={{ fontSize: 'clamp(0.5rem, 1vw, 1rem)', lineHeight: 1.2, fontWeight: 700 }}> (Max Speed)</span>
            </div>
          </div>
        </div>

        {/* LOCK beat */}
        <div style={{ ...OL_BASE, alignItems: 'flex-end', justifyContent: 'flex-end', paddingBottom: '10vh', paddingRight: '5vw' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1.25rem' }}>
            {[
              { ref: spec1Ref, label: '10 KM RANGE',   accent: false },
              { ref: spec2Ref, label: '3 KG PAYLOAD',  accent: false },
              { ref: spec3Ref, label: '22,000 mAh',    accent: true  },
            ].map(({ ref, label, accent }) => (
              <div key={label} ref={ref} style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 'clamp(0.85rem, 1.8vw, 1.35rem)',
                color: '#fff', opacity: 0, transform: 'translateX(60px)',
                paddingBottom: '0.5rem', minWidth: 200, textAlign: 'right',
                borderBottom: `1px solid ${accent ? '#FF4D1C' : 'rgba(255,255,255,0.18)'}`,
              }}>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* RESOLVE beat */}
        <div style={{ ...OL_BASE, justifyContent: 'flex-end', paddingBottom: '12vh', pointerEvents: 'auto' }}>
          <div ref={ctaRef} style={{
            display: 'flex', flexWrap: 'wrap', gap: '1.25rem',
            justifyContent: 'center', opacity: 0, transform: 'translateY(56px)',
          }}>
            <button className="bg-[#FF4D1C] text-white px-8 py-4 font-bold tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
              DISCOVER FPV SYSTEM
            </button>
            <button className="border border-white/30 text-white px-8 py-4 font-bold tracking-wider hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
              VIEW TECHNICAL SPECS
            </button>
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
  alignItems: 'center', justifyContent: 'center', padding: '2rem',
};
