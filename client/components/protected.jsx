import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export function Protected({ children }) {
  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!(session || loading)) {
      router.push('/')
    }
  }, [session, loading])

  return <div>{children}</div>
}
