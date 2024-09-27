export default {
  name: 'designProcess',
  title: 'Proces Projektowania',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      description: 'Tytuł całego procesu projektowania'
    },
    {
      name: 'topImage',
      title: 'Górne zdjęcie',
      type: 'image',
      description: 'Zdjęcie wyświetlane na górze strony procesu projektowania'
    },
    {
      name: 'steps',
      title: 'Kroki',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'stepTitle',
              title: 'Tytuł kroku',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Opis',
              type: 'text'
            },
            {
              name: 'image',
              title: 'Obraz',
              type: 'image',
              options: {
                hotspot: true
              }
            }
          ]
        }
      ]
    }
  ]
}