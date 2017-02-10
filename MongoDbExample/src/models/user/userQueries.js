import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import userType from './userType'
import user from './userSchema'

export default {
  users: {
    type: new GraphQLList(userType),
    resolve: user.getListOfUsers
  },
  user: {
    type: userType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: user.getUserByPosition
  },
  userId: {
    type: userType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: user.getUserById
  },
  userByName: {
    type: userType,
    args: {
      name: {
        type: GraphQLString
      }
    },
    resolve: user.getUserByName
  }
};
