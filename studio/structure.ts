import { StructureBuilder } from 'sanity/desk'
import { createPageTreeDocumentList } from '@q42/sanity-plugin-page-tree'
import { pageTreeConfig } from './pageTreeConfig'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Hierarchy & Content')
        .child(
          createPageTreeDocumentList(S, {
            config: pageTreeConfig,
            extendDocumentList: (builder) => builder.id('homePage').title('Hierarchy (Tree View)'),
          })
        ),
      // We will let the Umbraco layout handle routing to the separate /media and /settings pages
    ])
