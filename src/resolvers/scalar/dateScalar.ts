// @ts-nocheck
/* eslint-disable no-console */
/* eslint-disable indent */
import { GraphQLScalarType, Kind } from 'graphql';

export const Date = new GraphQLScalarType({
  name: 'Date',
  description: 'Custom scalar Date type',

  serialize(value) {
    return value;
  },
  parseValue(value) {
    return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) return new Date(ast.value);
    return null;
  },
});
