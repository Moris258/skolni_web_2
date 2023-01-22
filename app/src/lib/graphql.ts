import { env } from '$env/dynamic/private';
import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(env.GRAPHQL_URL as string);
