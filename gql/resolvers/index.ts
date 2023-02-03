import * as StandsQueries from './stands/queries';
import * as StandsMutations from './stands/mutations';

const rootResolver = {
  Query: {
    ...StandsQueries,
  },
  Mutation: {
    ...StandsMutations,
  },
};
export default rootResolver;
