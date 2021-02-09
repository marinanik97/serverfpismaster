const { gql } = require('apollo-server-express');


module.exports = gql`
    type Doctor{
       id: ID
       ime: String
       prezime: String
       JMBG: String
       specijalnost: String
    }
    
    extend type Query{
       getDoctors: [Doctor!]
       getDoctorByID(id: ID!): Doctor
    }
`;