// @ts-nocheck
const deleteUser = async (_, { id }, { db }) => {
  const result = await db.User.destroy({
    where: { id },
  });

  return { id, result: result === 1 ? true : false };
};

export default deleteUser;
