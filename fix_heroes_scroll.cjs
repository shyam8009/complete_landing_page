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
    // Let's use a simpler match: match from {/* 6. Scroll Indicator */} to the closing </div>
    const scrollRegex = /\{\/\*\s*(6\.\s*)?Scroll Indicator\s*\*\/\}\s*<div[^>]*>\s*<span[^>]*>Scroll to Explore<\/span>\s*<div[^>]*\/>\s*<\/div>/g;
    content = content.replace(scrollRegex, '');

    fs.writeFileSync(filepath, content, 'utf8');
}
