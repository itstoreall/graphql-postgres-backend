import { gql } from 'apollo-server-express';

const SessionSchema = gql`
  scalar Date

  type Session {
    id: ID
    sessionId: Int!
    actions: [Int]!
    date: Date!
  }

  input SessionInput {
    sessionId: Int!
    actions: [Int]!
    date: Date!
  }

  type Query {
    getAllSessions: [Session]
    getSession(id: ID!): Session
  }

  type Mutation {
    createSession(input: SessionInput!): Session!
    updateSession(id: ID!, input: SessionInput): Session!
    deleteSession(id: ID!): DeletePayload!
  }
`;

export default SessionSchema;
