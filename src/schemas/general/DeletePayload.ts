import { gql } from 'apollo-server-express';

const DeletePayload = gql`
  type DeletePayload {
    id: ID
    result: Boolean!
  }
`;

export default DeletePayload;
