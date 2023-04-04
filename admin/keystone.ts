import { config } from '@keystone-6/core';

import { lists } from './src/schema';
import { withAuth, session } from './src/auth';

require('dotenv').config();

export default config(
  withAuth({
    db: {
      provider: 'sqlite', // TODO: Change back to mysql
      url: 'file:./app.db',
      // url: process.env.DATABASE_URL as string,
      // prismaPreviewFeatures: ['referentialIntegrity'],
      // additionalPrismaDatasourceProperties: {
      //   referentialIntegrity: 'prisma',
      // },
    },
    ui: {
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    server: {
      port: Number(process.env.PORT),
      cors: {
        origin: process.env.CORS_ORIGIN || '*',
      },
    },
    storage: {
      local_images: {
        kind: 'local',
        type: 'image',
        generateUrl: (path) => `${process.env.BASE_URL}/images${path}`,
        serverRoute: {
          path: '/images',
        },
        storagePath: 'public/images',
      },
    },
    lists,
    session,
  })
);
