const fs = require('fs');

const files_to_check = [
    "src/pages/CommandControl/components/CommandControlHero.tsx",
    "src/pages/CommunicationDetection/components/CommunicationDetectionHero.tsx",
    "src/pages/CommunicationDetection/components/Hero.tsx",
    "src/pages/CommunicationMonitoring/components/CommunicationMonitoringHero.tsx",
    "src/pages/DroneSystems/components/DroneSystemsHero.tsx",
    "src/pages/ElectroOptics/components/Hero.tsx",
    "src/pages/IntelligenceSurveillance/components/IntelligenceSurveillanceHero.tsx",
    "src/pages/JammingSystems/components/JammingSystemsHero.tsx",
    "src/pages/QuantumCommunication/components/QuantumCommunicationHero.tsx",
    "src/pages/QuantumSensing/components/QuantumHero.tsx",
    "src/pages/RadarSystems/components/RadarSystemsHero.tsx"
];

for (let filepath of files_to_check) {
    if (!fs.existsSync(filepath)) {
        continue;
    }
    
    let content = fs.readFileSync(filepath, 'utf8');

    // Remove Scroll Indicator completely
    // Matches {/* 6. Scroll Indicator */} and everything up to its closing </div>
    const scrollRegex = /\{\/\*.*Scroll Indicator.*\*\/\}[^<]*<div[^>]*>[\s\S]*?Scroll to Explore[\s\S]*?<\/div>[\s\S]*?<\/div>/g;
    content = content.replace(scrollRegex, '');

    // Sometimes the comment is not there, let's just match the div containing Scroll to Explore
    const altScrollRegex = /<div className="absolute bottom-10[^>]+>[\s\S]*?Scroll to Explore[\s\S]*?<\/div>\s*<\/div>/g;
    content = content.replace(altScrollRegex, '');

    // Fix button positioning
    const buttonRegex1 = /className="absolute bottom-\d+ md:bottom-\d+ left-1\/2 -translate-x-1\/2"/g;
    content = content.replace(buttonRegex1, 'className="mt-16 md:mt-24 w-full"');
    
    const buttonRegex2 = /className="absolute bottom-\d+ left-1\/2 -translate-x-1\/2"/g;
    content = content.replace(buttonRegex2, 'className="mt-16 md:mt-24 w-full"');

    // Write back
    fs.writeFileSync(filepath, content, 'utf8');
    console.log("Fixed " + filepath);
}
