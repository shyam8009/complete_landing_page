const fs = require('fs');

let c = fs.readFileSync('src/app/App.tsx', 'utf8');

c = c.replace(/import HardwarePQCPage from '\.\.\/pages\/HardwarePQC\/HardwarePQCPage';/, 
  "import HardwarePQCPage from '../pages/HardwarePQC/HardwarePQCPage';\nimport QuantumControlSystemsPage from '../pages/QuantumControlSystems/QuantumControlSystemsPage';");

c = c.replace(/<Route \n\s*path="\/quantum-technology-solutions\/quantum-communication\/hardware-based-post-quantum-cryptography" \n\s*element=\{<HardwarePQCPage \/>\} \/>/, 
  `<Route \n              path="/quantum-technology-solutions/quantum-communication/hardware-based-post-quantum-cryptography" \n              element={<HardwarePQCPage />} />\n            <Route \n              path="/quantum-technology-solutions/quantum-communication/quantum-control-systems" \n              element={<QuantumControlSystemsPage />} />`);

fs.writeFileSync('src/app/App.tsx', c);
console.log('Updated App.tsx routing');
