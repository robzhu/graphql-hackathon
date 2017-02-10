// Import GraphQL and destructure for easy access
import {
  GraphQLObjectType,
  GraphQLSchema
 } from 'graphql'

// Import express server
import express from 'express'

// Import mongoose to connect to MongoDB
import mongoose from 'mongoose'

// Import express-graphql an easy express integration of https://github.com/graphql/graphiql
import graphqlHTTP from 'express-graphql'

// Import GraphQL Queries
import userQueries from './models/user/userQueries'

// Import GraphQL Mutations
import userMutations from './models/user/userMutations'

// Setup GraphQL RootQuery
let RootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'Realize Root Query',
  fields: () => ({
    user: userQueries.user,
    users: userQueries.users,
    userId: userQueries.userId,
    userByName: userQueries.userByName
  })
})

// Setup GraphQL RootMutation
let RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Realize Root Mutations',
  fields: () => ({
    addUser: userMutations.addUser,
    updateUser: userMutations.updateUser
  })
})

// Set up GraphQL Schema with our RootQuery and RootMutation
let schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})

// Connect MongoDB with Mongoose
mongoose.connect('mongodb://localhost/graphql-express-mongodb')

// Set up Express and integrate with our GraphQL Schema and configure to use graphiql
var app = express()
app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }))
app.listen('3000')

var status = {
  Express: {
    "Online": true,
    "Port": 3000
  },
  "GraphiQL": {
    "url": "http://localhost:3000/graphql"
  }
}
console.dir(status, {depth: null, colors: true })
