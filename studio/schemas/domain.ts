import { defineField, defineType } from 'sanity'
import { definePageType } from '@q42/sanity-plugin-page-tree'
import { pageTreeConfig } from '../pageTreeConfig'

const _domain = defineType({
  name: 'domain',
  title: 'Domain (Level 1)',
  type: 'document',
  groups: [
    { name: 'detail', title: 'Detail', default: true },
    { name: 'navigation', title: 'Navigation' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'detail',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Electronic Warfare", "Information Warfare"',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      group: 'navigation',
      description: 'Numeric sort order to control appearance in the mega-menu.',
    }),
    defineField({
      name: 'showInMegaMenu',
      title: 'Show In Mega Menu',
      type: 'boolean',
      group: 'navigation',
      initialValue: true,
    }),
  ],
})

export const domain = definePageType(_domain, pageTreeConfig, {
  fieldsGroupName: 'detail',
})
