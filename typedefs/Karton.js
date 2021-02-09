const { gql } = require("apollo-server-express");

module.exports = gql`
  type Karton {
    id: ID!
    ime: String
    prezime: String
    JMBG: String
    datumrodjenja: Date
    pol: String
    telefon: String
    email: String
  }
  input newKartonInput {
    ime: String
    prezime: String
    JMBG: String
    datumrodjenja: Date
    pol: String
    telefon: String
    email: String
  }

  input editKartonInput {
    id: ID
    ime: String
    prezime: String
    JMBG: String
    datumrodjenja: Date
    pol: String
    telefon: String
    email: String
  }

  extend type Query {
    getKartons: [Karton!]
    getKartonById(id: ID!): Karton
  }

  extend type Mutation {
    newKarton(input: newKartonInput): Karton!
    editKarton(input: editKartonInput): Karton!
  }
`;
