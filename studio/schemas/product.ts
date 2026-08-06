import { defineField, defineType } from 'sanity'
import { definePageType } from '@q42/sanity-plugin-page-tree'
import { pageTreeConfig } from '../pageTreeConfig'

const _product = defineType({
  name: 'product',
  title: 'Product (Level 4)',
  type: 'document',
  groups: [
    { name: 'detail', title: 'Detail', default: true },
    { name: 'seo', title: 'SEO' },
    { name: 'navigation', title: 'Navigation' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'detail',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "FPV Drone Buddy", "Wideband RF Detectors"',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      group: 'detail',
    }),
    defineField({
      name: 'productTag',
      title: 'Product Tag',
      type: 'string',
      group: 'detail',
    }),
    defineField({
      name: 'productStatusBadge',
      title: 'Product Status Badge',
      type: 'string',
      group: 'detail',
    }),
    defineField({
      name: 'productFreqRange',
      title: 'Product Frequency Range',
      type: 'string',
      group: 'detail',
    }),
    defineField({
      name: 'productSpecs',
      title: 'Product Specs',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'detail',
    }),
    defineField({
      name: 'productLocalImage',
      title: 'Product Local Image (String)',
      type: 'string',
      group: 'detail',
    }),
    defineField({
      name: 'productImage',
      title: 'Product Image / Thumbnail',
      type: 'image',
      group: 'detail',
      options: { hotspot: true },
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      group: 'navigation',
    }),
    defineField({
      name: 'showInMegaMenu',
      title: 'Show In Mega Menu',
      type: 'boolean',
      group: 'navigation',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'productImage',
    },
  },
})

export const product = definePageType(_product, pageTreeConfig, {
  fieldsGroupName: 'detail',
})
