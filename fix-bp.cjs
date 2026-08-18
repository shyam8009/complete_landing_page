const fs = require('fs');
let content = fs.readFileSync('src/components/InteractiveBlueprint.tsx', 'utf8');

// Fix literal \n
content = content.replace(/\\n/g, ' ');

// Add mobile active indicator
content = content.replace(
  /{tier\.title}\s*<\/h3>/, 
  '{tier.title}\n                  </h3>\n                  {/* Mobile active indicator (bottom border) */}\n                  <div className={bsolute bottom-[-16px] left-0 w-full h-1 transition-all duration-500 md:hidden } />'
);

fs.writeFileSync('src/components/InteractiveBlueprint.tsx', content);
