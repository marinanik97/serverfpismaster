const Rezultat = require("../database/models/rezultat");
const Uzorak = require("../database/models/uzorak");

module.exports = {
  Query: {
    getResults: async () => {
      //mislim da ti ne treba ceo ovaj populate
      //return await Rezultat.find().populate('uzorak').populate('karton').populate('tipuzorka').populate('doktor');
      return await Rezultat.find().populate({
        path: "uzorak",
        populate: [
          { path: "karton", model: "Karton" },
          { path: "tipuzorka", model: "TipUzorka" },
          { path: "doktor", model: "Doktor" },
        ],
      });
    },
    getResultByID: async (_, { id }) => {
      return await Rezultat.findById(id);
    },
  },
  //POGLEDATI JAKO BITNO BOOKMARK
  Mutation: {
    newResult: async (_, args) => {
      // Rezultat.create({...args.input}, (err, result) => {
      //   if (err) reject(err);
      //   else resolve(result);
      // })

      const res = await Rezultat.create(args.input);
      return await Rezultat.findOne({ _id: res.id }).populate({
        path: "uzorak",
        populate: [
          { path: "karton", model: "Karton" },
          { path: "tipuzorka", model: "TipUzorka" },
          { path: "doktor", model: "Doktor" },
        ],
      });
    },
    deleteResult: async (_, { id }) => {
      try {
        return await Rezultat.findByIdAndDelete(id).populate({
          path: "uzorak",
          populate: [
            { path: "karton", model: "Karton" },
            { path: "tipuzorka", model: "TipUzorka" },
            { path: "doktor", model: "Doktor" },
          ],
        });
      } catch (e) {
        throw e;
      }
    },
    editResult: async (_, { input }) => {
      try {
        if (await Rezultat.findById(input.id)) {
          return await Rezultat.findByIdAndUpdate(
            input.id,
            { ...input },
            { new: true }
          ).populate({
            path: "uzorak",
            populate: [
              { path: "karton", model: "Karton" },
              { path: "tipuzorka", model: "TipUzorka" },
              { path: "doktor", model: "Doktor" },
            ],
          });
        }
        throw new Error("Rezultat doesn't exists.");
      } catch (e) {
        throw e;
      }
    },
  },
};
