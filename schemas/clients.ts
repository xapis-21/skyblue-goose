export default {
  name: 'clients',
  title: 'Clients',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'isYoutube',
      title: 'is Youtube',
      type: 'boolean',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'poster',
      title: 'Poster',
      type: 'string',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'string',
    }
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
