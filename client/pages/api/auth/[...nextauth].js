import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { DynamoDBAdapter } from 'next-auth-dynamodb-adapter'

console.log(process.env)

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
    maxAge: 10 * 60,
  },
  adapter: new DynamoDBAdapter(
    {
      region: 'us-east-2',
      credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
      },
    },
    {
      usersTable: 'USERS',
    }
  ),
})
