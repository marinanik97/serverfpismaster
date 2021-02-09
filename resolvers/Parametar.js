
const Parametar = require('../database/models/parametar');


module.exports = {
    Query: {
        getParametars: async () => {
            return await Parametar.find();
        },
        getParametarByID: async (_, {id}) => {
            return await Parametar.findById(id);
        }
    }
}
