import { gql } from 'apollo-server-express';

const UserSchema = gql`
  type User {
    id: ID
    name: String!
    balance: Float!
    active: Boolean!
  }

  input UserInput {
    name: String!
    balance: Float!
    active: Boolean!
  }

  type Query {
    getAllUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(input: UserInput!): User!
    updateUser(id: ID!, input: UserInput): User!
    deleteUser(id: ID!): DeletePayload!
  }
`;

export default UserSchema;
