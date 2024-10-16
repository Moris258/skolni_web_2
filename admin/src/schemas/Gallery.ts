import { list } from "@keystone-6/core";
import { relationship, select, text } from "@keystone-6/core/fields";

import roles from "../roles";
import { postTypes } from "../PostTypes";

const Gallery = list({
  access: {
    filter: {
      query: roles.isAuthorOrAdmin,
    },
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    author: relationship({
      ref: "User.galleries",
      many: false,
      hooks: {
        validateInput: ({ operation, resolvedData, addValidationError }) => {
          if (operation !== "create") return;
          if (!resolvedData.author)
            addValidationError("Gallery must have an author!");
        },
      },
    }),

    name: text({
      validation: {
        isRequired: true,
      },
    }),
    country: select({
      type: "enum",
      options: postTypes,
      ui: { displayMode: "select" },
      validation: {
        isRequired: true,
      },
    }),
    images: relationship({ ref: "Photo", many: true }),
  },
});

export default Gallery;
