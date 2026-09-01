const fs = require('fs');

let appTsx = fs.readFileSync('src/app/App.tsx', 'utf8');

if (!appTsx.includes('IoTPage')) {
  appTsx = appTsx.replace(
    /import \{ AIPage \} from '\.\.\/pages\/ArtificialIntelligence\/AIPage';/,
    "import { AIPage } from '../pages/ArtificialIntelligence/AIPage';\nimport { IoTPage } from '../pages/IoT/IoTPage';"
  );
}

if (!appTsx.includes('path="/solution/defence-deeptech/internet-of-things"')) {
  appTsx = appTsx.replace(
    /<Route path="\/solution\/defence-deeptech\/connectivity-infrastructure"/,
    "<Route path=\"/solution/defence-deeptech/internet-of-things\" element={<IoTPage />} />\n            <Route path=\"/solution/defence-deeptech/connectivity-infrastructure\""
  );
}

fs.writeFileSync('src/app/App.tsx', appTsx);

let dataTsx = fs.readFileSync('src/app/capabilities_data.tsx', 'utf8');
dataTsx = dataTsx.replace(
  /{ id: "iot", title: "Internet of Things", image: corporateHouse3, slug: "home" }/g,
  '{ id: "iot", title: "Internet of Things", image: corporateHouse3, slug: "/solution/defence-deeptech/internet-of-things" }'
);
fs.writeFileSync('src/app/capabilities_data.tsx', dataTsx);

console.log('App.tsx and capabilities_data.tsx updated.');
