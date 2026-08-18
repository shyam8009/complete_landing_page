const fs = require('fs');
let content = fs.readFileSync('src/components/InteractiveBlueprint.tsx', 'utf8');

const oldGsap =   useGSAP(() => {
    if (!containerRef.current || !svgLineRef.current) return;

    // Calculate total path length for drawing animation
    const pathLength = svgLineRef.current.getTotalLength();
    gsap.set(svgLineRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

    // Hide all right panels except the first one initially
    gsap.set(rightPanelsRef.current.slice(1), { autoAlpha: 0, rotationX: 10, y: 30, transformPerspective: 1000 });
    gsap.set(rightPanelsRef.current[0], { autoAlpha: 1, rotationX: 0, y: 0, transformPerspective: 1000 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=2000', // Scroll duration for the entire section
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          let current = 0;
          if (self.progress > 0.66) current = 2;
          else if (self.progress > 0.33) current = 1;
          
          if (current !== activeTier) {
            setActiveTier(current);
          }
        }
      }
    });

    // Animate the line drawing down across the whole scroll duration
    tl.to(svgLineRef.current, { strokeDashoffset: 0, ease: 'none', duration: 3 }, 0);

    // Cross-fade animations for panels tied to scroll progress
    tl.to(rightPanelsRef.current[0], { autoAlpha: 0, rotationX: -10, y: -30, duration: 0.5, ease: 'power2.inOut' }, 0.8);
    tl.to(rightPanelsRef.current[1], { autoAlpha: 1, rotationX: 0, y: 0, duration: 0.5, ease: 'power2.out' }, 1.0);

    tl.to(rightPanelsRef.current[1], { autoAlpha: 0, rotationX: -10, y: -30, duration: 0.5, ease: 'power2.inOut' }, 1.8);
    tl.to(rightPanelsRef.current[2], { autoAlpha: 1, rotationX: 0, y: 0, duration: 0.5, ease: 'power2.out' }, 2.0);

  }, { scope: containerRef });;

const newGsap =   useGSAP(() => {
    if (!containerRef.current || !svgLineRef.current) return;

    let mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const pathLength = svgLineRef.current.getTotalLength();
      gsap.set(svgLineRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

      gsap.set(rightPanelsRef.current.slice(1), { autoAlpha: 0, rotationX: 10, y: 30, transformPerspective: 1000 });
      gsap.set(rightPanelsRef.current[0], { autoAlpha: 1, rotationX: 0, y: 0, transformPerspective: 1000 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=2000',
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            let current = 0;
            if (self.progress > 0.66) current = 2;
            else if (self.progress > 0.33) current = 1;
            if (current !== activeTier) setActiveTier(current);
          }
        }
      });

      tl.to(svgLineRef.current, { strokeDashoffset: 0, ease: 'none', duration: 3 }, 0);
      tl.to(rightPanelsRef.current[0], { autoAlpha: 0, rotationX: -10, y: -30, duration: 0.5, ease: 'power2.inOut' }, 0.8);
      tl.to(rightPanelsRef.current[1], { autoAlpha: 1, rotationX: 0, y: 0, duration: 0.5, ease: 'power2.out' }, 1.0);
      tl.to(rightPanelsRef.current[1], { autoAlpha: 0, rotationX: -10, y: -30, duration: 0.5, ease: 'power2.inOut' }, 1.8);
      tl.to(rightPanelsRef.current[2], { autoAlpha: 1, rotationX: 0, y: 0, duration: 0.5, ease: 'power2.out' }, 2.0);
    });

  }, { scope: containerRef });;

content = content.replace(oldGsap, newGsap);
fs.writeFileSync('src/components/InteractiveBlueprint.tsx', content);
