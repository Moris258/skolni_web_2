import { config, list } from '@keystone-6/core';
import { lists } from './src/schema';

import { withAuth, session } from './src/auth';

// TODO: Use production version :)

export default config(
  withAuth({
    db: {
      provider: 'mysql',
      url: process.env.DATABASE_URL as string,
    },
    ui: {
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    lists,
    session,
  })
);
