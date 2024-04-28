import { list } from "@keystone-6/core";
import {
  relationship,
  text,
  password,
  checkbox,
} from "@keystone-6/core/fields";

import roles from "../roles";

// TODO: opravit zobrazování určitých dat...

const User = list({
  access: {
    operation: {
      create: roles.isAdmin,
      query: () => true,
      delete: roles.isAdmin,
      update: roles.isAdmin,
    },
    filter: {
      query: roles.isUserOrAdmin,
    },
  },
  fields: {
    admin: checkbox(),
    name: text({ validation: { isRequired: true } }),
    username: text({
      validation: { isRequired: true },
      isIndexed: "unique",
    }),
    password: password({
      validation: { isRequired: true },
    }),
    posts: relationship({
      ref: "Post.author",
      many: true,
    }),
    galleries: relationship({
      ref: "Gallery.author",
      many: true,
    }),
  },
  ui: {
    listView: {
      defaultFieldMode: ({ session }) =>
        roles.isAdmin({ session }) ? "read" : "hidden",
    },
    itemView: {
      defaultFieldMode: ({ session }) =>
        roles.isAdmin({ session }) ? "edit" : "hidden",
    },
    hideCreate: ({ session }) => !roles.isAdmin({ session }),
    hideDelete: ({ session }) => !roles.isAdmin({ session }),
    isHidden: ({ session }) => !roles.isAdmin({ session }),
  },
});

export default User;
