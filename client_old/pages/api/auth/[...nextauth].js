import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { docClient } from '../../../util/docclient'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Auth0({
      clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET,
      domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
    }),
  ],
  // secret: process.env.SECRET,
  session: {
    jwt: true,
    maxAge: 1 * 60 * 60,
  },
  jwt: {
    secret: process.env.SECRET,
  },
  callbacks: {
    async session(session, user) {
      session.user.userId = user.sub
      return session
    },
    async jwt(token, user, account, profile, isNewUser) {
      if (user?.id) {
        token.userId = user.id
      }
      return token
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
