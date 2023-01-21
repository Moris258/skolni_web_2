import { config } from '@keystone-6/core';

import { lists } from './src/schema';
import { withAuth, session } from './src/auth';

require('dotenv').config();

export default config(
  withAuth({
    db: {
      provider: 'mysql',
      url: process.env.DATABASE_URL as string,
      prismaPreviewFeatures: ['referentialIntegrity'],
      additionalPrismaDatasourceProperties: {
        referentialIntegrity: 'prisma',
      },
    },
    ui: {
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    lists,
    session,
  })
);
