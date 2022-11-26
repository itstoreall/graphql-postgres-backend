// @ts-nocheck
const createSession = async (_, { input }, { db }) =>
  await db.Session.create(input);

export default createSession;
