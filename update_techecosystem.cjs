const fs = require('fs');
let content = fs.readFileSync('src/pages/ConnectivityInfrastructure/components/TechEcosystem.tsx', 'utf8');

// Add useNavigate
if (!content.includes('useNavigate')) {
  content = content.replace(/import \{ useGSAP \} from '@gsap\/react';/, "import { useGSAP } from '@gsap/react';\nimport { useNavigate } from 'react-router';");
}

// Add slugs
content = content.replace(/img: imgIoT\r?\n  },/, "img: imgIoT,\n    slug: '/solution/defence-deeptech/internet-of-things'\n  },");
content = content.replace(/img: imgCloud\r?\n  },/, "img: imgCloud,\n    slug: '/solution/defence-deeptech/cloud-services'\n  },");
content = content.replace(/img: imgStream\r?\n  }/, "img: imgStream,\n    slug: '#'\n  }");

// Add navigate hook
if (!content.includes('const navigate = useNavigate()')) {
  content = content.replace(/export function TechEcosystem\(\) \{/, "export function TechEcosystem() {\n  const navigate = useNavigate();");
}

// Add onClick
content = content.replace(/<TechCTA theme="dark">/g, "<TechCTA theme=\"dark\" onClick={() => item.slug && item.slug !== '#' && navigate(item.slug)}>");

fs.writeFileSync('src/pages/ConnectivityInfrastructure/components/TechEcosystem.tsx', content);
console.log('TechEcosystem updated');
