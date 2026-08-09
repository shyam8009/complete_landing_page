import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useFrameSequence } from '../hooks/useFrameSequence';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 321; // 26.8s at 12 fps
const SCROLL_LENGTH = '2000vh'; // Long scroll to accommodate slow motion
const MOBILE_BREAK = 768;

export function CanvasScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [dir, setDir] = useState<"1920" | "960">(() =>
    typeof window !== "undefined" && window.innerWidth < MOBILE_BREAK
      ? "960"
      : "1920"
  );

  // Upgrade resolution on resize, never downgrade to save bandwidth
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= MOBILE_BREAK) setDir("1920");
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const srcFor = (i: number) => `/frames/${dir}/frame-${String(i).padStart(3, '0')}.jpg`;

  const { frames, ready, progress, failed } = useFrameSequence(
    FRAME_COUNT,
    srcFor,
    24, // lead frames
    true
  );

  useLayoutEffect(() => {
    if (!ready || failed) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let cssW = 0;
    let cssH = 0;

    const sizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cssW = window.innerWidth;
      cssH = window.innerHeight;
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    sizeCanvas();
    window.addEventListener("resize", sizeCanvas);
    window.addEventListener("orientationchange", sizeCanvas);

    // Frame proxy for GSAP to animate
    const proxy = { frame: 1 };
    let currentDrawnFrame = -1;

    const resolveFrame = (index: number) => {
      const direct = frames[index];
      if (direct) return direct;
      for (let d = 1; d < FRAME_COUNT; d++) {
        const back = frames[index - d];
        if (back) return back;
        const fwd = frames[index + d];
        if (fwd) return fwd;
      }
      return undefined;
    };

    const draw = () => {
      const idx = Math.max(1, Math.min(FRAME_COUNT, Math.round(proxy.frame)));
      if (idx === currentDrawnFrame) return; // Skip if already drawn

      const img = resolveFrame(idx - 1);
      if (!img || !cssW || !cssH) return;

      const cover = Math.max(cssW / img.width, cssH / img.height);
      const dw = img.width * cover;
      const dh = img.height * cover;
      const dx = (cssW - dw) / 2;
      const dy = (cssH - dh) / 2;

      ctx.fillStyle = "#050607";
      ctx.fillRect(0, 0, cssW, cssH);
      ctx.drawImage(img, dx, dy, dw, dh);
      
      currentDrawnFrame = idx;
    };

    // Draw frame 1 immediately
    draw();

    let gsapCtx = gsap.context(() => {
      // Create master timeline
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${SCROLL_LENGTH}`,
          pin: true,
          scrub: 1, // 1 second smoothing lag behind scroll
          onUpdate: () => draw() // Draw canvas on each tick
        }
      });

      // Frame mapping at 12fps:
      // 8s = 96
      // 14s = 168
      // 19s = 228
      // 26s = 312

      // Segment 1: 0s to 8s (Frames 1 to 96)
      masterTl.to(proxy, {
        frame: 96,
        duration: 8,
        ease: 'none'
      });

      // Segment 2: 8s to 14s (AUTO-SCROLL / JUMP)
      // This plays automatically without needing the user to scroll
      masterTl.to(proxy, {
        frame: 168,
        duration: 0.1, // Near instant on the scrollbar
        ease: 'power1.inOut' // Smooth visual transition despite quick scroll span
      });

      // Segment 3: 14s to 19s (Frames 168 to 228)
      masterTl.to(proxy, {
        frame: 228,
        duration: 5,
        ease: 'none'
      });

      // Segment 4: 19s to 26s (SLOW MOTION)
      // Multiply duration by 2.5 to stretch it out over the scrollbar
      masterTl.to(proxy, {
        frame: 312,
        duration: 7 * 2.5,
        ease: 'none'
      });

      // Segment 5: 26s to end (Frames 312 to 321)
      masterTl.to(proxy, {
        frame: FRAME_COUNT,
        duration: 1,
        ease: 'none'
      });

      // ---- TEXT OVERLAYS -----------------------
      
      // Auto-scroll overlay (8s to 14s)
      masterTl.fromTo('.overlay-auto-scroll', 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.05, ease: 'power1.out' },
        8 // At 8s mark
      );
      masterTl.to('.overlay-auto-scroll', {
        opacity: 0, scale: 1.1, duration: 0.05, ease: 'power1.in'
      }, 8.05);

      // Slow-mo overlay (19s to 26s)
      masterTl.fromTo('.overlay-slow-mo',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 2, ease: 'power2.out' },
        13.1 // After auto-scroll (8 + 0.1 + 5 = 13.1)
      );
      masterTl.to('.overlay-slow-mo', {
        opacity: 0, y: -50, duration: 2, ease: 'power2.in'
      }, 13.1 + 7 * 2.5 - 2);

    }, container);

    // Allow user to interrupt the auto-scroll tween if they scroll aggressively
    const killTweens = () => {
      gsap.killTweensOf(proxy);
    };
    window.addEventListener('wheel', killTweens, { passive: true });
    window.addEventListener('touchstart', killTweens, { passive: true });

    return () => {
      gsapCtx.revert();
      window.removeEventListener("resize", sizeCanvas);
      window.removeEventListener("orientationchange", sizeCanvas);
      window.removeEventListener('wheel', killTweens);
      window.removeEventListener('touchstart', killTweens);
    };
  }, [ready, failed, frames]); // added frames to dep array so draw can resolve

  return (
    <div ref={containerRef} className="relative w-full bg-black h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Loading Bar */}
      <div 
        className="absolute bottom-0 left-0 h-1 bg-[#37ff8b] transition-all duration-300 z-50"
        style={{ width: `${progress * 100}%`, opacity: ready ? 0 : 1 }}
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-white font-mono z-10">
        
        <div className="overlay-auto-scroll opacity-0 absolute">
          <div className="text-4xl md:text-7xl font-bold text-[#37ff8b] tracking-wider uppercase drop-shadow-[0_0_15px_rgba(55,255,139,0.5)]">
            SYSTEM ENGAGED
          </div>
          <div className="text-lg md:text-2xl mt-4 text-center tracking-[0.2em] text-white/80">
            AUTONOMOUS FLIGHT MODE
          </div>
        </div>

        <div className="overlay-slow-mo opacity-0 absolute text-center">
          <div className="text-3xl md:text-5xl font-light text-white tracking-[0.3em] uppercase drop-shadow-lg">
            Tactical Analysis
          </div>
          <div className="mt-6 flex items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-[#37ff8b]">2.5x</div>
              <div className="text-sm tracking-widest mt-2 text-white/60">SLOW MOTION</div>
            </div>
            <div className="h-16 w-px bg-white/20"></div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-[#37ff8b]">120</div>
              <div className="text-sm tracking-widest mt-2 text-white/60">FPS CAPTURE</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
