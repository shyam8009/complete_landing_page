const fs = require('fs');

// Update SubsystemsSection
let subsContent = fs.readFileSync('src/pages/RFDetector/components/SubsystemsSection.tsx', 'utf8');
subsContent = subsContent.replace(
  /import antennasImg from '.*';/,
  "import antennasImg from '../../../imports/rf_detector/wideband_antennas.webp';"
);
subsContent = subsContent.replace(
  /import processingImg from '.*';/,
  "import processingImg from '../../../imports/rf_detector/signal_processing_unit.webp';"
);
subsContent = subsContent.replace(
  /import mastImg from '.*';/,
  "import mastImg from '../../../imports/rf_detector/rapid_deployment_mast.webp';"
);
fs.writeFileSync('src/pages/RFDetector/components/SubsystemsSection.tsx', subsContent, 'utf8');

// Update UseCasesSection
let useCasesContent = fs.readFileSync('src/pages/RFDetector/components/UseCasesSection.tsx', 'utf8');
useCasesContent = useCasesContent.replace(
  /import fobImg from '.*';/,
  "import fobImg from '../../../imports/rf_detector/forward_operating_bases.webp';"
);
useCasesContent = useCasesContent.replace(
  /import borderImg from '.*';/,
  "import borderImg from '../../../imports/rf_detector/border_surveillance.webp';"
);
useCasesContent = useCasesContent.replace(
  /import vipImg from '.*';/,
  "import vipImg from '../../../imports/rf_detector/vip_event_security.webp';"
);
fs.writeFileSync('src/pages/RFDetector/components/UseCasesSection.tsx', useCasesContent, 'utf8');

console.log('RF Detector Images Updated successfully');
