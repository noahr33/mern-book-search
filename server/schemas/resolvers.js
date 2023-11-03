const { GraphQLError } = require('graphql')
const { User, bookSchema } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId })
    },
  },
  Mutation: {
    login: async ({ email, password }) => {
      const user = await User.findOne({ email })
      if (!user) {
        throw new GraphQLError('Error logging in', {
          code: 401
        })
      }
      const isCorrectPw = await user.checkPassword(password)
      if (!isCorrectPw) {
        throw new GraphQLError('Error loggin in', {
          code: 401
        })
      }
      const token = signToken(user)
      return { user, token }
    }
  }

}

module.exports = resolvers