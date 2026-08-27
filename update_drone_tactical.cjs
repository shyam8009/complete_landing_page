const fs = require('fs');

let fileContent = fs.readFileSync('src/pages/DroneRadar/components/UseCasesSection.tsx', 'utf8');

fileContent = fileContent.replace(
  /import motorcadeImg from '.*';/,
  "import motorcadeImg from '../../../imports/drone_radar_3d/airspace_monitoring.webp';"
);
fileContent = fileContent.replace(
  /import convoyImg from '.*';/,
  "import convoyImg from '../../../imports/drone_radar_3d/border_surveillance.webp';"
);
fileContent = fileContent.replace(
  /import baseImg from '.*';/,
  "import baseImg from '../../../imports/drone_radar_3d/asset_protection.webp';"
);

fs.writeFileSync('src/pages/DroneRadar/components/UseCasesSection.tsx', fileContent, 'utf8');
console.log('Updated Drone Radar Use Cases');
