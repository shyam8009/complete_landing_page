import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SCROLL_LENGTH = '400%'; // Optimized 4x viewport height to eliminate scroll fatigue
const TOTAL_FRAMES = 322;     // Exact frame count extracted

export function CanvasScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [framesLoaded, setFramesLoaded] = useState(0);
  
  // Overlay copy ref - Only the motto
  const mottoRef = useRef<HTMLDivElement>(null);

  // Store preloaded images
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // 1. Preload Images with immediate priority for frame 1
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];
    images.push(new Image()); // 1-indexed placeholder at index 0

    // Load Frame 1 immediately
    const firstImg = new Image();
    firstImg.src = '/frames/frame_0001.webp';
    firstImg.onload = () => {
      loadedCount++;
      setFramesLoaded(loadedCount);
    };
    firstImg.onerror = () => {
      loadedCount++;
    };
    images[1] = firstImg;

    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(4, '0');
      img.src = `/frames/frame_${paddedIndex}.webp`;
      
      img.onload = () => {
        loadedCount++;
        // Batch React state updates so we don't thrash the main thread
        if (loadedCount % 25 === 0 || loadedCount === TOTAL_FRAMES) {
          setFramesLoaded(loadedCount);
        }
      };
      
      img.onerror = () => {
        loadedCount++;
      };
      
      images.push(img);
    }
    
    imagesRef.current = images;
  }, []);

  useLayoutEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (isReducedMotion || isMobile) {
      if (mottoRef.current) {
        mottoRef.current.style.opacity = '1';
        mottoRef.current.style.transform = 'none';
        mottoRef.current.style.filter = 'none';
      }
      return;
    }

    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    // Use alpha: false for maximum GPU compositing throughput
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let target = 1;
    let current = 1;
    let lastDrawn = -1;
    let rafId: number;

    // Cover-fit draw onto canvas without clearing (image covers 100%)
    function draw(index: number): boolean {
      if (!ctx || !section) return false;
      const img = imagesRef.current[index] || imagesRef.current[1];
      if (!img || !img.complete || img.naturalWidth === 0) return false;
      
      const cw = section.clientWidth;
      const ch = section.clientHeight;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;
      
      ctx.drawImage(img, dx, dy, dw, dh);
      return true;
    }

    // Canvas Resize with DPR
    function resizeCanvas() {
      if (!canvas || !section || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = section.clientWidth * dpr;
      canvas.height = section.clientHeight * dpr;
      canvas.style.width = `${section.clientWidth}px`;
      canvas.style.height = `${section.clientHeight}px`;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
      lastDrawn = -1;
      const frameToDraw = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(current)));
      if (draw(frameToDraw)) {
        lastDrawn = frameToDraw;
      }
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Decoupled 60fps/120fps requestAnimationFrame lerp loop synchronized with Lenis
    function tick() {
      // 0.22 lerp factor tracks Lenis momentum fluidly without double-buffering lag
      current += (target - current) * 0.22;
      const i = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(current)));
      if (i !== lastDrawn) {
        // Only mark lastDrawn if the image was actually ready and painted
        if (draw(i)) {
          lastDrawn = i;
        }
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    const gsapCtx = gsap.context(() => {
      // Total virtual duration of video sequence (~26.8s)
      const durationSec = 26.8;
      let totalTimelineDuration = durationSec;
      if (durationSec > 19) {
        const seg2Time = Math.min(26, durationSec) - 19;
        totalTimelineDuration += (seg2Time * 2.5) - seg2Time;
      }

      const stConfig = {
        trigger: section,
        start: 'top top',
        end: `+=${SCROLL_LENGTH}`,
        pin: true,
        scrub: true, // Follows Lenis's smooth momentum directly
        onUpdate: (self: ScrollTrigger) => {
          // Smoothly update target frame for the rAF loop
          target = 1 + self.progress * (TOTAL_FRAMES - 1);

          // Virtual seconds mapped from scroll progress
          const virtualSeconds = self.progress * totalTimelineDuration;

          // Direct precision sync for Motto ("सतर्कता रक्षति राष्ट्रम्"): visible from start up to 17.5s
          if (mottoRef.current) {
            if (virtualSeconds > 17.5) {
              mottoRef.current.style.opacity = '0';
              mottoRef.current.style.transform = 'translateX(-40px)';
              mottoRef.current.style.filter = 'blur(8px)';
            } else if (virtualSeconds <= 15.5) {
              mottoRef.current.style.opacity = '1';
              mottoRef.current.style.transform = 'translateX(0px)';
              mottoRef.current.style.filter = 'blur(0px)';
            } else if (virtualSeconds > 15.5 && virtualSeconds <= 17.5) {
              const t = (17.5 - virtualSeconds) / 2.0;
              const ease = t * t * (3 - 2 * t);
              mottoRef.current.style.opacity = String(ease);
              mottoRef.current.style.transform = `translateX(${(-30 * (1 - ease)).toFixed(1)}px)`;
              mottoRef.current.style.filter = `blur(${(8 * (1 - ease)).toFixed(1)}px)`;
            }
          }
        }
      };

      gsap.timeline({ scrollTrigger: stConfig });
    }, section);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resizeCanvas);
      gsapCtx.revert();
    };
  }, []);

  return (
    <div className="hero-scroll-container">
      <section
        ref={sectionRef}
        className="relative w-full min-h-[100dvh] h-screen bg-black overflow-hidden"
      >
        {/* Instant Fallback Poster so the screen is NEVER black before frames/canvas render */}
        <img
          src="/frames/frame_0001.webp"
          alt="Sahana Defence Bullseye Interceptor"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ width: '100%', height: '100dvh', display: 'block' }}
        />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-[1]"
          style={{ width: '100%', height: '100dvh', display: 'block' }}
        />
        
        {/* Loading Indicator */}
        {framesLoaded < 25 && (
          <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-500">
            <div className="text-white font-mono text-xl animate-pulse">
              Loading Sequence ({Math.min(100, Math.round((framesLoaded / 25) * 100))}%)
            </div>
          </div>
        )}

        {/* ── Subtle bottom scrim so motto remains legible over brighter frames ── */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.05) 35%, transparent 100%)',
        }} />

        {/* ── National Defence Motto (Upper Bottom Left) ── */}
        <div 
          ref={mottoRef}
          className="absolute z-20 pointer-events-none flex flex-col items-start text-left select-none"
          style={{
            bottom: 'clamp(5.5rem, 18vh, 12rem)',
            left: 'clamp(1.5rem, 5vw, 4rem)',
            opacity: 1,
            transform: 'translateX(0px)',
            filter: 'blur(0px)',
          }}
        >
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wide text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            सतर्कता रक्षति राष्ट्रम्
          </h2>
        </div>
      </section>
    </div>
  );
}
