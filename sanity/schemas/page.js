
export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'cameraPositions',
      title: 'Camera positions',
      type: 'object',
      fields: [
        {
          name: 'desktop',
          title: 'Desktop',
          type: 'object',
          fields: [
              {
                  name: 'x',
                  title: 'X',
                  type: 'number'
              },
              {
                  name: 'y',
                  title: 'Y',
                  type: 'number'
              },
              {
                  name: 'z',
                  title: 'Z',
                  type: 'number'
              },
          ]
        },
        {
            name: 'mobile',
            title: 'Mobile',
            type: 'object',
            fields: [
                {
                    name: 'x',
                    title: 'X',
                    type: 'number'
                },
                {
                    name: 'y',
                    title: 'Y',
                    type: 'number'
                },
                {
                    name: 'z',
                    title: 'Z',
                    type: 'number'
                },
            ]
        }
      ]
    },
    {
      name: 'displayContent',
      title: 'Display content ?',
      type: 'boolean',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'displayProjects',
      title: 'Display projects ?',
      type: 'boolean',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'reference', to: {type: 'project'}}],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
