const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const izvestajSchema = new Schema({
  //ovde Date??
  datumstampanja: { type: Date, required: true },
  napomena: String,
  doktor: { type: mongoose.Types.ObjectId, required: true, ref: "Doktor" },
  karton: { type: mongoose.Types.ObjectId, required: true, ref: "Karton" },
  stavkeizvestaj:[{ type: mongoose.Types.ObjectId, required: true, ref: 'Stavkaizvestaj' }]
});

module.exports = mongoose.model('Izvestaj', izvestajSchema);
