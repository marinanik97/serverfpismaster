const { gql } = require('apollo-server-express');


module.exports = gql`
    type Uzorak{
       id: ID
       potrebnirezultati: String
       karton: Karton
       tipuzorka: TipUzorka
       doktor: Doctor
    }
    
    extend type Query{
       getUzoraks: [Uzorak!]
       getUzorakByID(id: ID!): Uzorak
    }
`;