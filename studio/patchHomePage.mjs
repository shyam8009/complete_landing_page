import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'wtvw97ue',
  dataset: 'production',
  useCdn: false,
  token: 'skYhaIgOL1Go8APOJiwgiDHxQQnY9kYpMAuSsKs1IRtz6xUKWGBLsmPRlpebxLyGv0KSEOYjqQtC6KQrjFY6qrFZj9lWL0B9FkcAq8KjJSroqPiZlHvQjrQH8GP3pRZpdD7bA8vCfRbdNnmFal68XAYh9KLI9EDkgfthXA17TJp9pOw0IUDN',
  apiVersion: '2023-01-01',
});

async function patchHomePage() {
  console.log("Patching Home Page with smart references...");

  // 1. Fetch 4 random products
  const products = await client.fetch(`*[_type == "product"][0...4]`);
  if (!products.length) {
    console.log("No products found.");
    return;
  }

  // 2. Fetch or create a news article
  let articles = await client.fetch(`*[_type == "newsArticle"][0...2]`);
  if (!articles.length) {
    console.log("No news articles found, creating one...");
    const newArticle = await client.create({
      _type: 'newsArticle',
      title: 'Sahana Defence Signs Strategic Manufacturing Agreement with CEL',
      slug: { _type: 'slug', current: 'cel-agreement' },
      publishDate: '2026-06-26',
      summary: 'Sahana Defence has entered into a Contract Agreement with Central Electronics Limited (CEL), paving the way for joint development and production of next-generation defense technologies.',
      readMoreText: 'Read more'
    });
    articles = [newArticle];
  }

  // 3. Fetch Home Page
  const homePage = await client.fetch(`*[_type == "homePage"][0]`);
  if (!homePage) {
    console.log("No home page found.");
    return;
  }

  // 4. Update pageBuilder
  const updatedBlocks = homePage.pageBuilder.map(block => {
    if (block._type === 'blockProducts') {
      return {
        ...block,
        products: products.map((p, i) => ({
          _key: p._id,
          productRef: { _type: 'reference', _ref: p._id },
          name: p.title,
          description: p.description || '',
          desktopGridClass: i === 0 ? '[grid-column:1/span_4] [grid-row:1]' :
                            i === 1 ? '[grid-column:5/span_4] [grid-row:1]' :
                            i === 2 ? '[grid-column:9/span_4] [grid-row:1/span_2]' :
                            '[grid-column:5/span_4] [grid-row:2]'
        }))
      };
    }
    if (block._type === 'blockNews') {
      return {
        ...block,
        articles: articles.map(a => ({
          _key: a._id,
          _type: 'reference',
          _ref: a._id
        }))
      };
    }
    return block;
  });

  await client.patch(homePage._id).set({ pageBuilder: updatedBlocks }).commit();
  console.log("Home Page successfully patched!");
}

patchHomePage().catch(console.error);
