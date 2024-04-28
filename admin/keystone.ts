import { config } from "@keystone-6/core";

import { lists } from "./src/schema";
import { withAuth, session } from "./src/auth";

require("dotenv").config();

export default config(
  withAuth({
    db: {
      provider: "postgresql",
      url: process.env.DATABASE_URL as string,
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
        kind: "s3",
        type: "image",
        accessKeyId: process.env.BUCKET_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.BUCKET_SECRET_ACCESS_KEY as string,
        bucketName: process.env.BUCKET_NAME as string,
        region: process.env.BUCKET_REGION as string,
        endpoint: process.env.BUCKET_ENDPOINT as string,
        generateUrl: (path) =>
          path.replace(
            process.env.BUCKET_ENDPOINT_REPLACE as string,
            process.env.BUCKET_PUBLIC_URL as string
          ),
      },
    },
    lists,
    session,
  })
);
