const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const uzorakSchema  = new Schema({
    potrebnirezultati: {type: String, required: true},
    karton: { type: Schema.Types.ObjectId, required: true, ref: "Karton" },
    tipuzorka: { type: Schema.Types.ObjectId, required: true, ref: "TipUzorka" },
    doktor: { type: Schema.Types.ObjectId, required: true, ref: "Doktor" }
    // required: true,
});

module.exports = mongoose.model('Uzorak', uzorakSchema);