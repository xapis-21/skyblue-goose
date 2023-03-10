export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'user'},
    },
  ],
  preview: {
    select: {
      title: 'comment',
    },
  },
}
