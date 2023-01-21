import { list } from '@keystone-6/core';
import { relationship, timestamp, text } from '@keystone-6/core/fields';
import document from '../document';
import roles from '../roles';

const Post = list({
  access: {
    filter: {
      query: roles.canAccessPost,
    },
  },
  fields: {
    creation: timestamp({
      hooks: {
        resolveInput: ({ operation, resolvedData }) => {
          if (operation === 'create') return new Date().toISOString();
          return resolvedData.creation;
        },
      },
      ui: {
        itemView: {
          fieldMode: ({ session }) =>
            roles.admin({ session }) ? 'edit' : 'hidden',
        },
        createView: {
          fieldMode: 'hidden',
        },
      },
    }),
    author: relationship({
      ref: 'User.posts',
      many: false,
      hooks: {
        validateInput: ({ operation, resolvedData, addValidationError }) => {
          if (operation !== 'create') return;
          if (!resolvedData.author)
            addValidationError('Post must have an author!');
        },
      },
    }),
    title: text({ validation: { isRequired: true } }),
    // description: text({
    //   validation: { isRequired: true },
    //   ui: {
    //     displayMode: 'textarea',
    //   },
    // }),
    content: document,
  },
});

export default Post;
