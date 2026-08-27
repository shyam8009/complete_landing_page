const fs = require('fs');

let c = fs.readFileSync('src/app/capabilities_data.tsx', 'utf8');

c = c.replace(/slug: "\/quantum-technology-solutions\/quantum-communication"/, 'slug: "/quantum-technology-solutions/quantum-communication/quantum-secured-communication"');

fs.writeFileSync('src/app/capabilities_data.tsx', c);
console.log('Fixed capabilities_data.tsx');
