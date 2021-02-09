const Izvestaj = require("../database/models/izvestaj");
const StavkaIzvestaj = require("../database/models/stavkaizvestaj");

module.exports = {
  Query: {
    getIzvestajs: async () => {
      return await Izvestaj.find({}).populate("doktor").populate("karton");
      // getIzvestajs: async () => {
      // return await Izvestaj.find({})
      //   .populate({
      //     path: "stavkaizvestaj",
      //     model: "Stavkaizvestaj",
      //     populate: { path: "parametar" },
      //   })
      //   .populate("doktor")
      // .exec(function(err, docs) {
      //   // console.log(err)
      //   // console.log(docs)
      //   return docs;
      // })
    },
  },
  Mutation: {
    newIzvestaj: async (_, args) => {
      const res = await Izvestaj.create(args.input);
      return await Izvestaj.findOne({ _id: res.id })
        .populate("doktor")
        .populate("karton");
    },
    deleteIzvestaj: async (_, { id }) => {
      try {
        return await Izvestaj.findByIdAndDelete(id)
          .populate("doktor")
          .populate("karton");
      } catch (e) {
        throw e;
      }
    },
  },
};
