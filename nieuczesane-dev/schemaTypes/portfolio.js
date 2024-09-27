export default {
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Project Title',
        type: 'string',
        description: 'Name of the project'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 50
        },
        description: 'Unique URL-friendly version of the project title'
      },
      {
        name: 'shortDescription',
        title: 'Short Description',
        type: 'text',
        description: 'Brief, one-line description of the project',
        validation: Rule => Rule.max(1000).warning('Should be under 50 characters')
      },
      {
        name: 'fullDescription',
        title: 'Full Project Description',
        type: 'text',
        description: 'Detailed description of the project'
      },
      {
        name: 'galleryImages',
        title: 'Gallery Images',
        type: 'array',
        of: [{ type: 'image' }],
        description: 'Images for the project gallery. The first image will be used as the main image.'
      },
      {
        name: 'order',
        title: 'Display Order',
        type: 'number',
        description: 'Order to display projects (lower numbers appear first)',
        initialValue: 9999
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm:SS',
          timeStep: 15,
          calendarTodayLabel: 'Today'
        },
        initialValue: () => new Date().toISOString(),
        readOnly: true,
      },
    ],
    orderings: [
      {
        title: 'Display Order',
        name: 'orderAsc',
        by: [
          {field: 'order', direction: 'asc'}
        ]
      },
      {
        title: 'Project Title',
        name: 'titleAsc',
        by: [
          {field: 'title', direction: 'asc'}
        ]
      },
      {
        title: 'Creation Date, Newest',
        name: 'createdAtDesc',
        by: [
          {field: 'createdAt', direction: 'desc'}
        ]
      }
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'shortDescription',
        media: 'mainImage'
      }
    }
  }