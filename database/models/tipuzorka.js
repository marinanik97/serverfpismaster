const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tipUzorkaSchema  = new Schema({
    naziv: {type: String, required: true},
    opis: {type: String, required: true}
});

module.exports = mongoose.model('TipUzorka', tipUzorkaSchema);