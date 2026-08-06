export const richText = {
  name: 'richText',
  type: 'array',
  title: 'Rich Text',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'Quote', value: 'blockquote' }
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' }
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL'
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean'
              }
            ]
          },
          {
            name: 'customStyle',
            type: 'object',
            title: 'Advanced Text Style',
            fields: [
              {
                name: 'fontSize',
                type: 'number',
                title: 'Font Size (px)',
                description: 'e.g. 24'
              },
              {
                name: 'fontFamily',
                type: 'string',
                title: 'Font Family',
                options: {
                  list: [
                    { title: 'Inter (Sans)', value: 'Inter, sans-serif' },
                    { title: 'Outfit (Sans)', value: 'Outfit, sans-serif' },
                    { title: 'Default Sans', value: 'sans-serif' },
                    { title: 'Monospace', value: 'monospace' }
                  ]
                }
              },
              {
                name: 'color',
                type: 'string',
                title: 'Text Color (Hex)',
                description: 'e.g. #3B82F6 or rgba(255,255,255,0.8)'
              }
            ]
          }
        ]
      }
    }
  ]
};
