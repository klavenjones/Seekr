import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { signIn, signOut,  } from 'next-auth/client'
import LandingPage from '../components/pages/landing'
import Dashboard from '../components/pages/dashboard'

export default function Page() {
  const [session, loading] = useSession()



  if (!session) {
    return <LandingPage />
  }

  return <Dashboard />
}
