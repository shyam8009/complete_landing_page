const fs = require('fs');

const file = 'src/pages/DroneSystems/components/DroneSystemsEcosystem.tsx';
let content = fs.readFileSync(file, 'utf8');

// The proxy channel across 1.2 to 3.5
content = content.replace(/1\.2[^\d]*3\.5/g, '1.2–3.5');
// The 200 to 250
content = content.replace(/200[^\d]*250/g, '200–250');
// Sahana PROXY to Control Channel
content = content.replace(/PROXY[^a-zA-Z]*Control/g, 'PROXY — Control');
// 4 to 6 m mast
content = content.replace(/4[^a-zA-Z0-9]*6 m/g, '4–6 m');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed DroneSystemsEcosystem specific artifacts');
