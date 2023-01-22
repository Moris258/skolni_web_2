import { env } from '$env/dynamic/private';
import { GraphQLClient } from 'graphql-request';

console.log(env.GRAPHQL_URL);

export const client = new GraphQLClient(env.GRAPHQL_URL as string);
