# GraphQL API Server

GraphQL is query language and an alternative to REST, it was developed mainly by facebook. Since 2017 starts to have a very large adoption in the web industry mainly because it simplifies retrieval of structured data and provides a clear resolver based structure to retrieve data.

This boilerplate already contains a functional GraphQL Server based on Apollo Server (<https://www.apollographql.com>).

To run your server:

```shell
npm start
```

Then open you browser and use the GraphQL playground on http://localhost:4000

## 1. Implement a substract query

Similar to the first task where you used JSON-RPC, implement a query with the necessary arguments that will perform a substraction of two members. Make sure to handle edge cases and return useful error messages.

## 2. Connecting external data

Using a fetch module (such as `axios` for example) modify the preexisting queries to retrieve data from an external source.

For instance if you choose to retrieve data from MusicBrainz when a user queries your API for the song with id=`9ab7ee3c-57af-438e-80c0-f388270c1281`, query the MusicBrainz API for the recording with the corresponding id and return the appropriate fields through your resolver.

As an example: <http://musicbrainz.org/ws/2/recording/9ab7ee3c-57af-438e-80c0-f388270c1281?format=json&inc=artists%2Breleases>

You may implement this with any common music services such as Soundcloud, LastFM, Spotify etc. Feel free to add any information and data you think may be useful in your Schema and Resolvers.


**References:**
* <https://graphql.org/>
* <https://www.apollographql.com/docs/tutorial/resolvers.html#mutation>
* <https://musicbrainz.org/doc/XML_Web_Service/Version_2>