const { gql } = require('apollo-server-express');

module.exports = gql`
    type Report{
       kartonid: ID!
       izvestajid: Int
       datumstampanja: String
       napomena: String
       doktorid: Int
    }
    
    extend type Query{
       getReports: [Report!]
    }
`;