import { PageTreeConfig } from '@q42/sanity-plugin-page-tree'

export const pageTreeConfig: PageTreeConfig = {
  rootSchemaType: 'homePage',
  pageSchemaTypes: ['homePage', 'domain', 'system', 'product'],
  allowedParents: {
    domain: ['homePage'],
    system: ['domain'],
    product: ['system', 'domain'],
  },
  titleFieldName: 'title', // This forces the tree view to display document titles
}
