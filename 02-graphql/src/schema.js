const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    song(id: ID!): Song
    songs: [Song]!
  }

  type Song {
    id: ID!
    artist: String!
    title: String!
  }
`;

module.exports = typeDefs;
