import { list } from "@keystone-6/core";
import { relationship, timestamp, text, select } from "@keystone-6/core/fields";
import document from "../document";
import roles from "../roles";
import { postTypes } from "../PostTypes";

const Post = list({
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
    creation: timestamp({
      hooks: {
        resolveInput: ({ operation, resolvedData }) => {
          if (operation === "create") return new Date().toISOString();
          return resolvedData.creation;
        },
      },
      ui: {
        itemView: {
          fieldMode: ({ session }) =>
            roles.isAdmin({ session }) ? "edit" : "hidden",
        },
        createView: {
          fieldMode: "hidden",
        },
      },
    }),
    author: relationship({
      ref: "User.posts",
      many: false,
      hooks: {
        validateInput: ({ operation, resolvedData, addValidationError }) => {
          if (operation !== "create") return;
          if (!resolvedData.author)
            addValidationError("Post must have an author!");
        },
      },
      ui: {
        hideCreate: true,
      },
    }),
    title: text({ validation: { isRequired: true } }),
    country: select({
      type: "enum",
      options: postTypes,
      ui: { displayMode: "select" },
      validation: {
        isRequired: true,
      },
    }),
    content: document,
  },
});

export default Post;
