export default {
  name: 'home',
  title: 'Strona Główna',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'slides',
      title: 'Slajdy',
      type: 'array',
      of: [{ type: 'image' }],
      description: 'Zdjęcia do galerii na stronie głównej'
    },
    {
      name: 'aboutProjects',
      title: 'O Projektach',
      type: 'object',
      fields: [
        { name: 'header', title: 'Nagłówek', type: 'string' },
        { name: 'content', title: 'Treść', type: 'text' }
      ]
    },
    {
      name: 'aboutCompany',
      title: 'O Firmie',
      type: 'object',
      fields: [
        { name: 'header', title: 'Nagłówek', type: 'string' },
        { name: 'content', title: 'Treść', type: 'text' },
        { name: 'image', title: 'Zdjęcie', type: 'image' },
        {
          name: 'keyPoints',
          title: 'Kluczowe punkty',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'key', title: 'Słowo kluczowe', type: 'string' },
                { name: 'value', title: 'Opis', type: 'text' }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'aboutOffer',
      title: 'Oferta',
      type: 'object',
      fields: [
        { name: 'header', title: 'Hasło oferty', type: 'string' }
      ]
    },
    {
      name: 'opinions',
      title: 'Opinie',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'content', title: 'Treść opinii', type: 'text' },
            { name: 'author', title: 'Autor', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'quote',
      title: 'Cytat',
      type: 'object',
      fields: [
        { name: 'content', title: 'Treść cytatu', type: 'text' },
        { name: 'author', title: 'Autor', type: 'string' }
      ]
    }
  ]
}