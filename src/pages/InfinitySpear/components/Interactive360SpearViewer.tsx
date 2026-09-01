import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Radio, Zap } from 'lucide-react';

const TOTAL_FRAMES = 96;

// Helper to generate an orbital path for a hotspot across frames
// Returns an array of { x(%), y(%), visible(boolean) }
function generateHotspotPath(baseX: number, baseY: number, radiusX: number, radiusY: number, phaseOffset: number) {
  const frames = [];
  for (let i = 0; i < TOTAL_FRAMES; i++) {
    // frames = 1 full rotation (2 * PI)
    const angle = (i / TOTAL_FRAMES) * Math.PI * 2 + phaseOffset;
    
    // Calculate 2D position mimicking a 3D orbit
    const x = baseX + Math.cos(angle) * radiusX;
    const y = baseY + Math.sin(angle) * radiusY;
    
    // Z-depth calculation to hide the hotspot when it rotates *behind* the spear
    const z = Math.sin(angle); 
    const visible = z > -0.2; // Hide slightly after it passes the side horizon
    
    frames.push({ x, y, visible });
  }
  return frames;
}

export function Interactive360SpearViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
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
      id: 'range',
      label: '3 km Neutralization Range',
      icon: <Target className="w-5 h-5 text-[#84CC16]" />,
      path: generateHotspotPath(50, 30, 25, 8, 0),
    },
    {
      id: 'denial',
      label: 'Multi-Band Frequency Denial',
      icon: <Radio className="w-5 h-5 text-[#84CC16]" />,
      path: generateHotspotPath(50, 65, 35, 12, Math.PI / 2),
    },
    {
      id: 'deployment',
      label: 'Rapid Deployment',
      icon: <Zap className="w-5 h-5 text-[#84CC16]" />,
      path: generateHotspotPath(50, 85, 20, 5, Math.PI),
    }
  ], []);

  // 1. Preload Frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(4, '0');
      img.src = `/infinity-spear-360/frame_${paddedIndex}.webp`;
      
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
    setHasInteracted(true);
    dragStartX.current = e.clientX;
    dragStartFrame.current = currentFrame;
    // Prevent default to avoid selecting text while dragging
    e.target.releasePointerCapture(e.pointerId);
  };

  const handlePointerMove = useCallback((e: PointerEvent) => {
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
    <section className="w-full bg-[#05080D] flex flex-col overflow-hidden border-t border-white/10">
      
      {/* â”€â”€ TOP ROW: Headline (30%) + 3D Viewer (70%) â”€â”€ */}
      <div className="flex flex-col lg:flex-row w-full min-h-[500px] lg:min-h-[600px] lg:h-auto pt-12 lg:pt-16">
        
        {/* â”€â”€ LEFT COLUMN: Headline â”€â”€ */}
        <div className="w-full lg:w-[30%] flex flex-col justify-center p-8 lg:p-12 lg:pl-16 z-10">
          <h3 className="text-[#84CC16] tracking-widest text-sm lg:text-base font-bold mb-4 uppercase">
            Core Capabilities
          </h3>
          <h2 className="text-white text-4xl lg:text-4xl xl:text-5xl font-black uppercase leading-tight tracking-tight">
            Absolute Airspace Denial
          </h2>
        </div>

        {/* â”€â”€ RIGHT COLUMN: 360 Viewer â”€â”€ */}
        <div 
          ref={containerRef}
          className={`w-full lg:w-[70%] h-[500px] lg:min-h-[600px] relative ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} flex items-center justify-center bg-[#05080D]`}
          onPointerDown={handlePointerDown}
          style={{ touchAction: 'none' }}
        >
          {/* Minimal 360 Watermark */}
          <div className="absolute bottom-8 right-8 flex items-center gap-2 opacity-20 pointer-events-none select-none">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="text-white font-mono text-[10px] tracking-widest font-bold">360Â° VIEW</span>
          </div>

          {/* Loading Overlay */}
          {framesLoaded < Math.floor(TOTAL_FRAMES * 0.8) && (
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-[#05080D]/90 backdrop-blur-sm">
              <div className="text-[#84CC16] font-mono tracking-widest text-sm animate-pulse">
                LOADING 3D VIEW ({Math.round((framesLoaded / TOTAL_FRAMES) * 100)}%)
              </div>
            </div>
          )}

          {/* The 360 Canvas — bg matches container so no seam */}
          <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold tracking-[2px] uppercase pointer-events-none transition-opacity duration-1000 z-50 flex items-center gap-2 ${hasInteracted ? "opacity-0" : "opacity-100 animate-pulse"}`}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg> Drag to Rotate <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></div>
          <canvas 
            ref={canvasRef} 
            className="w-full h-full"
            style={{ background: '#05080D' }}
          />

          {/* â”€â”€ HOTSPOTS â”€â”€ */}
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
                    className="absolute z-10 flex items-center gap-3 bg-[#0a0a0a]/90 backdrop-blur-md border border-[#84CC16]/40 p-3 lg:p-4 rounded-xl pointer-events-none"
                    style={{
                      left: `${currentPos.x}%`,
                      top: `${currentPos.y}%`,
                      transform: 'translate(-50%, -50%)',
                      boxShadow: '0 0 18px rgba(132,204,22,0.12), 0 4px 24px rgba(0,0,0,0.7)',
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

      {/* â”€â”€ BOTTOM ROW: Details â”€â”€ */}
      <div className="w-full pb-12 lg:pb-16 px-8 lg:px-16 z-10">
        <p className="text-gray-400 text-lg lg:text-xl leading-relaxed w-full">
          The Infinity Spear is a highly portable, mission-ready anti-drone platform designed to disrupt unauthorized UAV activity with pinpoint precision. Combining ruggedized endurance and multi-spectrum frequency denial, it empowers operators to maintain control in heavily contested environments.
        </p>
      </div>

    </section>
  );
}

