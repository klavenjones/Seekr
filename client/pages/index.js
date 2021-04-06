import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { signIn, signOut, useSession } from 'next-auth/client'
import LandingPage from '../components/pages/landing'

export default function Page() {
  const [session, loading] = useSession()

  return (
    <>
      <LandingPage />
    </>
  )
}
