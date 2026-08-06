import { getCliClient } from 'sanity/cli';

const client = getCliClient();

async function migrate() {
  console.log('Fetching category documents...');
  const categories = await client.fetch(`*[_type == "category"]`);
  console.log(`Found ${categories.length} categories to migrate.`);

  const transaction = client.transaction();

  for (const cat of categories) {
    // 1. Create the new taxonomyNode document with a new ID
    const newId = `taxonomy-${cat._id}`;
    
    transaction.createOrReplace({
      _id: newId,
      _type: 'taxonomyNode',
      title: cat.title,
      slug: cat.slug,
      // Map parentCategory to parent (using the new ID format)
      ...(cat.parentCategory ? {
        parent: {
          _type: 'reference',
          _ref: `taxonomy-${cat.parentCategory._ref}`
        }
      } : {})
    });

    // 2. Find all products that reference this category and update them to point to the new taxonomyNode
    const referencingProducts = await client.fetch(`*[_type == "product" && category._ref == "${cat._id}"]`);
    for (const prod of referencingProducts) {
      transaction.patch(prod._id, (p) => p.set({
        category: {
          _type: 'reference',
          _ref: newId
        }
      }));
    }

    // 3. Delete the old category document
    transaction.delete(cat._id);
  }

  // 4. Update references in navigationMenu
  const navMenus = await client.fetch(`*[_type == "navigationMenu"]`);
  for (const menu of navMenus) {
    let changed = false;
    const newItems = menu.items?.map((item: any) => {
      if (item.categories) {
        const newCats = item.categories.map((c: any) => {
          if (!c._ref.startsWith('taxonomy-')) {
            changed = true;
            return { ...c, _ref: `taxonomy-${c._ref}` };
          }
          return c;
        });
        return { ...item, categories: newCats };
      }
      return item;
    });

    if (changed) {
      transaction.patch(menu._id, (p) => p.set({ items: newItems }));
    }
  }

  console.log('Committing transaction...');
  try {
    await transaction.commit();
    console.log('Migration successful!');
  } catch (err) {
    console.error('Migration failed:', err);
  }
}

migrate();
