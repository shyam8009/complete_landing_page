const fs = require('fs');

// ==========================================
// FIX 1: App.tsx - Critical setMobileMenuOpen bug
// ==========================================
let app = fs.readFileSync('src/app/App.tsx', 'utf8');

// Fix the two broken setMobileMenuOpen calls
app = app.replace(
  /onClick=\{.*setMobileMenuOpen\(false\).*\}>Newsroom/,
  'onClick={() => { setMobileOpen(false); }}>Newsroom'
);
app = app.replace(
  'onClick={() => setMobileMenuOpen(false)}',
  'onClick={() => setMobileOpen(false)}'
);
app = app.replace(
  /onContactClick\(\);\s*setMobileMenuOpen\(false\)/,
  'onContactClick(); setMobileOpen(false);'
);

console.log('FIX 1: setMobileMenuOpen → setMobileOpen occurrences replaced:', (app.match(/setMobileMenuOpen/g) || []).length, 'remaining');

// ==========================================
// FIX 2: App.tsx - Mobile drawer inset-0 vs dynamic top conflict
// ==========================================
app = app.replace(
  /`lg:hidden fixed inset-0 bg-\[#05080D\] z-40 overflow-y-auto \$\{scrolled \? "top-\[80px\]" : "top-\[86px\]"\}/,
  '`lg:hidden fixed bottom-0 left-0 right-0 bg-[#05080D] z-40 overflow-y-auto ${scrolled ? "top-[80px]" : "top-[86px]"}'
);

console.log('FIX 2: Mobile drawer inset-0 → bottom-0 left-0 right-0 applied');

// ==========================================
// FIX 3: App.tsx - Mega menu w-[100vw] → w-full (only for outer mega-menu containers, not carousel panels)
// ==========================================
// Only fix the two fixed-positioned mega menu outer wrappers (Capabilities & Investors)
// These use "hidden lg:block fixed left-0 w-[100vw]" - replace ONLY those
app = app.replace(
  /`hidden lg:block fixed left-0 w-\[100vw\] bg-\[#05080D\] transition-all duration-300 origin-top z-40/g,
  '`hidden lg:block fixed left-0 w-full bg-[#05080D] transition-all duration-300 origin-top z-40'
);
app = app.replace(
  /`hidden lg:block fixed left-0 w-\[100vw\] bg-\[#05080D\] transition-all duration-300 origin-top overflow-hidden z-40/g,
  '`hidden lg:block fixed left-0 w-full bg-[#05080D] transition-all duration-300 origin-top overflow-hidden z-40'
);

console.log('FIX 3: Mega-menu w-[100vw] → w-full applied');

fs.writeFileSync('src/app/App.tsx', app);
console.log('✅ App.tsx fixes written.');

// ==========================================
// FIX 4: theme.css - Remove SVG height: auto (causes icon distortion)
//         + Scope @media (hover: none) to only opacity-related items (not translate)
// ==========================================
let css = fs.readFileSync('src/styles/theme.css', 'utf8');

// Fix SVG global height: auto - change the rule so SVG is excluded
css = css.replace(
  /img, video, svg \{\s*max-width: 100%;\s*height: auto;\s*\}/,
  `img, video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  img {\n    display: block;\n  }`
);

// Fix @media (hover: none) - remove the translate override (only keep opacity for touch accessibility)
// The translate override breaks desktop hover animations on hybrid devices
css = css.replace(
  `@media (hover: none) {
    .group:hover .group-hover\\:opacity-100 {
      opacity: 1 !important;
    }
    .group:hover .group-hover\\:translate-y-0 {
      transform: translateY(0) !important;
    }
    .group-hover\\:opacity-100 {
      opacity: 1 !important;
    }
    .hover\\:opacity-100 {
      opacity: 1 !important;
    }
  }`,
  `@media (hover: none) and (pointer: coarse) {
    /* Touch-only devices: reveal content that is hidden behind hover-only interactions */
    .group-hover\\:opacity-100 {
      opacity: 1 !important;
    }
    .hover\\:opacity-100 {
      opacity: 1 !important;
    }
  }`
);

fs.writeFileSync('src/styles/theme.css', css);
console.log('✅ theme.css fixes written.');

// ==========================================
// FIX 5: VideoScrollHero.tsx - Fix reduced-motion early return leaving overlays invisible
// ==========================================
let hero = fs.readFileSync('src/components/VideoScrollHero.tsx', 'utf8');

hero = hero.replace(
  `    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;`,
  `    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
      // Reduced motion: make all overlays visible statically so content is accessible
      const allRefs = [textEWRef, textTitleRef, textSpeedLabelRef, spec1Ref, spec2Ref, spec3Ref, ctaRef];
      allRefs.forEach(ref => {
        if (ref.current) ref.current.style.opacity = '1';
      });
      return;
    }`
);

fs.writeFileSync('src/components/VideoScrollHero.tsx', hero);
console.log('✅ VideoScrollHero.tsx reduced-motion fix written.');

console.log('\n✅ All 5 regression fixes applied successfully.');
