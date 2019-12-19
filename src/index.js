import { GraphQLServer } from 'graphql-yoga'

//Type definations  (Application Schema)
//Describes the operations and the data structures.

const typeDefs = `
    type Query {
        hello: String!
    }
`

//Resolvers object for our API
// These are the functions that acutally run when various oprations are performed.

const resolvers = {
    Query: {
        hello() {
            return "Hello World!"
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(()=>{
    console.log('The Server is up!')
})