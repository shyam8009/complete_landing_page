import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TOTAL_FRAMES = 66;

// Helper to generate an orbital path for a hotspot across 66 frames
// Returns an array of { x(%), y(%), visible(boolean) }
function generateHotspotPath(baseX: number, baseY: number, radiusX: number, radiusY: number, phaseOffset: number) {
  const frames = [];
  for (let i = 0; i < TOTAL_FRAMES; i++) {
    // 66 frames = 1 full rotation (2 * PI)
    const angle = (i / TOTAL_FRAMES) * Math.PI * 2 + phaseOffset;
    
    // Calculate 2D position mimicking a 3D orbit
    const x = baseX + Math.cos(angle) * radiusX;
    const y = baseY + Math.sin(angle) * radiusY;
    
    // Z-depth calculation to hide the hotspot when it rotates *behind* the drone
    const z = Math.sin(angle); 
    const visible = z > -0.2; // Hide slightly after it passes the side horizon
    
    frames.push({ x, y, visible });
  }
  return frames;
}

export function Interactive360Viewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [framesLoaded, setFramesLoaded] = useState(0);
  const dragStartX = useRef(0);
  const dragStartFrame = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const customCursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const updateCursorPosition = useCallback((e: MouseEvent | PointerEvent | React.PointerEvent) => {
    if (customCursorRef.current && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      customCursorRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    }
  }, []);

  // Define Hotspots
  const hotspots = useMemo(() => [
    {
      id: 'payload',
      label: 'Up to 12 kg Payload Capacity',
      icon: (
        <svg className="w-5 h-5 text-[#88FF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      // BaseX, BaseY, RadX, RadY, Phase (Adjust phase to align with drone features)
      path: generateHotspotPath(50, 25, 20, 5, 0),
    },
    {
      id: 'spool',
      label: 'Fiber Optics Spool Integration', // Typo fixed from 'Pool' to 'Spool'
      icon: (
        <svg className="w-5 h-5 text-[#88FF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      path: generateHotspotPath(50, 50, 30, 8, Math.PI / 2),
    },
    {
      id: 'proxy',
      label: "Interference-Resistant 'Proxy' Channel",
      icon: (
        <svg className="w-5 h-5 text-[#88FF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      path: generateHotspotPath(50, 75, 25, 6, Math.PI),
    }
  ], []);

  // 1. Preload 66 Frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(4, '0');
      img.src = `/fpv-buddy-360/frame_${paddedIndex}.webp`;
      
      img.onload = () => {
        loadedCount++;
        setFramesLoaded(loadedCount);
        if (i === 1 && canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          if (ctx) drawFrame(img, ctx, canvasRef.current);
        }
      };
      
      images.push(img);
    }
    
    imagesRef.current = images;
  }, []);

  // Helper to draw image on canvas covering its dimensions
  const drawFrame = (img: HTMLImageElement, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    if (!img || !img.complete || img.naturalWidth === 0) return;
    
    const canvasW = canvas.width;
    const canvasH = canvas.height;
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

  // Draw frame when currentFrame or framesLoaded changes
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = imagesRef.current[currentFrame];
    if (canvas && ctx && img && img.complete) {
      // Ensure canvas has a valid width before drawing
      if (canvas.width === 0 || canvas.width === 300) {
        const parent = canvas.parentElement;
        if (parent) {
          canvas.width = parent.clientWidth;
          canvas.height = parent.clientHeight;
        }
      }
      drawFrame(img, ctx, canvas);
    }
  }, [currentFrame, framesLoaded]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const parent = canvasRef.current.parentElement;
        if (parent) {
          canvasRef.current.width = parent.clientWidth;
          canvasRef.current.height = parent.clientHeight;
          // Trigger redraw
          const ctx = canvasRef.current.getContext('2d');
          const img = imagesRef.current[currentFrame];
          if (ctx && img && img.complete) drawFrame(img, ctx, canvasRef.current);
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial sizing
    return () => window.removeEventListener('resize', handleResize);
  }, [currentFrame]);

  // Drag interaction logic
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartFrame.current = currentFrame;
    // Prevent default to avoid selecting text while dragging
    e.target.releasePointerCapture(e.pointerId);
  };

  const handlePointerMove = useCallback((e: PointerEvent) => {
    updateCursorPosition(e);
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX.current;
    
    // Sensitivity: 10 pixels of drag = 1 frame on desktop, 5 pixels on mobile
    const sensitivity = window.innerWidth < 1024 ? 5 : 10;
    const frameOffset = Math.floor(deltaX / sensitivity); 
    
    // Modulo math to wrap seamlessly between 0 and 65
    let newFrame = (dragStartFrame.current - frameOffset) % TOTAL_FRAMES;
    if (newFrame < 0) newFrame += TOTAL_FRAMES;
    
    setCurrentFrame(newFrame);
  }, [isDragging, updateCursorPosition]);

  const handlePointerUp = useCallback((e: PointerEvent) => {
    setIsDragging(false);
    
    // Check if we released the mouse outside the container.
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const isOutside = e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom;
      if (isOutside) {
        setIsHovering(false);
      }
    }
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
      window.addEventListener('pointercancel', handlePointerUp);
    } else {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDragging, handlePointerMove, handlePointerUp]);

  return (
    <section className="w-full bg-[#070908] flex flex-col overflow-hidden border-t border-white/10">
      
      {/* ── TOP ROW: Headline (30%) + 3D Viewer (70%) ── */}
      <div className="flex flex-col lg:flex-row w-full min-h-[500px] lg:min-h-[600px] lg:h-auto pt-12 lg:pt-16">
        
        {/* ── LEFT COLUMN: Headline ── */}
        <div className="w-full lg:w-[30%] flex flex-col justify-center p-8 lg:p-12 lg:pl-16 z-10">
          <h3 className="text-[#88FF00] tracking-widest text-sm lg:text-base font-bold mb-4 uppercase">
            Core Capabilities
          </h3>
          <h2 className="text-white text-4xl lg:text-4xl xl:text-5xl font-black uppercase leading-tight" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
            Tactical Precision <span className="text-[#88FF00]">&amp;</span> Resilience
          </h2>
        </div>

        {/* ── RIGHT COLUMN: 360 Viewer ── */}
        <div 
          ref={containerRef}
          className="w-full lg:w-[70%] h-[500px] lg:min-h-[600px] relative cursor-none flex items-center justify-center bg-[#070908]"
          onPointerDown={handlePointerDown}
          onPointerMove={updateCursorPosition}
          onPointerEnter={(e) => {
            setIsHovering(true);
            updateCursorPosition(e);
          }}
          onPointerLeave={() => {
            if (!isDragging) setIsHovering(false);
          }}
          style={{ touchAction: 'none' }}
        >
          {/* Custom Cursor */}
          <div 
            ref={customCursorRef}
            className={`absolute top-0 left-0 w-20 h-20 rounded-full bg-white/5 backdrop-blur-md border border-[#88FF00]/30 flex flex-col items-center justify-center text-white text-[10px] font-mono tracking-widest pointer-events-none z-50 transition-opacity duration-300 ${isHovering || isDragging ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ transform: 'translate(-50%, -50%)', willChange: 'transform' }}
          >
            <svg className={`w-5 h-5 mb-1 text-[#88FF00] transition-transform duration-200 ${isDragging ? 'scale-75' : 'scale-100 animate-pulse'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span className={isDragging ? 'text-[#88FF00]' : ''}>DRAG</span>
          </div>

          {/* Loading Overlay */}
          {framesLoaded < Math.floor(TOTAL_FRAMES * 0.8) && (
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-[#070908]/90 backdrop-blur-sm">
              <div className="text-[#88FF00] font-mono tracking-widest text-sm animate-pulse">
                LOADING 3D VIEW ({Math.round((framesLoaded / TOTAL_FRAMES) * 100)}%)
              </div>
            </div>
          )}

          {/* The 360 Canvas — bg matches container so no seam */}
          <canvas 
            ref={canvasRef} 
            className="w-full h-full"
            style={{ background: '#070908' }}
          />

          {/* ── HOTSPOTS ── */}
          {hotspots.map((hotspot) => {
            const currentPos = hotspot.path[currentFrame];
            return (
              <AnimatePresence key={hotspot.id}>
                {currentPos.visible && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-10 flex items-center gap-3 bg-[#0a0a0a]/90 backdrop-blur-md border border-[#88FF00]/40 p-3 lg:p-4 rounded-xl pointer-events-none"
                    style={{
                      left: `${currentPos.x}%`,
                      top: `${currentPos.y}%`,
                      transform: 'translate(-50%, -50%)',
                      boxShadow: '0 0 18px rgba(136,255,0,0.12), 0 4px 24px rgba(0,0,0,0.7)',
                    }}
                  >
                    <div className="flex-shrink-0">
                      {hotspot.icon}
                    </div>
                    <span className="text-white text-xs lg:text-sm font-semibold whitespace-nowrap">
                      {hotspot.label}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </div>
      </div>

      {/* ── BOTTOM ROW: Details ── */}
      <div className="w-full pb-12 lg:pb-16 px-8 lg:px-16 z-10">
        <p className="text-gray-400 text-lg lg:text-xl leading-relaxed w-full">
          Built across three frame sizes, the Drone Buddy features a lightweight, durable frame that ensures resilience in challenging environments. It is positioned as an essential tool for reconnaissance, training, and field operations, delivering high-speed aerial oversight in interference-heavy environments.
        </p>
      </div>

    </section>
  );
}
