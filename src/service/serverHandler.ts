// @ts-nocheck
import lgs from '../lgs';
import db from '../db/connect';
import runApolloServer from '../utils/apollo';
import startServer from '../helpers/startServer';
// import cron from 'node-cron'; // uncomment this to run cron

export const serverHandler = async (port, app) => {
  await dbSync(port);
  runApolloServer(app);
  startServer();

  // add your cron function call here bellow
};

const dbSync = async (port) => {
  await db.sequelize.sync();
  lgs.runServer(port);
};

// add your function here

// ================================================

// The example:

// export const runCheckEvents = (label) =>
//   cron.schedule('*/30 * * * * *', () => checkEvents(label)); // *

// */35 * * * * * - every 35 sec
// */10 * * * * - every 10 min
// */24 * * * - every 24 hours
