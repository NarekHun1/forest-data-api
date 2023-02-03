import { APP_CONFIG } from './config';
import Express from './app';
import { syncDB } from './modules/db.module';

syncDB();

/**
 * Initialize Express
 */
const ExpressServer = new Express();
ExpressServer.init();

/**
 * Listen to port
 */
ExpressServer.httpServer.listen(APP_CONFIG.PORT, () => {
  console.log(`🚀  Server ready at ${APP_CONFIG.PORT}`);
  console.log(
    `🚀 Server ready at http://localhost:${APP_CONFIG.PORT}${ExpressServer.server.graphqlPath}`,
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${APP_CONFIG.PORT}${ExpressServer.server.subscriptionsPath}`,
  );
});
