// @ts-nocheck
const updateUser = async (_, { id, input }, ctx) => {
  const { db, resolvers } = ctx;

  await db.User.update(input, { where: { id } });

  return await resolvers.Query.getUser(_, { id }, ctx);
};

export default updateUser;
