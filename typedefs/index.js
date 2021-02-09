const { gql } = require("apollo-server-express");

const KartonType = require("./Karton");
const DoctorType = require("./Doctor");
const ReportType = require("./Report");
const RezultatType = require("./Rezultat");
const TipUzorka = require("./TipUzorka");
const ParametarType = require("./Parametar");
const UzorakType = require("./Uzorak");
const IzvestajType = require("./Izvestaj");
const StavkaIzvestajType = require("./StavkaIzvestaj");

const RootType = gql`
  scalar Date
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;

module.exports = [
  RootType,
  KartonType,
  ReportType,
  DoctorType,
  RezultatType,
  TipUzorka,
  ParametarType,
  UzorakType,
  IzvestajType,
  StavkaIzvestajType,
];
