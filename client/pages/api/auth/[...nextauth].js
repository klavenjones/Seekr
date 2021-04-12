import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
const AWS = require('aws-sdk')

const docClient = new AWS.DynamoDB.DocumentClient({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
})

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Auth0({
      clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET,
      domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
    }),
  ],
  session: {
    jwt: true,
    maxAge: 1 * 60 * 60,
  },
  callbacks: {
    async session(session, user) {
      console.log('Session')
      console.log('USER', user)
      session.user.userId = user.sub
      console.log('SESSION', session)
      return session
    },
    async signIn(user, account, profile) {
      try {
        let params = {
          TableName: process.env.NEXT_PUBLIC_DYNAMODB_TABLE,
          Key: { userId: user.id },
        }
        const currentUser = await docClient.get(params).promise()

        if (Object.keys(currentUser).length <= 0) {
          let newUser = {
            TableName: process.env.NEXT_PUBLIC_DYNAMODB_TABLE,
            Item: {
              userId: user.id,
              name: profile.name,
              email: user.email,
              image: user.image,
            },
          }

          await docClient.put(newUser).promise()
        }
      } catch (error) {
        console.log(error.message)
      }

      return true
    },
  },
})
