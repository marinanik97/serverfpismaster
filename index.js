
const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const cors = require('cors');
const { connection } = require('./database/connection');

const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');

const app = express();
app.use(cors());
app.use(express.json());
connection().then(() => {});

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    
    formatError: (error) => {
        return {
            message: error.message
        }
    }
})

apolloServer.applyMiddleware({app, path: '/graphql'})

app.listen(process.env.PORT || 8001, () => {
    console.log(`Server listening on ${process.env.PORT}`);
    console.log(`Graphql endpoint on ${apolloServer.graphqlPath}`);
})

