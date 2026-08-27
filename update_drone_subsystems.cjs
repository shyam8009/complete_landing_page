const fs = require('fs');

let fileContent = fs.readFileSync('src/pages/DroneRadar/components/SubsystemsSection.tsx', 'utf8');

fileContent = fileContent.replace(
  /import imgAntenna from '.*';/,
  "import imgAntenna from '../../../imports/drone_radar_3d/aesa_antenna_array.webp';"
);
fileContent = fileContent.replace(
  /import imgProcessing from '.*';/,
  "import imgProcessing from '../../../imports/drone_radar_3d/ai_threat_classifier.webp';"
);
fileContent = fileContent.replace(
  /import imgMast from '.*';/,
  "import imgMast from '../../../imports/drone_radar_3d/c2_integration.webp';"
);

fs.writeFileSync('src/pages/DroneRadar/components/SubsystemsSection.tsx', fileContent, 'utf8');
console.log('Updated Drone Radar Subsystems');
