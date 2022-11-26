// @ts-nocheck
import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../../schemas/index';
import resolvers from '../../resolvers/index';
import db from '../../db/connect';

const runApolloServer = async (app) => {
  let server = null;
  server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { db, resolvers },
  });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
};

export default runApolloServer;
