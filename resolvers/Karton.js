const Karton = require("../database/models/karton");

module.exports = {
  Query: {
    getKartons: async () => {
      return await Karton.find();
    },
    getKartonById: async (_, { id }) => {
      return await Karton.findById(id);
    },
  },
  Mutation: {
    newKarton: async (_, args) => {
      const res = await Karton.create(args.input);
      return await Karton.findOne({ _id: res.id });
    },
    editKarton: async (_, { input }) => {
      try {
        if (await Karton.findById(input.id)) {
          return await Karton.findByIdAndUpdate(
            input.id,
            { ...input },
            { new: true }
          );
        }
        throw new Error("Karton doesn't exists.");
      } catch (e) {
        throw e;
      }
    },
  },
};
