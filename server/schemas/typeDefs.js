const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [String]!
  }

  type Book {
    _id: ID
    authors: [String]
    description: String!
    image: String!
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    user: User
  }

  type Mutation {
    login(email: String!, password: String!) : Auth
  }

`

module.exports = typeDefs