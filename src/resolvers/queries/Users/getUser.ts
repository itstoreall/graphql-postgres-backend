// @ts-nocheck
const getUser = async (_, { id }, { db }) =>
  await db.User.findOne({ where: { id } });

export default getUser;
