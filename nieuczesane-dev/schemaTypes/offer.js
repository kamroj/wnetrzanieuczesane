export default {
  name: 'offer',
  title: 'Oferta',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'topImage',
      title: 'Górne zdjęcie',
      type: 'image',
      description: 'Zdjęcie wyświetlane na górze strony oferty'
    },
    {
      name: 'basicOffer',
      title: 'Oferta Podstawowa',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Tytuł',
              type: 'string'
            },
            {
              name: 'content',
              title: 'Zawartość',
              type: 'text'
            }
          ]
        }
      ]
    },
    {
      name: 'comprehensiveOffer',
      title: 'Oferta Kompleksowa',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Tytuł',
              type: 'string'
            },
            {
              name: 'content',
              title: 'Zawartość',
              type: 'text'
            }
          ]
        }
      ]
    }
  ]
}