const fs = require('fs');

let appTsx = fs.readFileSync('src/app/App.tsx', 'utf8');

if (!appTsx.includes('CloudServicesPage')) {
  appTsx = appTsx.replace(
    /import \{ IoTPage \} from '\.\.\/pages\/IoT\/IoTPage';/,
    "import { IoTPage } from '../pages/IoT/IoTPage';\nimport { CloudServicesPage } from '../pages/CloudServices/CloudServicesPage';"
  );
}

if (!appTsx.includes('path="/solution/defence-deeptech/cloud-services"')) {
  appTsx = appTsx.replace(
    /<Route path="\/solution\/defence-deeptech\/internet-of-things"/,
    "<Route path=\"/solution/defence-deeptech/cloud-services\" element={<CloudServicesPage />} />\n            <Route path=\"/solution/defence-deeptech/internet-of-things\""
  );
}

fs.writeFileSync('src/app/App.tsx', appTsx);

let dataTsx = fs.readFileSync('src/app/capabilities_data.tsx', 'utf8');
dataTsx = dataTsx.replace(
  /{ id: "cloud", title: "Cloud Services", image: corporateHouse1, slug: "home" }/g,
  '{ id: "cloud", title: "Cloud Services", image: corporateHouse1, slug: "/solution/defence-deeptech/cloud-services" }'
);
fs.writeFileSync('src/app/capabilities_data.tsx', dataTsx);

console.log('App.tsx and capabilities_data.tsx updated.');
