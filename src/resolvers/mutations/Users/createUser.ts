// @ts-nocheck
const createUser = async (_, { input }, { db }) => await db.User.create(input);

export default createUser;
