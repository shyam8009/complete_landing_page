import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const client = createClient({
  projectId: 'wtvw97ue',
  dataset: 'production',
  useCdn: false,
  token: 'skYhaIgOL1Go8APOJiwgiDHxQQnY9kYpMAuSsKs1IRtz6xUKWGBLsmPRlpebxLyGv0KSEOYjqQtC6KQrjFY6qrFZj9lWL0B9FkcAq8KjJSroqPiZlHvQjrQH8GP3pRZpdD7bA8vCfRbdNnmFal68XAYh9KLI9EDkgfthXA17TJp9pOw0IUDN',
  apiVersion: '2023-05-03'
});

async function uploadImage(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error("File not found:", filePath);
    return null;
  }
  const stream = fs.createReadStream(filePath);
  const asset = await client.assets.upload('image', stream, { filename: path.basename(filePath) });
  console.log("Uploaded:", filePath, "->", asset._id);
  return {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: asset._id
    }
  };
}

async function migrate() {
  try {
    const basePath = path.join(process.cwd(), '../src/imports');
    
    // 1. Upload images
    const heroAsset = await uploadImage(path.join(basePath, 'magnific_professional-outdoor-prod_y6xDQjJPW9.jpeg'));
    const arsenalAsset = await uploadImage(path.join(basePath, 'arsenal_facility.jpg'));
    const newsAsset1 = await uploadImage(path.join(basePath, 'news_cel_agreement.png'));
    
    // We will use another random image for the 2nd mock article
    const newsAsset2 = await uploadImage(path.join(basePath, 'corporate_house_1.jpg'));

    // 2. Fetch current document
    const doc = await client.fetch(`*[_type == "homePage"][0]`);
    if (!doc) {
      console.error("No homePage document found.");
      return;
    }

    // 3. Update pageBuilder blocks
    const updatedBlocks = doc.pageBuilder.map(block => {
      if (block._type === 'blockHero' && heroAsset) {
        return { ...block, bgImage: heroAsset };
      }
      if (block._type === 'blockArsenal' && arsenalAsset) {
        return { ...block, featuredImage: arsenalAsset };
      }
      if (block._type === 'blockNews') {
        return {
          _type: 'blockNews',
          _key: block._key,
          title: block.title || 'News & Insights',
          subLink: block.subLink || 'All articles',
          articles: [
            {
              _key: 'article_1',
              date: block.date || '06/26/2026',
              articleTitle: block.articleTitle || 'Sahana Defence Signs Strategic Manufacturing Agreement with CEL',
              articleSummary: block.articleSummary || 'Sahana Defence has entered into a Contract Agreement...',
              readMoreText: block.readMoreText || 'Read more',
              articleImage: newsAsset1
            },
            {
              _key: 'article_2',
              date: '07/15/2026',
              articleTitle: 'New Corporate Headquarters Unveiled',
              articleSummary: 'Sahana Defence announces the completion of its new state-of-the-art corporate facility, enhancing R&D capabilities for next-generation systems.',
              readMoreText: 'Read more',
              articleImage: newsAsset2
            }
          ]
        };
      }
      return block;
    });

    // 4. Patch document
    await client.patch(doc._id).set({ pageBuilder: updatedBlocks }).commit();
    console.log("Migration complete!");

  } catch (err) {
    console.error("Migration failed:", err);
  }
}

migrate();
