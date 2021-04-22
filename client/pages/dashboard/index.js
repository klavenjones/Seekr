import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Jobs } from '../../components/pages'
import { Protected } from '../../components/protected'

export default function Dashboard() {
  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!(session || loading)) {
      router.push('/')
    }
  }, [session, loading])

  return (
    <Protected>
      <Jobs />
    </Protected>
  )
}
