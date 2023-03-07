import {defineField} from 'sanity'

export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of:[{type:'block'}]
    }),
  ],
}
