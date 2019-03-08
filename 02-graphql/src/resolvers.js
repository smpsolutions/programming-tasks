module.exports = {
  Query: {
    song: (_, { id }) => {
      if (id === "123") {
        return { id: "123", artist: "Michael Jackson", title: "Beat It" };
      }
      return null;
    },
    songs: () => [{ id: "123", artist: "Michael Jackson", title: "Beat It" }]
  }
};
