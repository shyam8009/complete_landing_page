import { createClient } from '@sanity/client';
const client = createClient({
  projectId: 'wtvw97ue',
  dataset: 'production',
  useCdn: false,
  token: 'skYhaIgOL1Go8APOJiwgiDHxQQnY9kYpMAuSsKs1IRtz6xUKWGBLsmPRlpebxLyGv0KSEOYjqQtC6KQrjFY6qrFZj9lWL0B9FkcAq8KjJSroqPiZlHvQjrQH8GP3pRZpdD7bA8vCfRbdNnmFal68XAYh9KLI9EDkgfthXA17TJp9pOw0IUDN',
  apiVersion: '2023-01-01'
});
client.fetch(`*[_type == "homePage"][0] { pageBuilder[ _type == "blockProducts" ] { products[] { name, showArrow } } }`)
  .then(res => console.log(JSON.stringify(res, null, 2)))
  .catch(console.error);
