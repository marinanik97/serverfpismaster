const { gql } = require('apollo-server-express');


module.exports = gql`
    type Parametar{
        id: ID
       naziv: String
       referentnevrednosti: String
    }
    
    extend type Query{
       getParametars: [Parametar!]
       getParametarByID(id: ID!): Parametar
    }
`;