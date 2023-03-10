export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },

    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'category',
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      title: 'category',
    },
  },
}
