const { gql } = require("apollo-server-express");

module.exports = gql`
  type Rezultat {
    id: ID
    posiljalac: String
    datumupisa: Date
    uzorak: Uzorak
  }
#proveriti za uzorak
  input newRezultatInput {
    posiljalac: String
    datumupisa: Date
    uzorak: ID
  }

  input editRezultatInput {
    id: ID
    posiljalac: String
    datumupisa: Date
    uzorak: ID
  }

  extend type Query {
    getResults: [Rezultat!]
    getResultByID(id: ID!): Rezultat
  }

  extend type Mutation {
    newResult(input: newRezultatInput): Rezultat!
    deleteResult(id:ID!): Rezultat!
    editResult(input: editRezultatInput): Rezultat!
  }
`;
