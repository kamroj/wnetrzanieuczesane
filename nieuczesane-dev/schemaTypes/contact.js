export default {
    name: 'contact',
    title: 'Kontakt',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Tytuł strony',
        type: 'string',
        description: 'Tytuł wyświetlany na górze strony kontaktowej'
      },
      {
        name: 'topImage',
        title: 'Górne zdjęcie',
        type: 'image',
        description: 'Zdjęcie wyświetlane jako tło nagłówka na stronie kontaktowej'
      }
    ]
  }