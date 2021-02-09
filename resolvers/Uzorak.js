
const Uzorak = require('../database/models/uzorak');


module.exports = {
    Query: {
        //populate prima naziv polja, ili u schemi
        getUzoraks: async () => {
            return await Uzorak.find().populate('karton').populate('tipuzorka').populate('doktor');
        },
        getUzorakByID: async (_, {id}) => {
            return await Uzorak.findById(id);
        }
    }
}
