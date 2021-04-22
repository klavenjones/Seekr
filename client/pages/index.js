import { useEffect } from 'react'
import { Loader } from '../components/loader'

import { signIn, useSession } from 'next-auth/client'
import router from 'next/router'

export default function Home() {
  const [session, loading] = useSession()

  if (loading) return <Loader />

  useEffect(() => {
    if (session) {
      router.push('/dashboard')
    }
  }, [session, loading])

  return (
    <div className='h-screen w-full max-w-7xl mx-auto flex flex-col justify-center items-center space-y-8'>
      <h1 className='text-2xl sm:text-4xl uppercase font-semibold'>
        Login to Seekr
      </h1>
      <button
        onClick={() => signIn('auth0')}
        className='text-3xl p-4 rounded-md bg-teal-500 text-white'
      >
        Login
      </button>
    </div>
  )
}
