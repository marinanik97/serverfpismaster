
const Doktor = require('../database/models/doktor');


module.exports = {
    Query: {
        getDoctors: async () => {
            return await Doktor.find();
        },
        getDoctorByID: async (_, {id}) => {
            return await Doktor.findById(id);
        }
    }
}
