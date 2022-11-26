// @ts-nocheck
/* eslint-disable no-empty-pattern */
import sortData from '../../../helpers/sortDataByKey';

const getAllSessions = async (_, {}, { db }) => {
  const result = await db.Session.findAll();

  return sortData.reverse(result, 'id');
};

export default getAllSessions;
