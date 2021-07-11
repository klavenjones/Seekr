import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { docClient } from '../../../lib/docclient'
import * as uuid from 'uuid'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Auth0({
      clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET,
      domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN
    }),
    // Providers.Email({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD
    //     }
    //   },
    //   from: process.env.EMAIL_FROM
    // }),
    // Providers.GitHub({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET
    // })
    // Providers.Google({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    // Providers.Twitter({
    //   clientId: process.env.TWITTER_ID,
    //   clientSecret: process.env.TWITTER_SECRET
    // })
  ],
  // secret: process.env.SECRET,
  session: {
    jwt: true,
    maxAge: 1 * 60 * 60
  },
  jwt: {
    secret: process.env.SECRET
  },
  debug: true,
  callbacks: {
    async session(session, user) {
      let params = {
        TableName: process.env.NEXT_PUBLIC_DYNAMODB_TABLE,
        FilterExpression: 'providerId = :providerId',
        ExpressionAttributeValues: {
          ':providerId': user.sub
        }
      }
      const currentUser = await docClient.scan(params).promise()
      session.user.userId = currentUser.Items[0].userId
      return session
    },
    async jwt(token, user, account, profile, isNewUser) {
      let params = {
        TableName: process.env.NEXT_PUBLIC_DYNAMODB_TABLE,
        FilterExpression: 'providerId = :providerId',
        ExpressionAttributeValues: {
          ':providerId': token.sub
        }
      }
      const currentUser = await docClient.scan(params).promise()
      if (currentUser.Items.length > 0) {
        token.userId = currentUser.Items[0].userId
      }
      return token
    },
    async signIn(user, account, profile) {
      try {
        let params = {
          TableName: process.env.NEXT_PUBLIC_DYNAMODB_TABLE,
          FilterExpression: 'providerId = :providerId',
          ExpressionAttributeValues: {
            ':providerId': user.id
          }
        }
        const currentUser = await docClient.scan(params).promise()
        if (currentUser.Items.length <= 0) {
          let userId = uuid.v4()

          let newUser = {
            TableName: process.env.NEXT_PUBLIC_DYNAMODB_TABLE,
            Item: {
              providerId: user.id,
              userId: userId,
              name: profile.name,
              email: user.email,
              image: user.image
            }
          }

          await docClient.put(newUser).promise()
        }
      } catch (error) {
        console.log(error.message)
      }

      return true
    }
  }
})
