const fs = require('fs');

const pathStr = 'src/pages/QuantumControlSystems/components/SoftwareLayers.tsx';
let content = fs.readFileSync(pathStr, 'utf8');

content = content.replace("@/imports/c2_integration.webp", "@/imports/drone_radar_3d/c2_integration.webp");

fs.writeFileSync(pathStr, content);
console.log('Fixed import');
