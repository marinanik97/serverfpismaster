const Stavkaizvestaj = require("../database/models/stavkaizvestaj");

module.exports = {
  Query: {
    //populate prima naziv polja, ili u schemi
    getStavkaIzvestajs: async () => {
      return await Stavkaizvestaj.find()
        .populate("parametar")
        .populate({
          path: "izvestaj",
          populate: [{ path: "karton", model: "Karton" }],
        });
    },
    getStavkaIzvestajDvas: async () => {
      return await Stavkaizvestaj.find().populate("parametar");
    },
  },
  Mutation: {
    newStavka: async (_, args) => {
      const res = await Stavkaizvestaj.create(args.input);
      return await Stavkaizvestaj.findOne({ _id: res.id })
        .populate("parametar")
        .populate({
          path: "izvestaj",
          populate: [{ path: "karton", model: "Karton" }],
        });
    },
    editStavka: async (_, { input }) => {
      try {
        // if (await Stavkaizvestaj.findById(input.id)) {
        var izvestaj = input.izvestaj;
        var myquery = { izvestaj };
        var status = input.status;
        var newvalues = { $set: { status } };
        await Stavkaizvestaj.updateMany(
          myquery,
          newvalues,
          { multi: true },
          function (err, res) {
            if (err) {
              //  res.send(err);
              throw err;
            } else {
              console.log(res.nModified);
              return res.nModified;
            }
          }
        );

        // return res.nModified;
        // }
        // throw new Error("Stavkaizvestaj doesn't exists.");
      } catch (e) {
        throw e;
      }
    },
  },
};
