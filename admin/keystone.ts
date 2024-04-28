import { config } from "@keystone-6/core";

import { lists } from "./src/schema";
import { withAuth, session } from "./src/auth";

require("dotenv").config();

export default config(
  withAuth({
    db: {
      // provider: "mysql",
      // url: process.env.DATABASE_URL as string,
      provider: "sqlite",
      url: "file:./db.db",
    },
    ui: {
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    server: {
      port: Number(process.env.PORT),
      cors: {
        origin: process.env.CORS_ORIGIN || "*",
      },
    },
    storage: {
      photos: {
        kind: "local",
        type: "image",
        generateUrl: (path) => `${process.env.BASE_URL}/images${path}`,
        serverRoute: {
          path: "/images",
        },
        storagePath: "public/images",
      },
    },
    lists,
    session,
  })
);
