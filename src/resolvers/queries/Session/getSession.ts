// @ts-nocheck
const getSession = async (_, { id }, { db }) =>
  await db.Session.findOne({ where: { id } });

export default getSession;
