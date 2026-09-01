const fs = require('fs');

let c = fs.readFileSync('src/app/capabilities_data.tsx', 'utf8');

c = c.replace(
  /{ id: "quantum-control", title: "Quantum Control Systems", image: osintDashboardImg, slug: "home" }/,
  '{ id: "quantum-control", title: "Quantum Control Systems", image: osintDashboardImg, slug: "/quantum-technology-solutions/quantum-communication/quantum-control-systems" }'
);

fs.writeFileSync('src/app/capabilities_data.tsx', c);
console.log('Updated capabilities_data.tsx for Quantum Control Systems slug');
