import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import * as http from 'http';
import schema from './gql/schema';

class Express {
  public express!: express.Application;
  public server: ApolloServer = new ApolloServer(schema);
  public httpServer!: http.Server;

  public init = (): void => {
    this.express = express();

    this.server.applyMiddleware({ app: this.express });
    this.httpServer = http.createServer(this.express);
    /**
     * Installing subscription handlers
     */
    this.server.installSubscriptionHandlers(this.httpServer);
  };
}

export default Express;
