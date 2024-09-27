export default {
  name: 'aboutMe',
  title: 'O Mnie',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł strony',
      type: 'string',
      description: 'Tytuł wyświetlany na górze strony "O mnie"'
    },
    {
      name: 'topImage',
      title: 'Górne zdjęcie',
      type: 'image',
      description: 'Zdjęcie wyświetlane jako tło nagłówka'
    },
    {
      name: 'profileImage',
      title: 'Zdjęcie profilowe',
      type: 'image',
      description: 'Zdjęcie profilowe Weroniki'
    },
    {
      name: 'content',
      title: 'Treść',
      type: 'text',
      description: 'Treść strony "O mnie".'
    }
  ]
}