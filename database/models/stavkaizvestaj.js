const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stavkaizvestajSchema  = new Schema({
    rb: {type: Number, required: true}, 
    indikator: {type: String, required: true},
    rezultatparametra: {type: Number, required: true},
    status: {type: String, required: true},
    izvestaj: { type: mongoose.Types.ObjectId, required: true, ref: "Izvestaj" },
    parametar: { type: mongoose.Types.ObjectId, required: true, ref: "Parametar" }
    
});

module.exports = mongoose.model('Stavkaizvestaj', stavkaizvestajSchema);