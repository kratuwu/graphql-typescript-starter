
import { environment } from './environment';
import resolvers from './resolvers';
import typeDefs from './schemas';
import express = require('express');
import { ApolloServer } from 'apollo-server-express';

const app = express ();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground
});

apolloServer.applyMiddleware({ app, path: '/graphql' });

const port = 8000;
const server = app.listen({ port }, () => {
  console.log('Apollo Server on http://localhost:'+port+'/graphql');
});

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}