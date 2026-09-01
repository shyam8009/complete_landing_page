const fs = require('fs');

const files = [
  'src/pages/3DDetectionRadar/components/PipelineSection.tsx',
  'src/pages/OSINT/components/PipelineSection.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/import React, \{ useRef, useLayoutEffect, useState \} from 'react';/, "import React, { useEffect, useRef } from 'react';");
  fs.writeFileSync(file, content);
  console.log('Fixed', file);
});
