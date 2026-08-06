import { createClient } from '@sanity/client';
import crypto from 'crypto';

const client = createClient({
  projectId: 'wtvw97ue',
  dataset: 'production',
  useCdn: false,
  token: 'skYhaIgOL1Go8APOJiwgiDHxQQnY9kYpMAuSsKs1IRtz6xUKWGBLsmPRlpebxLyGv0KSEOYjqQtC6KQrjFY6qrFZj9lWL0B9FkcAq8KjJSroqPiZlHvQjrQH8GP3pRZpdD7bA8vCfRbdNnmFal68XAYh9KLI9EDkgfthXA17TJp9pOw0IUDN',
  apiVersion: '2023-01-01'
});

async function run() {
  const homePages = await client.fetch(`*[_type == "homePage"]`);
  console.log("Found", homePages.length, "homePage documents.");
  
  for (const homePage of homePages) {
    let needsPatch = false;
    const updatedPageBuilder = homePage.pageBuilder?.map(block => {
      if (block._type === 'blockNews' && block.articles) {
        return {
          ...block,
          articles: block.articles.map(article => {
            if (!article._key) {
              needsPatch = true;
              return { ...article, _key: crypto.randomBytes(8).toString('hex') };
            }
            return article;
          })
        };
      }
      return block;
    });

    if (needsPatch) {
      await client.patch(homePage._id).set({ pageBuilder: updatedPageBuilder }).commit();
      console.log(`Patched document: ${homePage._id}`);
    } else {
      console.log(`Document ${homePage._id} already has all keys.`);
    }
  }
}

run().catch(console.error);
