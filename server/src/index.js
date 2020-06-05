const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema.js');
const { createStore } = require('./utils.js');
const LaunchAPI = require('./datasources/launch.js');
const UserAPI = require('./datasources/user.js');

const store = createStore();

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store }),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}!`);
});
