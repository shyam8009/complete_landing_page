import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'wtvw97ue',
  dataset: 'production',
  useCdn: false,
  token: 'skYhaIgOL1Go8APOJiwgiDHxQQnY9kYpMAuSsKs1IRtz6xUKWGBLsmPRlpebxLyGv0KSEOYjqQtC6KQrjFY6qrFZj9lWL0B9FkcAq8KjJSroqPiZlHvQjrQH8GP3pRZpdD7bA8vCfRbdNnmFal68XAYh9KLI9EDkgfthXA17TJp9pOw0IUDN',
  apiVersion: '2023-05-03'
});

async function updateWarfare() {
  try {
    const doc = await client.fetch(`*[_type == "homePage"][0]`);
    if (doc && doc.pageBuilder) {
      const updatedBlocks = doc.pageBuilder.map(block => {
        if (block._type === 'blockProducts') {
          return {
            ...block,
            title: "Warfare"
          };
        }
        return block;
      });

      await client.patch(doc._id).set({ pageBuilder: updatedBlocks }).commit();
      console.log("Successfully updated Products Grid Block to 'Warfare' in Sanity.");
    }
  } catch (err) {
    console.error("Failed:", err);
  }
}

updateWarfare();
