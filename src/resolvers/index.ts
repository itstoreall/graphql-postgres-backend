import userQueries from './queries/Users';
import gameSessionQueries from './queries/Session';

import userMutations from './mutations/Users';
import SessionMutations from './mutations/Session';

export default {
  Query: {
    ...userQueries,
    ...gameSessionQueries,
  },
  Mutation: {
    ...userMutations,
    ...SessionMutations,
  },
};
