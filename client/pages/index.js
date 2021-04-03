import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  const [session, loading] = useSession()
  console.log(session)
  return (
    <>
      <div className='h-screen w-full flex justify-center items-center border-2'>
        {!session && (
          <div className='h-10 flex flex-col space-y-5'>
            <h2 className='text-3xl'>Not Signed In</h2>
            <button
              className='bg-blue-500 text-white font-medium p-4 rounded-lg'
              onClick={() => signIn()}
            >
              Sign in
            </button>
          </div>
        )}
        {session && (
          <div className='h-10'>
            <h2 className='text-3xl'>Signed in as {session.user.email}</h2>
            <button
              className='bg-blue-500 text-white font-medium p-4 rounded-lg'
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </>
  )
}
