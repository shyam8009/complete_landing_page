const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// The new nav has duplicated imports/constants that already exist in App.tsx globally. Let's strip them from the middle of the file.
code = code.replace("import React, { useState, useEffect, useRef } from 'react';", "");
code = code.replace("import { useNavigate } from 'react-router-dom';", "");
code = code.replace("import { AndurilLogo } from '../components/AndurilLogo';", "");
code = code.replace("import capsuleIcon from '../imports/capsule_icon.png';", "");
code = code.replace("import { sanityClient } from '../cms/sanity';", "");

code = code.replace("const INTER = \"'Inter', sans-serif\";", "");

const arrowRegex = /const MiniArrow = \(\{ color = \"white\" \}\) => \([\s\S]*?<\/svg>\n\);/g;
code = code.replace(arrowRegex, "");

fs.writeFileSync('src/app/App.tsx', code);
console.log('Cleaned up App.tsx');
