const { gql } = require('apollo-server-express');


module.exports = gql`
    type Izvestaj{
       id: ID
       datumstampanja: Date
       napomena: String
       doktor: Doctor
       karton: Karton
       #stavkaizvestaj: [Stavkaizvestaj]
    }
    

    input newIzvestajInput {
       datumstampanja: Date
       napomena: String
       doktor: ID
       karton: ID
    }

    extend type Query{
       getIzvestajs: [Izvestaj!]
       getgetIzvestajsByID(id: ID!): Izvestaj
    }

    extend type Mutation {
      deleteIzvestaj(id:ID!): Izvestaj!
      newIzvestaj(input: newIzvestajInput): Izvestaj!
    }

`;