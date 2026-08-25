const fs = require('fs');
let app = fs.readFileSync('src/app/App.tsx', 'utf8');

if (!app.includes('import AboutUsPage')) {
  app = app.replace('import { Hero } from \'../pages/ElectroOptics/components/Hero\';', 'import { Hero } from \'../pages/ElectroOptics/components/Hero\';\nimport AboutUsPage from \'../pages/AboutUs/AboutUsPage\';');
}

if (!app.includes('path="/about-us"')) {
  app = app.replace('<Route path="/quantum-technology-solutions/quantum-sensing/quantum-clock-source" element={<QuantumClockSourcePage />} />', '<Route path="/quantum-technology-solutions/quantum-sensing/quantum-clock-source" element={<QuantumClockSourcePage />} />\n          <Route path="/about-us" element={<AboutUsPage />} />');
}

// Ensure the navbar correctly links About Us.
// Let's modify the <a> tag mapping in Nav desktop
const oldNav = \<a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className={\\\	ext-[15px] whitespace-nowrap transition-all duration-150 cursor-pointer flex items-center gap-1.5 \\\\}\;

const newNav = \<a
                  href={link === 'About Us' ? '/about-us' : '#'}
                  onClick={(e) => {
                    if (link !== 'About Us') e.preventDefault();
                    if (link === 'About Us') setHoveredNav(null);
                  }}
                  className={\\\	ext-[15px] whitespace-nowrap transition-all duration-150 cursor-pointer flex items-center gap-1.5 \\\\}\;

app = app.replace(oldNav, newNav);

// Also modify the mobile link
app = app.replace('<a href="#" className="py-4 border-b border-white/10 text-[18px] font-bold text-white uppercase tracking-wider">About Us</a>', '<a href="/about-us" className="py-4 border-b border-white/10 text-[18px] font-bold text-white uppercase tracking-wider">About Us</a>');

fs.writeFileSync('src/app/App.tsx', app);
