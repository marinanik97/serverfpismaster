const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parametarSchema  = new Schema({
    naziv: {type: String, required: true},
    referentnevrednosti: {type: String, required: true}
});

module.exports = mongoose.model('Parametar', parametarSchema);