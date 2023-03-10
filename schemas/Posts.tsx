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
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'user'},
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'cover',
      title: 'Cover image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'contentImages',
      title: 'Content Images',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Content Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{type: 'reference', to: {type: 'comment'}}],
    }),
    defineField({
      name: 'saves',
      title: 'Saves',
      type: 'array',
      of: [{type: 'reference', to: {type: 'user'}}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'cover',
    },
    prepare(selection: {author: any}) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
