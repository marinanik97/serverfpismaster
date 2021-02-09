const {gql} = require('apollo-server-express');

module.exports = gql`

    type TipUzorka{
       id: ID!
       naziv: String
       opis: String
    }
    
    extend type Query{
       getTipUzorkas: [TipUzorka!]
    }
`;