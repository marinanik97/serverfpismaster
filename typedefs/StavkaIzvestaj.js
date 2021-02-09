const { gql } = require("apollo-server-express");

module.exports = gql`
  type Stavkaizvestaj {
    id: ID
    rb: Int
    indikator: String
    rezultatparametra: Float
    status: String
    izvestaj: Izvestaj
    parametar: Parametar
  }
  input newStavkaInput {
    rb: Int
    indikator: String
    rezultatparametra: Float
    status: String
    izvestaj: ID
    parametar: ID
  }
  input editStavkaInput {
    izvestaj: ID
    status: String
  }
  extend type Query {
    getStavkaIzvestajs: [Stavkaizvestaj!]
    getStavkaIzvestajDvas: [Stavkaizvestaj!]
  }

  extend type Mutation {
    newStavka(input: newStavkaInput): Stavkaizvestaj!
    editStavka(input: editStavkaInput): Int
  }
`;
