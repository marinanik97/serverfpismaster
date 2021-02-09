const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rezultatSchema  = new Schema({
    posiljalac: {type: String, required: true},
    datumupisa: {type: Date, required: true},
    uzorak: { type: mongoose.Types.ObjectId, required: true, ref: "Uzorak" }
    // required: true,
});

module.exports = mongoose.model('Rezultat', rezultatSchema);