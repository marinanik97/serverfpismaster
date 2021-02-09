const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const kolicinaSchema  = new Schema({
    broj: {type: Double, required: true},
    jedinicamere: {type: String, required: true}
});

module.exports = mongoose.model('Kolicina', kolicinaSchema);