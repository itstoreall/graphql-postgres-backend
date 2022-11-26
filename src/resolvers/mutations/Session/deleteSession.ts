// @ts-nocheck
const deleteSession = async (_, { id }, { db }) => {
  const result = await db.Session.destroy({
    where: { id },
  });

  return { id, result: result === 1 ? true : false };
};

export default deleteSession;
