export default {
  name: 'informations',
  title: 'Informations',
    type: 'document',
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
          name: 'nameConfiguration',
          title: 'Name Configuration',
          type: 'object',
          fields: [
            {
              name: 'desktopPositions',
              title: 'Desktop positions',
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
                  {
                      name: 'fontSize',
                      title: 'Font size',
                      type: 'number'
                  }
              ]
            },
            {
                name: 'mobilePositions',
                title: 'Mobile positions',
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
                    {
                        name: 'fontSize',
                        title: 'Font size',
                        type: 'number'
                    }
                ]
            }
          ]
        },
        {
            name: "jobTitle",
            title: "Job title",
            type: "string"
        },
        {
            name: 'titleConfiguration',
            title: 'Title Configuration',
            type: 'object',
            fields: [
            {
                name: 'desktopPositions',
                title: 'Desktop positions',
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
                    {
                        name: 'fontSize',
                        title: 'Font size',
                        type: 'number'
                    }
                ]
            },
            {
                name: 'mobilePositions',
                title: 'Mobile positions',
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
                    {
                        name: 'fontSize',
                        title: 'Font size',
                        type: 'number'
                    }
                ]
            }
            ]
        },
        {
            name: "status",
            title: "Status",
            type: "string"
        },
        {
            name: 'statusConfiguration',
            title: 'Status Configuration',
            type: 'object',
            fields: [
            {
                name: 'desktopPositions',
                title: 'Desktop positions',
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
                    {
                        name: 'fontSize',
                        title: 'Font size',
                        type: 'number'
                    }
                ]
            },
            {
                name: 'mobilePositions',
                title: 'Mobile positions',
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
                    {
                        name: 'fontSize',
                        title: 'Font size',
                        type: 'number'
                    }
                ]
            }
            ]
        },
    ]
}
