import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'wtvw97ue',
  dataset: 'production',
  useCdn: false,
  token: 'skYhaIgOL1Go8APOJiwgiDHxQQnY9kYpMAuSsKs1IRtz6xUKWGBLsmPRlpebxLyGv0KSEOYjqQtC6KQrjFY6qrFZj9lWL0B9FkcAq8KjJSroqPiZlHvQjrQH8GP3pRZpdD7bA8vCfRbdNnmFal68XAYh9KLI9EDkgfthXA17TJp9pOw0IUDN',
  apiVersion: '2023-05-03'
});

async function addCors() {
  try {
    await client.request({
      method: 'POST',
      uri: '/cors',
      body: {
        origin: 'http://localhost:5173',
        credentials: true
      }
    });
    console.log("Successfully added CORS origin for localhost:5173");
  } catch (err) {
    console.error("Failed:", err.message);
  }
}

addCors();
