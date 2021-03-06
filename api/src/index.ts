import { GraphQLServer } from 'graphql-yoga'
const { prisma } = require('../generated/prisma')

const typeDefs = `
  type Query {
    hello(name: String): String
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => {
      const returnValue = !name ? `Hello ${name || 'World!'}` : null
      return returnValue
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    prisma
  }
})

server.start(() => console.log('Server is running on http://localhost:4000'))
