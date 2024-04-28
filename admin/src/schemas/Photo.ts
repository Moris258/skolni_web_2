import { list } from "@keystone-6/core";
import { image } from "@keystone-6/core/fields";

import roles from "../roles";

const Photo = list({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: roles.isAdmin,
      delete: roles.isAdmin,
    },
  },
  fields: {
    photo: image({ storage: "photos" }),
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

export default Photo;
