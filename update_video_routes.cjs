const fs = require('fs');

// 1. Update App.tsx
let appTsx = fs.readFileSync('src/app/App.tsx', 'utf8');

if (!appTsx.includes('VideoStreamingPage')) {
  appTsx = appTsx.replace(
    /import \{ CloudServicesPage \} from '\.\.\/pages\/CloudServices\/CloudServicesPage';/,
    "import { CloudServicesPage } from '../pages/CloudServices/CloudServicesPage';\nimport { VideoStreamingPage } from '../pages/VideoStreaming/VideoStreamingPage';"
  );
}

if (!appTsx.includes('path="/solution/defence-deeptech/video-streaming"')) {
  appTsx = appTsx.replace(
    /<Route path="\/solution\/defence-deeptech\/cloud-services"/,
    "<Route path=\"/solution/defence-deeptech/video-streaming\" element={<VideoStreamingPage />} />\n            <Route path=\"/solution/defence-deeptech/cloud-services\""
  );
}

fs.writeFileSync('src/app/App.tsx', appTsx);

// 2. Update capabilities_data.tsx
let dataTsx = fs.readFileSync('src/app/capabilities_data.tsx', 'utf8');
dataTsx = dataTsx.replace(
  /{ id: "video", title: "Video Streaming Services", image: corporateHouse2, slug: "home" }/g,
  '{ id: "video", title: "Video Streaming Services", image: corporateHouse2, slug: "/solution/defence-deeptech/video-streaming" }'
);
fs.writeFileSync('src/app/capabilities_data.tsx', dataTsx);

// 3. Update TechEcosystem.tsx
let ecoTsx = fs.readFileSync('src/pages/ConnectivityInfrastructure/components/TechEcosystem.tsx', 'utf8');
ecoTsx = ecoTsx.replace(
  /slug: '#'/g,
  "slug: '/solution/defence-deeptech/video-streaming'"
);
fs.writeFileSync('src/pages/ConnectivityInfrastructure/components/TechEcosystem.tsx', ecoTsx);

console.log('Routes and Navbar links for Video Streaming updated.');
