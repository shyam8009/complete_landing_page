import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const client = createClient({
  projectId: 'wtvw97ue',
  dataset: 'production',
  useCdn: false,
  token: 'skYhaIgOL1Go8APOJiwgiDHxQQnY9kYpMAuSsKs1IRtz6xUKWGBLsmPRlpebxLyGv0KSEOYjqQtC6KQrjFY6qrFZj9lWL0B9FkcAq8KjJSroqPiZlHvQjrQH8GP3pRZpdD7bA8vCfRbdNnmFal68XAYh9KLI9EDkgfthXA17TJp9pOw0IUDN',
  apiVersion: '2023-01-01',
});

async function uploadImage(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error("File not found:", filePath);
    return null;
  }
  const stream = fs.createReadStream(filePath);
  const asset = await client.assets.upload('image', stream, { filename: path.basename(filePath) });
  console.log("Uploaded:", filePath, "->", asset._id);
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

async function uploadFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const stream = fs.createReadStream(filePath);
  const asset = await client.assets.upload('file', stream, { filename: path.basename(filePath) });
  console.log("Uploaded File:", filePath, "->", asset._id);
  return { _type: 'file', asset: { _type: 'reference', _ref: asset._id } };
}

async function run() {
  console.log("Fetching products...");
  const products = await client.fetch(`*[_type == "product"]{ _id, title, "slug": slug.current, description }`);
  
  const findOrCreateProduct = async (title, slug, description) => {
    let p = products.find(x => x.title.toLowerCase().includes(title.toLowerCase()));
    if (!p) {
      console.log("Creating missing product:", title);
      p = await client.create({
        _type: 'product',
        title,
        slug: { _type: 'slug', current: slug },
        description
      });
    }
    return p;
  };

  const targetProducts = [
    { search: "Infinity Optics", slug: "infinity-optics", subtitle: "Eyes on the Mission.", desc: "A precision sensing payload designed to deliver real-time visual intelligence in dynamic operational environments. Engineered for reconnaissance, target observation, and mission awareness, Infinity Optics enhances decision-making with reliable surveillance and persistent situational visibility.", file: "magnific_extreme-closeup-macro-pro_WMNENw4cXe.png", grid: "[grid-column:1/span_4] [grid-row:1]" },
    { search: "FPV Bullseye", slug: "fpv-drone", subtitle: "Tactical FPV Strike Platform", desc: "Built for high-speed reconnaissance and precision engagement...", file: "sahana_fpv_interceptor.jpg", grid: "[grid-column:5/span_4] [grid-row:1]" },
    { search: "Infinity Spear", slug: "handheld-jammer", subtitle: "Portable Counter-UAS System", desc: "Neutralize hostile drones with high-power multi-band jamming technology...", file: "infinity_spear.jpg", grid: "[grid-column:9/span_4] [grid-row:1]", video: "Infinity_Spear.mp4", has360: true },
    { search: "RF Detector", slug: "rf-detector", subtitle: "Detect the Invisible.", desc: "Engineered to uncover signal activity...", file: "rf_detector_d360.jpg", grid: "[grid-column:1/span_4] [grid-row:2/span_2]" },
    { search: "Varuna", slug: "varuna", subtitle: "Sub-Surface Agility & Clarity.", desc: "A state-of-the-art underwater drone...", file: "varuna/magnific_a-photorealistic-underwat_3G7XWY1REY.png", grid: "[grid-column:5/span_8] [grid-row:2]" },
    { search: "Infinity Rhino", slug: "infinity-rhino", subtitle: "Defend Critical Airspace.", desc: "A mission-ready anti-drone platform...", file: "infinity_rhino.jpg", grid: "[grid-column:5/span_4] [grid-row:3]", showArrow: false },
    { search: "Digital Twin", slug: "digital-twin", subtitle: "Engineering Ports and Marine Intelligence", desc: "Protecting Borders, Assets and Strategic Infrastructure", file: "digital_twin.jpg", grid: "[grid-column:9/span_4] [grid-row:3]", showArrow: false }
  ];

  const importsDir = path.join(process.cwd(), '../src/imports');
  const blocks = [];

  for (const item of targetProducts) {
    const prod = await findOrCreateProduct(item.search, item.slug, item.desc);
    
    const imageAsset = await uploadImage(path.join(importsDir, item.file));
    let videoAsset = null;
    if (item.video) {
        videoAsset = await uploadFile(path.join(importsDir, item.video));
    }

    blocks.push({
      _key: prod._id,
      productRef: { _type: 'reference', _ref: prod._id },
      name: item.search === "FPV Bullseye" ? "FPV Bullseye & Interceptor" : (item.search === "Varuna" ? "Varuna — Underwater Drone" : prod.title),
      subtitle: item.subtitle,
      description: item.desc,
      desktopGridClass: item.grid,
      showArrow: item.showArrow !== false,
      image: imageAsset,
      ...(videoAsset ? { video360: videoAsset } : {})
    });
  }

  const homePage = await client.fetch(`*[_type == "homePage"][0]`);
  const updatedPageBuilder = homePage.pageBuilder.map(block => {
    if (block._type === 'blockProducts') {
      return { ...block, products: blocks };
    }
    return block;
  });

  await client.patch(homePage._id).set({ pageBuilder: updatedPageBuilder }).commit();
  console.log("Patched Home Page Products successfully with exact original layout!");
}

run().catch(console.error);
