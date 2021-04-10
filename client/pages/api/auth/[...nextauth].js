import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

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
    async signIn(user, account, profile) {
      console.log('USER', user)
      console.log('account', account)
      console.log('profile', profile)
      return true
    },
  },
})
