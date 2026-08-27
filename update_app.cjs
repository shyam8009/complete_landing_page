const fs = require('fs');

let c = fs.readFileSync('src/app/App.tsx', 'utf8');

c = c.replace(/import QuantumCommunicationPage from '\.\.\/pages\/QuantumCommunication\/QuantumCommunicationPage';/, 
              "import QuantumSecuredCommunicationPage from '../pages/QuantumSecuredCommunication/QuantumSecuredCommunicationPage';");

c = c.replace(/<Route path="\/quantum-technology-solutions\/quantum-communication" element={<QuantumCommunicationPage \/>} \/>/,
              '<Route path="/quantum-technology-solutions/quantum-communication/quantum-secured-communication" element={<QuantumSecuredCommunicationPage />} />');

// also replace any other occurrences in App.tsx Dropdown menus if it existed, but let's check if it exists in SOLUTIONS_DATA
c = c.replace(/\/quantum-technology-solutions\/quantum-communication"/g, '"/quantum-technology-solutions/quantum-communication/quantum-secured-communication"');
c = c.replace(/\/quantum-technology-solutions\/quantum-communication'/g, "'/quantum-technology-solutions/quantum-communication/quantum-secured-communication'");

fs.writeFileSync('src/app/App.tsx', c);
console.log('Updated App.tsx');
