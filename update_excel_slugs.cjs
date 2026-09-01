const fs = require('fs');
const path = require('path');

const slugMapping = {
  "/fpv-buddy": "/electronic-warfare/drone-systems/sahana-fpv-drone-buddy",
  "/sahana-fpv": "/electronic-warfare/drone-systems/fpv-bullseye-interceptor",
  "/varuna": "/electronic-warfare/drone-systems/sahana-varuna-underwater-drone",
  "/proxy": "/electronic-warfare/drone-systems/sahana-proxy-control-channel",
  "/drone-radar": "/electronic-warfare/radar-systems/3d-drone-radar",
  "/surveillance-radar": "/electronic-warfare/radar-systems/surveillance-radar",
  "/infinity-spear": "/electronic-warfare/jamming-systems/handheld-jammer-infinity-spear",
  "/infinity-rhino": "/electronic-warfare/jamming-systems/manpack-jammer-infinity-rhino",
  "/butterfly-adg": "/electronic-warfare/jamming-systems/butterfly-adg",
  "/rhino-gen-z23": "/electronic-warfare/jamming-systems/rhino-gen",
  "/infinity-rhino-black": "/electronic-warfare/jamming-systems/infinity-rhino-black",
  "/rf-detector": "/electronic-warfare/detection-systems/rf-detector",
  "/lorros-communication": "/electronic-warfare/communication-system/lorros-communication",
  "/guardian-experience": "/electronic-warfare/communication-system/the-guardian-smart-soldier-band",
  "/osint": "/information-warfare/intelligence-surveillance/open-source-intelligence-osint",
  "/sigint": "/information-warfare/intelligence-surveillance/signal-intelligence",
  "/security-assessment": "/information-warfare/intelligence-surveillance/comprehensive-security-assessment",
  "/fusion-c2": "/information-warfare/command-control/fusion-core-ai-command-and-control-c2",
  "/interception-system": "/information-warfare/command-control/interception-system",
  "/radio-monitoring": "/information-warfare/communication-monitoring/radio-monitoring-and-location-portfolio",
  "/direction-finders": "/information-warfare/communication-monitoring/direction-finders",
  "/aerospace-components": "/aerospace-and-defence/manufacturing-fabrication/aerospace-components",
  "/defence-components": "/aerospace-and-defence/manufacturing-fabrication/defence-components",
  "/satcom-components": "/aerospace-and-defence/manufacturing-fabrication/satcom-components",
  "/solution/chatbots-voice": "/defence-deeptech/ai-data/chatbots-and-voice-solution",
  "/solution/big-data-bi": "/defence-deeptech/ai-data/big-data-and-business-intelligence",
  "/solution/artificial-intelligence": "/defence-deeptech/ai-data/artificial-intelligence",
  "/solution/defence-deeptech/internet-of-things": "/defence-deeptech/connectivity-infrastructure/internet-of-things",
  "/solution/defence-deeptech/cloud-services": "/defence-deeptech/connectivity-infrastructure/cloud-services",
  "/solution/defence-deeptech/video-streaming": "/defence-deeptech/connectivity-infrastructure/video-streaming-services"
};

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const replaceInFile = (filePath) => {
  if (!fs.existsSync(filePath)) {
    console.log('File not found: ' + filePath);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [oldSlug, newSlug] of Object.entries(slugMapping)) {
    const escapedOldSlug = escapeRegExp(oldSlug);
    
    // In App.tsx: path="/old-slug"
    const regex1 = new RegExp('path="' + escapedOldSlug + '"', 'g');
    if (regex1.test(content)) {
      content = content.replace(regex1, 'path="' + newSlug + '"');
      changed = true;
    }

    // In capabilities_data.tsx: slug: "/old-slug"
    const regex2 = new RegExp('slug:\\s*"' + escapedOldSlug + '"', 'g');
    if (regex2.test(content)) {
      content = content.replace(regex2, 'slug: "' + newSlug + '"');
      changed = true;
    }

    // In TechEcosystem.tsx: slug: '/old-slug'
    const regex3 = new RegExp("slug:\\s*'" + escapedOldSlug + "'", 'g');
    if (regex3.test(content)) {
      content = content.replace(regex3, "slug: '" + newSlug + "'");
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated slugs in ' + filePath);
  }
};

replaceInFile('src/app/App.tsx');
replaceInFile('src/app/capabilities_data.tsx');
replaceInFile('src/pages/ConnectivityInfrastructure/components/TechEcosystem.tsx');

console.log('Slug update script finished.');
