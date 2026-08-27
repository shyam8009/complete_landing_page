const fs = require('fs');

let fileContent = fs.readFileSync('src/pages/SurveillanceRadar/components/SubsystemsSection.tsx', 'utf8');

fileContent = fileContent.replace(
  /import radarImg1 from '.*';/,
  "import radarImg1 from '../../../imports/surveillance_radar/very_short_range.webp';"
);
fileContent = fileContent.replace(
  /import radarImg2 from '.*';/,
  "import radarImg2 from '../../../imports/surveillance_radar/short_range.webp';"
);
fileContent = fileContent.replace(
  /import radarImg3 from '.*';/,
  "import radarImg3 from '../../../imports/surveillance_radar/medium_range.webp';"
);

fs.writeFileSync('src/pages/SurveillanceRadar/components/SubsystemsSection.tsx', fileContent, 'utf8');
console.log('Updated Surveillance Radar Subsystems');
