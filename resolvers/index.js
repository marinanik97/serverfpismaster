const KartonResolver = require('./Karton');
const DoctorResolver = require('./Doctor');
const ReportResolver = require('./Report');
const RezultatResolver = require('./Rezultat');
const TipUzorkaResolver = require('./TipUzorka');
const ParametarResolver = require('./Parametar');
const UzorakResolver = require('./Uzorak');
const IzvestajResolver = require('./Izvestaj');
const StavkaIzvestajResolver = require('./StavkaIzvestaj');

const GraphQLDateTime = require("graphql-iso-date");

const customScalarResolver = {
    Date: GraphQLDateTime
};

module.exports = [
    //customScalarResolver,
    KartonResolver,
    DoctorResolver,
    ReportResolver,
    RezultatResolver,
    TipUzorkaResolver,
    ParametarResolver,
    UzorakResolver,
    IzvestajResolver,
    StavkaIzvestajResolver
]