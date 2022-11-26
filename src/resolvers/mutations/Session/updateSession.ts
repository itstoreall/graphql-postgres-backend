// @ts-nocheck
const updateSession = async (_, { id, input }, ctx) => {
  const { db, resolvers } = ctx;

  await db.Session.update(input, { where: { id } });

  return await resolvers.Query.getSession(_, { id }, ctx);
};

export default updateSession;
