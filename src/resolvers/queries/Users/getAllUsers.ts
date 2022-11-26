// @ts-nocheck
/* eslint-disable no-empty-pattern */
import sortData from '../../../helpers/sortDataByKey';

const getAllUsers = async (_, {}, { db }) => {
  const result = await db.User.findAll();

  return sortData.reverse(result, 'id');
};

export default getAllUsers;
