/**
 * Primary file for GraphQL Schema
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import { gql } from 'apollo-server-express';
import { ApolloServerExpressConfig } from 'apollo-server-express';
import resolvers from '../resolvers/index';

const q = {
  Query: {
    test: () => {
      console.log('asd');
      return true;
    },
  },
};
const typeDefs = gql`
  type Query {
    getStands(filter: getStandsInput): StandWithPagination
    getStandById(stand_id: ID!): Stand
  }

  type Mutation {
    updateStand(stand_id: ID!, updateData: updateStandInput): Boolean
    deleteStand(stand_id: ID!): Boolean
  }

  enum mainSpeciesTypesEnum {
    pine
    spruce
    other
    birch
  }

  type Stand {
    stand_id: ID!
    vol_m3_per_ha: Int!
    age_years: Int!
    longitude: Float!
    latitude: Float!
    size_in_ha: Float!
    main_species: mainSpeciesTypesEnum!
  }

  type StandWithPagination {
    total: Int!
    items: [Stand]!
  }
  
  input updateStandInput {
    vol_m3_per_ha: Int
    age_years: Int
    longitude: Float
    latitude: Float
    size_in_ha: Float
    main_species: mainSpeciesTypesEnum
  }
  
  input getStandsInput {
    main_species: String
    age_years: Int
    page: Int = 1
    limit: Int = 10
  }
`;

const schema: ApolloServerExpressConfig = {
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
};

export default schema;
