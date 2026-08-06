import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'wtvw97ue',
  dataset: 'production',
  useCdn: false,
  token: 'skYhaIgOL1Go8APOJiwgiDHxQQnY9kYpMAuSsKs1IRtz6xUKWGBLsmPRlpebxLyGv0KSEOYjqQtC6KQrjFY6qrFZj9lWL0B9FkcAq8KjJSroqPiZlHvQjrQH8GP3pRZpdD7bA8vCfRbdNnmFal68XAYh9KLI9EDkgfthXA17TJp9pOw0IUDN',
  apiVersion: '2023-05-03'
});

async function fixTimestamp() {
  try {
    const doc = await client.fetch(`*[_type == "homePage"][0]`);
    if (doc) {
      // Create a copy without system fields
      const newDoc = { ...doc };
      delete newDoc._id;
      delete newDoc._createdAt;
      delete newDoc._updatedAt;
      delete newDoc._rev;

      // Create new document
      await client.create({
        ...newDoc,
        _type: 'homePage'
      });
      
      // Delete old document
      await client.delete(doc._id);
      console.log("Recreated document to fix future timestamp issue.");
    }
  } catch (err) {
    console.error("Failed:", err);
  }
}

fixTimestamp();
