export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'image_url',
      title: 'ImageURL',
      type: 'string',
    }
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
