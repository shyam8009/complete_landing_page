import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────
// CONFIG — repoint here, nowhere else
// ─────────────────────────────────────────────
const FRAME_COUNT  = 150;
const SCROLL_LENGTH = '300%';
const FRAME_PATH = (i: number) =>
  `/frames/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;

// Beat breakpoints (0–1 progress)
const BEATS = {
  DORMANT_END:  0.13,
  WAKE_END:     0.27,
  RELEASE_END:  0.46,
  LOCK_END:     0.73,
  RESOLVE_END:  1.00,
};

export function HeroSection() {
  const sectionRef   = useRef<HTMLElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const barRef       = useRef<HTMLDivElement>(null);

  // overlay refs
  const textEWRef    = useRef<HTMLHeadingElement>(null);
  const textTitleRef = useRef<HTMLHeadingElement>(null);
  const textSpeedRef = useRef<HTMLDivElement>(null);
  const spec1Ref     = useRef<HTMLDivElement>(null);
  const spec2Ref     = useRef<HTMLDivElement>(null);
  const spec3Ref     = useRef<HTMLDivElement>(null);
  const ctaRef       = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const canvas  = canvasRef.current!;
    const section = sectionRef.current!;
    const ctx     = canvas.getContext('2d', { alpha: false })!;

    const images: HTMLImageElement[] = [];
    let target  = 1;
    let current = 1;
    let lastDrawn = -1;
    let rafId: number;

    // ── Resize Canvas ─────────────────────────
    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width  = section.clientWidth  * dpr;
      canvas.height = section.clientHeight * dpr;
      canvas.style.width  = `${section.clientWidth}px`;
      canvas.style.height = `${section.clientHeight}px`;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
      lastDrawn = -1;
      draw(Math.max(1, Math.min(FRAME_COUNT, Math.round(current))));
    }

    // ── Draw a frame (cover-fit) ───────────────
    function draw(index: number) {
      const img = images[index] || images[1];
      if (!img) return;
      const cw = section.clientWidth;
      const ch = section.clientHeight;
      const iw = img.naturalWidth  || img.width;
      const ih = img.naturalHeight || img.height;
      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
    }

    // ── rAF loop ──────────────────────────────
    function tick() {
      current += (target - current) * 0.1;
      const i = Math.max(1, Math.min(FRAME_COUNT, Math.round(current)));
      if (i !== lastDrawn) { draw(i); lastDrawn = i; }
      rafId = requestAnimationFrame(tick);
    }

    // ── Load one frame ─────────────────────────
    function loadFrame(index: number): Promise<HTMLImageElement> {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = FRAME_PATH(index);
        img.onload = async () => {
          if ((img as any).decode) await (img as any).decode().catch(() => {});
          resolve(img);
        };
        img.onerror = reject;
      });
    }

    // ── GSAP text overlays ────────────────────
    function setupOverlays() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${SCROLL_LENGTH}`,
          scrub: 1,
        },
      });

      // DORMANT 0–13 %
      tl.fromTo(textEWRef.current,
        { opacity: 0, y: 24, letterSpacing: '0.05em' },
        { opacity: 1, y: 0,  letterSpacing: '0.35em', duration: 0.10 }, 0)
        .to(textEWRef.current, { opacity: 0, duration: 0.03 }, 0.10);

      // WAKE 13–27 %
      tl.fromTo(textTitleRef.current,
        { opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
        { opacity: 1, clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', duration: 0.10 }, 0.13)
        .to(textTitleRef.current, { opacity: 0, duration: 0.04 }, 0.23);

      // RELEASE 27–46 %  — odometer bound to progress
      const speedObj = { val: 0 };
      tl.fromTo(textSpeedRef.current,
        { opacity: 0, scale: 0.88 },
        { opacity: 1, scale: 1, duration: 0.05 }, 0.27)
        .to(speedObj, {
          val: 400, duration: 0.14, ease: 'none',
          onUpdate: () => {
            if (textSpeedRef.current)
              textSpeedRef.current.textContent = `${Math.round(speedObj.val)}`;
          },
        }, 0.27)
        .to(textSpeedRef.current, { opacity: 0, duration: 0.05 }, 0.41);

      // LOCK 46–73 %
      tl.fromTo([spec1Ref.current, spec2Ref.current, spec3Ref.current],
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0,  stagger: 0.04, duration: 0.14 }, 0.46)
        .to([spec1Ref.current, spec2Ref.current, spec3Ref.current],
          { opacity: 0, duration: 0.05 }, 0.68);

      // RESOLVE 73–100 %
      tl.fromTo(ctaRef.current,
        { opacity: 0, y: 56 },
        { opacity: 1, y: 0,  duration: 0.15 }, 0.73);
    }

    // ── Main init ─────────────────────────────
    async function init() {
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // Critical frames first
      try {
        images[1]   = await loadFrame(1);
        images[150] = await loadFrame(150);
        draw(1);
      } catch {
        // fall through to static fallback below
        if (preloaderRef.current) preloaderRef.current.style.display = 'none';
        return;
      }

      // Rest of the sequence
      let loaded = 2;
      for (let i = 2; i < FRAME_COUNT; i++) {
        try {
          images[i] = await loadFrame(i);
        } catch { /* skip bad frame */ }
        loaded++;
        if (barRef.current)
          barRef.current.style.width = `${(loaded / FRAME_COUNT) * 100}%`;
      }

      // Sequence ready
      if (preloaderRef.current) {
        preloaderRef.current.style.opacity = '0';
        setTimeout(() => { if (preloaderRef.current) preloaderRef.current.remove(); }, 500);
      }

      // Frame scrub
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${SCROLL_LENGTH}`,
        pin: true,
        scrub: 1,
        onUpdate: self => { target = 1 + self.progress * (FRAME_COUNT - 1); },
      });

      setupOverlays();
      tick();
    }

    init();

    return () => {
      cancelAnimationFrame(rafId);
      ScrollTrigger.getAll().forEach(t => t.kill());
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black"
      style={{ height: '100vh' }}
    >
      {/* ── Preloader ── */}
      <div
        ref={preloaderRef}
        style={{
          position: 'absolute', inset: 0, zIndex: 50,
          background: '#000', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
          transition: 'opacity 0.5s',
        }}
      >
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.75rem', letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase',
        }}>
          LOADING SEQUENCE
        </span>
        <div style={{ width: 200, height: 1, background: 'rgba(255,255,255,0.1)' }}>
          <div
            ref={barRef}
            style={{ height: '100%', background: '#FF4D1C', width: '0%', transition: 'width 0.1s linear' }}
          />
        </div>
      </div>

      {/* ── Canvas ── */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
      />

      {/* ── Scrim ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)',
        }}
      />

      {/* ═══════════════════════════════════════
          OVERLAY LAYERS  – all real HTML
      ════════════════════════════════════════ */}

      {/* DORMANT */}
      <div style={overlayBase}>
        <h1
          ref={textEWRef}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(0.65rem, 1.2vw, 1rem)',
            letterSpacing: '0.05em',
            color: '#fff',
            opacity: 0,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          Electronic Warfare / Drone Systems
        </h1>
      </div>

      {/* WAKE */}
      <div style={overlayBase}>
        <h2
          ref={textTitleRef}
          style={{
            fontFamily: "'Chakra Petch', 'Archivo', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color: '#fff',
            opacity: 0,
            textAlign: 'center',
            lineHeight: 1.1,
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
          }}
        >
          Sahana FPV Bullseye<br />&amp; Interceptor
        </h2>
      </div>

      {/* RELEASE — 400 KMPH */}
      <div style={{ ...overlayBase, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: '8vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
          <div
            ref={textSpeedRef}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(12vh, 22vw, 38vh)',
              fontWeight: 700,
              lineHeight: 1,
              color: '#fff',
              opacity: 0,
              fontVariantNumeric: 'tabular-nums',
              transform: 'scale(0.88)',
            }}
          >
            0
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(0.65rem, 1.5vw, 1.1rem)',
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
          }}>
            KM/H
          </div>
        </div>
      </div>

      {/* LOCK — specs */}
      <div style={{ ...overlayBase, alignItems: 'flex-end', justifyContent: 'flex-end', paddingBottom: '10vh', paddingRight: '5vw', textAlign: 'right' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1.25rem' }}>
          {[
            { ref: spec1Ref, label: '10 KM RANGE' },
            { ref: spec2Ref, label: '3 KG PAYLOAD' },
            { ref: spec3Ref, label: '22,000 mAh', accent: true },
          ].map(({ ref, label, accent }) => (
            <div
              key={label}
              ref={ref}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 'clamp(0.9rem, 2vw, 1.4rem)',
                color: '#fff',
                opacity: 0,
                transform: 'translateX(60px)',
                paddingBottom: '0.5rem',
                borderBottom: `1px solid ${accent ? '#FF4D1C' : 'rgba(255,255,255,0.18)'}`,
                minWidth: 200,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* RESOLVE — CTAs */}
      <div style={{ ...overlayBase, justifyContent: 'flex-end', paddingBottom: '12vh', pointerEvents: 'auto' }}>
        <div
          ref={ctaRef}
          style={{
            display: 'flex', flexWrap: 'wrap', gap: '1.25rem',
            justifyContent: 'center', opacity: 0, transform: 'translateY(56px)',
          }}
        >
          <button style={ctaSecondary}>DOWNLOAD DATASHEET</button>
          <button style={ctaPrimary}>REQUEST BRIEFING</button>
        </div>
      </div>
    </section>
  );
}

// ─── Shared styles ────────────────────────────────────────────────────────────
const overlayBase: React.CSSProperties = {
  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
  zIndex: 20, pointerEvents: 'none',
  display: 'flex', flexDirection: 'column',
  alignItems: 'center', justifyContent: 'center', padding: '2rem',
};

const ctaBase: React.CSSProperties = {
  fontFamily: "'Chakra Petch', 'Archivo', sans-serif",
  fontSize: '0.9rem',
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  padding: '0.875rem 2rem',
  cursor: 'pointer',
  borderRadius: 0,
  transition: 'all 0.25s ease',
};

const ctaSecondary: React.CSSProperties = {
  ...ctaBase,
  background: 'transparent',
  color: '#fff',
  border: '1px solid rgba(255,255,255,0.3)',
};

const ctaPrimary: React.CSSProperties = {
  ...ctaBase,
  background: '#FF4D1C',
  color: '#000',
  border: '1px solid #FF4D1C',
  fontWeight: 700,
};
