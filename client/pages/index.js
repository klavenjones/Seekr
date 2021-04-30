import { useEffect } from 'react'
import { Loader } from '../components/loader'

import { signIn, useSession } from 'next-auth/client'
import LandingPage from '../components/pages/landing'

import router from 'next/router'

export default function Home() {
  const [session, loading] = useSession()

  if (loading) return <Loader />

  useEffect(() => {
    if (session && !loading) {
      router.push('/dashboard')
    }
  }, [session, loading])

  return <LandingPage />
}
