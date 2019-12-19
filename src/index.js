import { GraphQLServer } from 'graphql-yoga'
import packageJson from '../package.json'

//Type definations  (Application Schema)
//Describes the operations and the data structures.

const typeDefs = `
    type Query {
        version: String!
    }
`

//Resolvers object for our API
// These are the functions that acutally run when various oprations are performed.

const resolvers = {
    Query: {
        version() {
            return `${packageJson.version}`
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